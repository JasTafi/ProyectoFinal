export async function getAllProductsFromDB() {
    const resultado = await fetch('http://localhost:1000/api/accesorio')
    return await resultado.json()
}

export async function getProductFromDb() {
    const resultado = await fetch(`http://localhost:1000/api/accesorio/${id}`)
    return await resultado.json();
}