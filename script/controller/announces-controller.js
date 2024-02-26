import { api_service } from '../services/api-service.js'

export default function newAnnounce1(img, title, id) {
    const announce1 = document.createElement('a')
    productCard.className = "announce-1"
    productCard.style.backgroundImage = `url("/images/annonces/${img}")`
    productCard.style.backgroundSize = "cover"
    productCard.style.backgroundPosition = "center"
    return announce1
}

async function loadAnnounce(announce, announceId) {
    const announceJson = await api_service.loadAnnounce(announceId)
    announce.style.backgroundImage = `url("/images/announces/${announceJson.img}")`
}

loadAnnounce(document.querySelector("[announce-1]"), 1)