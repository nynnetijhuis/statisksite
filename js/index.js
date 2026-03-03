const params = new URLSearchParams(window.location.search);
const myCategories = params.get("categories");

console.log(myCategories);

const fetchURL = myCategories ? `https://kea-alt-del.dk/t7/api/categories=${encodeURIComponent(myCategories)}` : "https://kea-alt-del.dk/t7/api/categories";
const listContainer = document.querySelector(".grid_1-3");

function getCategories() {
  fetch(fetchURL).then((res) => res.json().then((categories) => showCategories(categories)));
}

function showCategories(categories) {
  listContainer.innerHTML = "";

  categories.forEach((category) => {
    listContainer.innerHTML += `



         <a href="productlist.html?category=${encodeURIComponent(category.category)}" class="box1">${category.category}</a>


    `;
  });
}

getCategories();
