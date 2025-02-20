function shortenText(title) {
  const newText = title.split(' ').slice(0, 3).join(' ');
  return newText;
}

function searchProducts(products, search) {
  if (!search) return products;

  const searchedProducts = products.filter((p) => p.title.toLowerCase().includes(search))

  return searchedProducts;
};

function filterCategoryProducts(products, category) {
  if (!category) return products;

  const filteredProducts = products.filter((p) => p.category === category);

  return filteredProducts;
}


export { shortenText, searchProducts, filterCategoryProducts }
