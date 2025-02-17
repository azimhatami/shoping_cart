import { useProducts } from '../context/ProductContext';


function ProductsPage() {

  const products = useProducts();
  console.log('products', products);

  return(
    <>
      <p>Products Page</p>
    </>
  );
}


export default ProductsPage
