// Event listener para el botón "Añadir Producto"
document.getElementById('añadir').addEventListener('click', function() {
    const formulario = document.getElementById('prodNuevo');
    formulario.classList.toggle('new');
});

fetch('./json/datos.json')
    .then(respuesta => respuesta.json())
    .then(datos => mostrarProductos(datos))

const mostrarProductos = (datos) => {
    let productos = ''
    const contenedor = document.querySelector('#contProducAdmin')
    datos.forEach(datos => {
        productos += 
        `<div class="card border border-1 border-dark d-flex flex-column align-items-center"
            style="width: 100%; max-width: 300px; margin:30px">
            <img src="${datos.imagen}" class="card-img-top" alt="...">
            <div class="card-body ">
                <h4>${datos.titulo}</h4>
                <p class="card-text ">${datos.descripcion}</p>
            </div>
            <p class="card-text border border-secondary rounded p-2"><strong>${datos.precio}</strong></p>
            <button class="btn btn-outline-warning mt-auto mb-3 edit">Editar</button>
            <button class="btn btn-outline-danger mt-auto mb-3" type="submit"><i class="bi bi-trash"></i></button>
        </div>`
    })
    contenedor.innerHTML = productos

    // Añadir event listeners a los botones "Editar"
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formulario = document.getElementById('prodEditar');
            formulario.classList.toggle('newE');
        });
    });
}
