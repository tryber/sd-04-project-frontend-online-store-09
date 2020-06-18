export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export const getProduct = async (productId) => {
  const request = fetch(
    `https://api.mercadolibre.com/items/${productId}`,
  ).then((response) => response.json());
  return request;
};

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const data = await response.json();
  return data;
}
