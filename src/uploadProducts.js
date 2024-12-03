// uploadProducts.js
import { products } from './asyncMock';
import { uploadProducts } from './firebase';

// Execute upload
uploadProducts(products)
  .then(() => console.log('Upload complete'))
  .catch(err => console.error('Upload failed:', err));