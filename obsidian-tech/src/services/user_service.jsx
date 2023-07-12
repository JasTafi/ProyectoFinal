// import { Puerto } from '../config/server_constant'

// //             Crear un Usuario
// async function CreateUser({ email, password, urlFoto }) {
//   const body = JSON.stringify({
//     email,
//     password,
//     photoUrl: urlFoto
//   })
//   const response = await fetch(`${Puerto.URL_LOCAL}/user/add`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: body,
//   });
//   return await response.json()
// }

// //             Iniciar sesi�n 
async function Login({ email, password }) {
  const body = JSON.stringify({
    email,
    password,
  });
  const response = await fetch(`http://localhost:1000/user/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: body,
  });
  return await response.json();
}

// //    Agregar un producto a la lista de favoritos
// async function AddFavoriteProduct({ userId, productId, token }) {
//   const body = JSON.stringify({
//     userId,
//     productId,
//   });
//   const response = await fetch(`${Puerto.URL_LOCAL}/user/favorites`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/jeson',
//       authorization: `Bearer ${token}`,
//     },
//     body: body,
//   });
//   return await response.json();
// }

//          Mostrar lista de favoritos 
async function GetFavoriteProduct({ id, token}) {
  const response = await fetch(`http://localhost:1000/user/favorites/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }); 
  const results = await response.json();
  return results
}

export { Login, GetFavoriteProduct };