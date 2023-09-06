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
      "content-Type": "application/json",
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
      "content-Type": "application/json",
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

// Verificar si un email esta en base de datos
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

export {
  CreateUser,
  Login,
  AddFavoriteProduct,
  GetFavoriteProduct,
  DeleteFavoriteById,
  EmailVerification,
};
