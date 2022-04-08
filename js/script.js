async function populateCategories(query) {
  const categoriesQuery = await (await fetch("https://cms-digitalocean-x4d4k.ondigitalocean.app/api/" + query)).json();

  const categories = categoriesQuery.data;

  const categoriesSelectionElement = document.querySelector(".category_selection");

  categories.forEach((category) => {
    const categoryOptionElement = document.createElement("option");
    categoryOptionElement.innerText = category.attributes.Name;
    categoryOptionElement.value = category.id;

    categoriesSelectionElement.appendChild(categoryOptionElement);
  });
}

populateCategories("categories/?pagination[pageSize]=100");

async function pageCount(pageCount) {
  const productsPageSelectionElement = document.querySelector(".page_selection");

  productsPageSelectionElement.innerHTML = "";
  for (let i = 0; i < pageCount; i++) {
    const productsPageOptionElement = document.createElement("option");
    productsPageOptionElement.innerText = i + 1;
    productsPageOptionElement.value = i + 1;

    productsPageSelectionElement.appendChild(productsPageOptionElement);
  }
}

async function populateProducts(query = "") {
  const productsQuery = await (
    await fetch(
      "https://cms-digitalocean-x4d4k.ondigitalocean.app/api/products?populate=*&pagination[pageSize]=6&" + query
    )
  ).json();

  pageCount(productsQuery.meta.pagination.pageCount);

  const products = productsQuery.data;
  const productListElement = document.querySelector(".products_list");
  productListElement.innerHTML = "";
  products.forEach((product) => {
    const productListItemElement = document.createElement("li");
    productListItemElement.innerText = product.attributes.Name;

    productListElement.appendChild(productListItemElement);
  });
}

populateProducts();

(async function () {
  const categoriesSelectionElement = document.querySelector(".category_selection");

  categoriesSelectionElement.addEventListener("change", () => {
    const categoryId = categoriesSelectionElement.value;

    categoryId ? populateProducts("filters[category][id][$eq]=" + categoryId) : populateProducts();
  });
})();

async function productPageNavigation() {
  const productsPageSelectionElement = document.querySelector(".page_selection");

  productsPageSelectionElement.addEventListener("change", () => {
    const page = productsPageSelectionElement.value;

    const categoriesSelectionElement = document.querySelector(".category_selection");
    const categoryId = categoriesSelectionElement.value;

    categoryId !== ""
      ? populateProducts("filters[category][id][$eq]=" + categoryId + "&pagination[page]=" + page)
      : populateProducts("pagination[page]=" + page);
  });
}

productPageNavigation();
