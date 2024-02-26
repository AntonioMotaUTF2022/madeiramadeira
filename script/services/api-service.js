async function loadProducts(searchString) {
    const productsJson = await fetch(`http://localhost:3000/all-products`)
    const productsVector = await productsJson.json()
    const productsVectorFiltered = []
    productsVector.forEach(
        product => {
            if(JSON.stringify(product).toLowerCase().includes(searchString)) productsVectorFiltered.push(product)
        }
    )
    return productsVectorFiltered
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