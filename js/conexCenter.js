// Función para guardar el usuario en Local Storage
function guardarUsuario() {
  // Obtener el valor del input
  var userName = document.getElementById('userName').value;
  var userMail = document.getElementById('userMail').value;
  var userPassword = document.getElementById('userPassword').value;

  if (userMail.trim() && userPassword.trim() === '') {
    alert('Por favor ingrese un nombre de usuario válido');
    return;
  }

  // Obtener la lista de usuarios guardados desde Local Storage (si existe)
  var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

  const newUser = {
    name: userName,
    mail: userMail,
    password: userPassword
  }
  console.log(newUser);
  // Agregar el nuevo usuario a la lista
  usuariosGuardados.push(newUser);

  // Guardar la lista actualizada en Local Storage
  localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

  // Actualizar la tabla de usuarios
  actualizarTablaUsuarios();
}

// Función para actualizar la tabla de usuarios
function actualizarTablaUsuarios() {
  // Obtener la referencia al tbody de la tabla
  var tbody = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];

  // Limpiar el tbody
  tbody.innerHTML = '';

  // Obtener la lista de usuarios guardados desde Local Storage (si existe)
  var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Iterar sobre la lista de usuarios para agregarlos a la tabla
  usuariosGuardados.forEach(function (usuario, index) {
    var row = tbody.insertRow();
    var cellNumero = row.insertCell();
    var cellNombre = row.insertCell();
    var cellUsuario = row.insertCell();
    var cellEliminar = row.insertCell();
    cellNumero.textContent = index + 1;
    cellNombre.textContent = usuario.name;
    cellUsuario.textContent = usuario.mail;
    var botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn', 'btn-outline-danger', 'btn-no-border');
    var icono = document.createElement('i');
    icono.classList.add('bi', 'bi-trash3');
    botonEliminar.appendChild(icono);
    // Agregar un event listener para el botón de eliminar
    botonEliminar.addEventListener('click', function () {
      eliminarUsuario(index);
    });
    cellEliminar.appendChild(botonEliminar);
  });
}

// Función para eliminar un usuario
function eliminarUsuario(index) {
  // Obtener la lista de usuarios guardados desde Local Storage
  var usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Eliminar el usuario seleccionado del array
  usuariosGuardados.splice(index, 1);

  // Guardar la lista actualizada en Local Storage
  localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

  // Actualizar la tabla de usuarios
  actualizarTablaUsuarios();
}


// Llamar a la función para cargar los usuarios al cargar la página
window.onload = function () {
  actualizarTablaUsuarios();
};
