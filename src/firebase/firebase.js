// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where } from "firebase/firestore";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const uploadProducts = async (products) => {
  try {
    const productsRef = collection(db, 'products');
    
    for (const product of products) {
      await addDoc(productsRef, product);
    }
    
    console.log('Products uploaded successfully');
  } catch (error) {
    console.error('Error uploading products:', error);
  }
};

export const getProducts = async (categoryId = null) => {
  try {
    const productsRef = collection(db, 'products');
    const querySnapshot = await getDocs(productsRef);
    const products = [];
    
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    if (categoryId) {
      return products.filter(product => product.category_id === categoryId);
    }
    
    return products;
  } catch (error) {
    console.error('Error getting products:', error);
    return [];
  }
};

export const getProductById = async (productId) => {
    try {

      const docRef = doc(db, 'products', productId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }

      const productsRef = collection(db, 'products');
      const q = query(productsRef, where('id', '==', productId));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() };
      }

      console.log('No product found with ID:', productId);
      return null;
    } catch (error) {
      console.error('Error getting product:', error);
      return null;
    }
};
export const createOrder = async (orderData) => {
    try {
      const ordersRef = collection(db, 'orders');
      const docRef = await addDoc(ordersRef, orderData);
      return docRef.id;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

export { db };