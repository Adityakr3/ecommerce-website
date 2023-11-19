// A mock function to mimic making an async request for data
export function fetchAllProduct() {
  return new Promise(async (resolve) =>{
    //todo
    const response = await fetch ('http://localhost:3333/products')
    const data = await response.json()
    resolve({data})
  }
  );
}
