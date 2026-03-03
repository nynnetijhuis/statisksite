const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("id:", id);

//const id = 1526;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
   
                <article class="product-information">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="stortbillede">
                    <h3>${data.productdisplayname}</h3>
                    <p class="brand">${data.brandname}</p>
                    <p class="price1">${data.price}</p>
                    <p class="lagerstatus">Lagerstatus</p>
                    <button>Tilføj til kurv</button>

                </article>
  `;
}

getData();
