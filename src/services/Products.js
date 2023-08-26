// Get all products
export const fetchAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
  } catch (err) {
    console.error("Uh oh, trouble fetching Products!", err);
  }
};

// Get all limited
export const fetchLimitedProducts = async (limite) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limite}`
    );
    const products = await response.json();
    return products;
  } catch (err) {
    console.error("Uh oh, trouble fetching Limited Products!", err);
  }
};

// Get all categories
export const fetchAllCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    return categories;
  } catch (err) {
    console.error("Uh oh, trouble fetching Categories!", err);
  }
};

// Get products in a specific category (jewelery)
export const fetchJeweleryProducts = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const products = await response.json();
    return products;
  } catch (err) {
    console.error("Uh oh, trouble fetching Jewelery Products!", err);
  }
};

// Get products in a specific category (electronics)
export const fetchElectronicProducts = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const products = await response.json();
    return products;
  } catch (err) {
    console.error("Uh oh, trouble fetching Electronics Products!", err);
  }
};

export const fetchSingleProduct = async (productId) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const singleProduct = await response.json();
    return singleProduct;
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${productId}!`, err);
  }
};
