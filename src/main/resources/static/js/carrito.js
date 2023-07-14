// Obtener el carrito de compras del almacenamiento local
const savedCart = localStorage.getItem('cart');
const allProducts = savedCart ? JSON.parse(savedCart) : [];

// Obtener el contenedor de los productos del carrito en el DOM
const cartItemsContainer = document.getElementById('cart-items-container');

// Función para mostrar los productos en el carrito
function showCartItems() {
  cartItemsContainer.innerHTML = '';

  let total = 0;

  allProducts.forEach(item => {
    const itemContainer = document.createElement('tr'); // Cambiamos a <tr> en lugar de <div>
    itemContainer.classList.add('item');

    const quantityCell = document.createElement('td'); // Celda para Cantidad
    const cantidadContainer = document.createElement('div');
    cantidadContainer.classList.add('cantidad-container');
    quantityCell.appendChild(cantidadContainer);
    itemContainer.appendChild(quantityCell);

    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    cantidadContainer.appendChild(minusButton);

    const quantity = document.createElement('span');
    quantity.textContent = ' ' + item.quantity + ' ';
    cantidadContainer.appendChild(quantity);

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    cantidadContainer.appendChild(plusButton);

    const titleCell = document.createElement('td'); // Celda para Producto
    const title = document.createElement('h2');
    title.textContent = item.title;
    titleCell.appendChild(title);
    itemContainer.appendChild(titleCell);

    const priceCell = document.createElement('td'); // Celda para Precio
    const price = document.createElement('p');
    price.textContent = item.price;
    priceCell.appendChild(price);
    itemContainer.appendChild(priceCell);

    const subtotalCell = document.createElement('td'); // Celda para Subtotal
    const subtotal = document.createElement('p');
    const subtotalValue = item.quantity * parseFloat(item.price.replace('S/.', ''));
    subtotal.textContent = 'S/.' + subtotalValue.toFixed(2);
    subtotalCell.appendChild(subtotal);
    itemContainer.appendChild(subtotalCell);

    cartItemsContainer.appendChild(itemContainer);

    total += subtotalValue;
  });

  const cartTotal = document.querySelector('.total-pagar');
  cartTotal.textContent = `S/.${total.toFixed(2)}`;
}

showCartItems();


// Obtener el botón "Pagar" y el modal
const pagarBoton = document.getElementById('pagar-boton');
const modalCompra = document.getElementById('modal-compra');
const modalAceptar = document.getElementById('modal-aceptar');


// Función para mostrar el modal
function mostrarModal() {
  modalCompra.style.display = 'block';
}

// Función para ocultar el modal
function ocultarModal() {
  modalCompra.style.display = 'none';
}

// Evento de clic en el botón "Pagar"
pagarBoton.addEventListener('click', function() {
  mostrarModal();
});

// Evento de clic en el botón "Aceptar" del modal
modalAceptar.addEventListener('click', function() {
  ocultarModal();
});

