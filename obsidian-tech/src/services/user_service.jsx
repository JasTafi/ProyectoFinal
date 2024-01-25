import { Puerto } from "../config/server_constant";

//             Crear un Usuario
async function CreateUser({ email, password, urlFoto }) {
  const body = JSON.stringify({
    email,
    password,
    photoUrl: urlFoto,
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/add`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: body,
  });
  return await response.json();
}

//             Iniciar sesión
async function Login({ email, password }) {
  const body = JSON.stringify({
    email,
    password,
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: body,
  });
  return await response.json();
}

//    Agregar un producto a la lista de favoritos
async function AddFavoriteProduct({ userId, productId, token }) {
  const body = JSON.stringify({
    userId,
    productId,
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return await response.json();
}

//          Mostrar lista de favoritos
async function GetFavoriteProduct({ id, token }) {
  const response = await fetch(`${Puerto.URL_LOCAL}/user/favorites/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const results = await response.json();
  return results;
}

// Eliminar un producto de la lista de favoritos
async function DeleteFavoriteById({ id, productId, token }) {
  const body = JSON.stringify({
    productId,
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/favorites/${id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return await response.json();
}

// agregar un producto al carrito 
async function AddCarProduct({userId, productId, token}){
  const body = JSON.stringify({
    userId,
    productId,
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/buyCar`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return await response.json();
}

//Mostrar productos del carrito
async function GetCarProducts({id, token}){
  const response = await fetch(`${Puerto.URL_LOCAL}/user/buyCar/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const results = await response.json()
  return results
}

//Borrar un producto del carrito 
async function DeleteCarProduct({id, productId, token}){
  const body = JSON.stringify({
    productId,
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/buyCar/${id}`, {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return await response.json();
}

// Verificar si un email esta en base de datos, crea un token y lo envia por mail al usuario
async function EmailVerification({ email }) {
  const body = JSON.stringify({ email });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/email/verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  return await response.json();
}

// Cambiar la contraseña de un usuario por el mail
async function ModifyPassword({ email, password }) {
  const body = JSON.stringify({ email, password });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/password/modify`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  return await response.json();
}

// Busca un usuario por su email
async function GetUserByEmail(email) {
  const response = await fetch(`${Puerto.URL_LOCAL}/user/byEmail/${email}`);
  return await response.json();
}
//Trae la lista de pedidos
async function GetAllPedidos(){
  const response = await fetch(`${Puerto.URL_LOCAL}/user/pedido`);
  return await response.json();
}
//Agregar orden de compra
async function AddPurchaseOrder({
  userId,
  products,
  token,
  nombre: { nombres, apellidos },
  direccion: { departamento, calle, numero, localidad, provincia },
}) {
  const body = JSON.stringify({
    userId,
    products,
    token,
    nombre: {
      nombres,
      apellidos,
    },
    direccion: {
      departamento,
      calle,
      numero,
      localidad,
      provincia,
    },
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/user/pedido`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return await response.json();
}
async function UpdatePedido({
  pedidoId,
  virtualDelete,
  nuevoEstado,
  mail
}){
  const body = JSON.stringify({
    pedidoId,
    virtualDelete,
    nuevoEstado,
    mail
  })
  const response = await fetch(`${Puerto.URL_LOCAL}/user/pedido/modificar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
  return await response.json()
}
export { CreateUser, Login, AddFavoriteProduct, GetFavoriteProduct, DeleteFavoriteById, AddCarProduct, GetCarProducts, DeleteCarProduct, EmailVerification, ModifyPassword, GetUserByEmail, GetAllPedidos, AddPurchaseOrder, UpdatePedido};
