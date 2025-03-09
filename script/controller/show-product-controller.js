import { getItemById } from '../services/firebase.js'

const carousel = document.querySelector('[show-product-carousel]')
const image = document.querySelector('[product-image]')
const title = document.querySelector('[product-title]')

function productCarouselImageMouseover(productImage, img) {
    image.style.content = img
    for(const child of carousel.children) {
        child.style.borderColor = "rgb(255, 218, 192)"
        child.style.borderWidth = "1px"
    }
    productImage.style.borderColor = "rgb(254, 120, 23)"
    productImage.style.borderWidth = "5px"
}

export default function newShowProductCarouselImage(img) {
    const productImage = document.createElement('a')
    productImage.className = "show-product-carousel-image"
    productImage.style.backgroundImage = img
    productImage.addEventListener("mouseover",
        () => {
            productCarouselImageMouseover(productImage, img)
        }
    )
    return productImage
}

async function loadProductShow() {
    const urlParams = new URLSearchParams(window.location.search)
    const product = await getItemById(urlParams.get('id'))
    document.title = product.title
    title.innerHTML = product.title
    product.allimgs.forEach(
        img => {
            carousel.appendChild(
                newShowProductCarouselImage(img)
            )
        }
    )
    productCarouselImageMouseover(carousel.firstElementChild, product.allimgs[0])
}

loadProductShow()