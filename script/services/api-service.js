import { getItems } from "./firebase.js"

async function loadProducts() {
    const productsJson = await getItems()
    console.log(productsJson)
    const productsVector = await productsJson.json()
    console.log(productsVector)
    return productsVector
}

async function loadAnnounce(announceId) {
    var announce = await fetch(`http://localhost:3000/announces?announceId=${announceId}`)
    announce = await announce.json()
    return announce[0]
}

async function loadProduct(id) {
    var product = await fetch(`http://localhost:3000/all-products?id=${id}`)
    product = await product.json()
    return product[0]
}

export const api_service = {
    loadProducts,
    loadAnnounce,
    loadProduct
}