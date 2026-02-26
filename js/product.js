const id = 1526;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
   <section class="productcard">
            <div class="boks">
                <article class="product-information">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="stortbillede">
                    <h3>${data.productdisplayname}</h3>
                    <p class="brand">${data.brandname}</p>
                    <p class="price1">${data.price}</p>
                    <p class="lagerstatus">Lagerstatus</p>
                    <button>Tilføj til kurv</button>

                </article>


            </div>
        </section>
  `;
}

getData();
