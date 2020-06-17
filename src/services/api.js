export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlCategoryId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const urlCategoryQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  let url;
  if (categoryId) url = urlCategoryId;
  else if (query) url = urlQuery;
  else url = urlCategoryQuery;
  const response = await fetch(url);
  const product = await response.json();
  return product;
}
