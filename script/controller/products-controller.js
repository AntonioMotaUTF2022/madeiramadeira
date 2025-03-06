import { api_service } from '../services/api-service.js'
import { getItems } from '../services/firebase.js'

export default function newProductCard(product) {
    const productCard = document.createElement('a')
    productCard.href = `/show-product.html?id=${product.id}`
    productCard.className = "product-card"
    productCard.style.backgroundImage = `${product.img[0]}`
    switch(product.emphasis) {
        case 1 : break
        case 2 :
            productCard.style.gridColumn = "span 2"
            break
        case 3 :
            productCard.style.gridColumn = "span 2"
            productCard.style.gridRow = "span 2"
            break
        case 4 :
            productCard.style.gridRow = "span 2"
            break
    }
    return productCard
}

async function loadCarousel(carousel) {
    const products = await getItems()
    products.forEach(
        product => {
            carousel.appendChild(
                newProductCard(product)
            )
        }
    )
}

loadCarousel(document.querySelector("[carousel-1]"))

// loadCarousel(document.querySelector("[carousel-2]"), "cozinha")
// loadCarousel(document.querySelector("[carousel-3]"), "sala de jantar")
// loadCarousel(document.querySelector("[carousel-4]"), "sala de estar")
// loadCarousel(document.querySelector("[carousel-5]"), "quarto")
// loadCarousel(document.querySelector("[carousel-6]"), "escritorio")
// loadCarousel(document.querySelector("[carousel-7]"), "infantil")