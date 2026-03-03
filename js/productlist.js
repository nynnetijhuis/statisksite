const params = new URLSearchParams(window.location.search);
const myCategory = params.get("category");

console.log(myCategory);

const fetchURL = myCategory ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(myCategory)}` : "https://kea-alt-del.dk/t7/api/products";

const listContainer = document.querySelector(".product-gallery");

function getProducts() {
  fetch(fetchURL)
    .then((res) => res.json())
    .then((products) => showProducts(products))
    .catch((error) => console.error("Fejl ved hentning:", error));
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      <div class="product-card ${product.soldout === 1 ? "is-soldout" : ""}">
        
        <a href="product.html?id=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" 
               alt="${product.productdisplayname}">
        </a>

        <h3>${product.productdisplayname}</h3>
        <p class="brand">${product.brandname}</p>
        <p class="price">${product.price} kr.</p>

        ${product.soldout === 1 ? `<p class="soldout">Udsolgt</p>` : `<p class="instock">På lager</p>`}
 ${product.discount > 0 ? `<span class="udsalgspris">Tilbud ${product.discount}%</span>` : ""}
      </div>
    `;
  });
}

getProducts();
