import { Puerto } from '../config/server_constant'

//         Muestra todos los productos
async function getAllProductsFromDB() {
  const response = await fetch(`${Puerto.URL_LOCAL}/accesorio`)
  return await response.json()
}

//         Muestra un producto por su id
async function getProductByIdFromDb(id) {
  const response = await fetch(`${Puerto.URL_LOCAL}/accesorio/${id}`)
  return await response.json();
}

//         Crear un producto nuevo
async function AddProductos({ nombre, categoria, precio, stock, Descripcion, urlImg, token }) {

  const body = JSON.stringify({
    nombre,
    categoria,
    precio,
    stock,
    Descripcion,
    urlImg  
  });

  const response = await fetch(`${Puerto.URL_LOCAL}/accesorio`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  body: body,
  });
  return response.json();
}

//         Modificar un producto
async function UpdateProducto(id, { nombre, categoria, precio, stock, Descripcion, urlImg, token }) {

  const body = JSON.stringify({
    nombre,
    categoria,
    precio,
    stock,
    Descripcion,
    urlImg
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/accesorio/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return response.json();
}

//          Borrar un producto
async function DeleteProducto({ id, token }) {
  const response = await fetch(`${Puerto.URL_LOCAL}/accesorio/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
  return await response.json()
}

export { getAllProductsFromDB, getProductByIdFromDb, AddProductos, UpdateProducto, DeleteProducto }