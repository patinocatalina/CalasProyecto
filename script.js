// ===== FILTRO DE CATEGORÍAS =====

// 1. Buscamos todos los botones y todos los productos
const botones = document.querySelectorAll('.filtro');
const productos = document.querySelectorAll('.producto');

// 2. Esta función muestra solo los productos de la categoría elegida
function filtrar(categoria) {
  // Marcamos como "activo" el botón que coincide
  botones.forEach(function (boton) {
    boton.classList.toggle('activo', boton.dataset.filtro === categoria);
  });

  // Ocultamos los productos que no son de esa categoría
  productos.forEach(function (producto) {
    const esDeOtraCategoria = producto.dataset.categoria !== categoria;
    producto.classList.toggle('oculto', categoria !== 'todos' && esDeOtraCategoria);
  });
}

// 3. Cada botón filtra cuando le hacen clic
botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    filtrar(boton.dataset.filtro);
  });
});

// 4. Los links "Ver modelos" de la colección también filtran el catálogo
document.querySelectorAll('[data-ir]').forEach(function (link) {
  link.addEventListener('click', function () {
    filtrar(link.dataset.ir);
  });
});