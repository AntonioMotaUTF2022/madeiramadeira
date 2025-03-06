import { getItems, getItemsFilteredByTag } from '../services/firebase.js'

export default function newProductCard(product) {
    const productCard = document.createElement('a')
    productCard.href = `/moveisstore.github.io/show-product.html?id=${product.id}`
    productCard.className = "product-card"
    productCard.style.backgroundImage = product.img
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

async function loadCarouselAllProducts(carousel) {
    const products = await getItems()
    products.forEach(
        product => {
            carousel.appendChild(
                newProductCard(product)
            )
        }
    )
}

async function loadCarouselByTag(carousel, tag) {
    const products = await getItemsFilteredByTag(tag)
    products.forEach(
        product => {
            carousel.appendChild(
                newProductCard(product)
            )
        }
    )
}

loadCarouselAllProducts(document.querySelector("[carousel-1]"))
loadCarouselByTag(document.querySelector("[carousel-2]"), "cozinha")
loadCarouselByTag(document.querySelector("[carousel-3]"), "sala de jantar")
loadCarouselByTag(document.querySelector("[carousel-4]"), "sala de estar")
loadCarouselByTag(document.querySelector("[carousel-5]"), "quarto")
loadCarouselByTag(document.querySelector("[carousel-6]"), "escritorio")
loadCarouselByTag(document.querySelector("[carousel-7]"), "infantil")