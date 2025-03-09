import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { initializeFirestore, collection, query, getDocs, where, getDoc,  doc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEyvfPrDlMkh5TALMazsoUmfBNiNx0ff0",
  authDomain: "moveisstore-4aca1.firebaseapp.com",
  projectId: "moveisstore-4aca1",
  storageBucket: "moveisstore-4aca1.firebasestorage.app",
  messagingSenderId: "485670488719",
  appId: "1:485670488719:web:93cd2a21599915ea463efa",
  measurementId: "G-6T7CZDYK8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {experimentalForceLongPolling: true})
const allProductsCollection = collection(db, "all-products")
const siteImagesCollection = collection(db, "site-imags")

const getItems = async () => {
  const q = query(allProductsCollection
  )
  const querySnapshot = await getDocs(q)

  const products = []
  querySnapshot.forEach( (doc) => {
    products.push({id: doc.id, ...doc.data()})
  })
  return products
}

const getItemById = async (id) => {
  const product = await getDoc(doc(db, "all-products", id))
  return {id: product.id, ...product.data()}
}

const getItemsFilteredByTag = async (tag) => {
  const q = query(allProductsCollection, where("tag", "==", tag))
  const querySnapshot = await getDocs(q)

  const products = []
  querySnapshot.forEach( (doc) => {
    products.push({id: doc.id, ...doc.data()})
  })
  return products
}

const getItemsFilteredBySearchstring = async (searchString) => {
  const q = query(allProductsCollection, where("title", ">=", searchString))
  const querySnapshot = await getDocs(q)

  const products = []
  querySnapshot.forEach( (doc) => {
    products.push({id: doc.id, ...doc.data()})
  })
  return products
}

const getSiteImg = async (imgName) => {
  const imageDoc = await getDoc(doc(db, "site-images", imgName))
  return imageDoc.data().img
}

export { getItems, getItemsFilteredByTag, getItemsFilteredBySearchstring, getItemById, getSiteImg }