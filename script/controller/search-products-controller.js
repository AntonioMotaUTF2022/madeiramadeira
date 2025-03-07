import { getItemsFilteredBySearchstring } from '../services/firebase.js'

const page = window.location.href
const searchText = document.querySelector('[search-text]')
const searchButton = document.querySelector('[search-button]')

export default function newProductCard(product) {
    const productCard = document.createElement('a')
    productCard.href = `/show-product.html?id=${product.id}`
    productCard.className = "product-card"
    productCard.style.backgroundImage = `url("/images/products/${product.img[0]}"`
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

async function loadSearchPage() {
    const urlParams = new URLSearchParams(window.location.search)
    var searchString = urlParams.get('search')
    searchText.value = searchString
    const products = await getItemsFilteredBySearchstring(searchString)
    const productsContainer = document.querySelector('[products-container]')
    products.forEach(
        product => {
            productsContainer.appendChild(
                newProductCard(product)
            )
        }
    )
}

async function searchProducts() {
    const productsContainer = document.querySelector('[products-container]')
    var searchString
    while(productsContainer.firstChild) productsContainer.firstChild.remove()
    searchString = searchText.value
    const products = await getItemsFilteredBySearchstring(searchString)
    products.forEach(
        product => {
            productsContainer.appendChild(
                newProductCard(product)
            )
        }
    )
}

if(page.includes('search-products')) {
    loadSearchPage()
    searchButton.addEventListener('click', searchProducts)
    searchText.addEventListener('keypress', searchProducts)
}

if(page.includes('index') || page.includes('show-product')) {
    searchButton.addEventListener('click', () => {window.location.href = `/moveisstore.github.io/search-products.html?search=${searchText.value}`})
    searchText.addEventListener('keypress', (event) => {if(event.key === 'Enter') window.location.href = `/moveisstore.github.io/search-products.html?search=${searchText.value}`})
}