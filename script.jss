document.getElementById('actualizarBoton').addEventListener('click', function() {
// Obtén referencias a los elementos del DOM
    var loader = document.getElementById('loader'); // Elemento de carga que muestra el indicador de carga
    var content = document.getElementById('content'); // Contenido principal donde se mostrará la tabla de usuarios
    var tableBody = document.getElementById('user-table-body'); // Cuerpo de la tabla donde se insertarán los datos de usuarios

 // Muestra el indicador de carga removiendo la clase 'd-none'
    loader.classList.remove('d-none');

    // Realiza una solicitud (fetch) a la API 'https://reqres.in/api/users?delay=3'
    fetch('https://reqres.in/api/users?delay=3')
        .then(response => response.json()) // Convierte la respuesta a formato JSON
        .then(data => {
            tableBody.innerHTML = ''; // Limpia el contenido anterior del cuerpo de la tabla

// Ejecuta sobre los datos obtenidos y construye filas de la tabla dinámicamente
            data.data.forEach(user => {
                var row = `
                    <tr>
                        <td data-label="ID">${user.id}</td>
                        <td data-label="Nombre">${user.first_name}</td>
                        <td data-label="Apellido">${user.last_name}</td>
                        <td data-label="Email">${user.email}</td>
                        <td data-label="Avatar"><img src="${user.avatar}" alt="Avatar de ${user.first_name}" class="avatar-img"></td>
                    </tr>
                `;
                tableBody.innerHTML += row; // Agrega cada fila a la tabla
            });

// Oculta el indicador de carga y muestra el contenido principal
            loader.classList.add('d-none'); // Agrega la clase 'd-none' para ocultar el loader
            content.classList.remove('d-none'); // Remueve la clase 'd-none' para mostrar el contenido principal
        })
        .catch(error => {
            console.error('Error al obtener usuarios:', error); // Maneja errores en la solicitud fetch e imprime el error en la consola
        });
});
