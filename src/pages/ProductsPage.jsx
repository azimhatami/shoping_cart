import { useProducts } from '../context/ProductContext';

import Card from '../components/Card';
import Loader from '../components/Loader';


function ProductsPage() {

  const products = useProducts();
  console.log('products', products);

  return(
    <div className='flex gap-x-4 w-full h-[calc(100vh-4rem)]'>
      <div className='w-full h-[calc(100vh-4rem)] flex flex-wrap itmes-center gap-x-4 gap-y-6 overflow-auto shadow-lg'>
        {!products.length && (
          <Loader />
        )}
        {
          products.map((product) => {
            return(
              <Card key={product.id} data={product} />
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
