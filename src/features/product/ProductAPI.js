// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //todo
    const response = await fetch ('http://localhost:3009/products')
    const data = await response.json()
    resolve({data})
  }
  );
}
