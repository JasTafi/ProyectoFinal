export async function getAllProductsFromDB() {
    const resultado = await fetch('http://localhost:5000/api/accesorio')
    return await resultado.json()
}