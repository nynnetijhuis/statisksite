const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product-gallery");

function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((products) => showProducts(products));
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      <div class="product-card">
        <a href="product.html">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
        </a>
        <h3>${product.productdisplayname}</h3>
        <p class="brand">${product.brandname}</p>
        <p class="price">${product.price} kr.</p>
      </div>
    `;
  });
}

getProducts();
