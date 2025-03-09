import { getSiteImg } from '../services/firebase.js'


const icon = document.querySelector('[icon]')
const logo = document.querySelector('[logo]')
const searchButton = document.querySelector('[search-button]')

async function loadSiteImages() {
    const iconImg = await getSiteImg('icon')
    const logoImg = await getSiteImg('logo')
    const searchButtonImg = await getSiteImg('search-glass')
    icon.href = iconImg
    logo.src = logoImg
    searchButton.style.backgroundImage = searchButtonImg
    searchButton.style["-webkit-mask-image"] = searchButtonImg
    searchButton.style["mask-mage"] = searchButtonImg
}

loadSiteImages()