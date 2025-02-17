import { useProducts } from '../context/ProductContext';


function ProductsPage() {

  const products = useProducts();
  console.log('products', products);

  return(
    <div className='flex justify-between w-full h-[calc(100vh-4rem)]'>
      <div className='w-full'>
        {
          products.map((product) => {
            return(
              <p key={product.id}>{product.title}</p>
            );
          })
        }
      </div>
      <div className='w-50 border-1 border-gray-600 rounded-lg p-2'>
        side bar
      </div>
    </div>
  );
}


export default ProductsPage
