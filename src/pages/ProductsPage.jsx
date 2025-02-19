import { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { FiSearch } from "react-icons/fi";

import Card from '../components/Card';
import Loader from '../components/Loader';


function ProductsPage() {

  const products = useProducts();
  const [search, setSearch] = useState('');

  // console.log('products', products);

  const searchHandler = () => {
    console.log('search')
  };

  return(
    <>
    <div className='my-10'>
      <input 
        type='text' 
        placeholder='pls enter text...' 
        className='w-[28rem] h-10 border-1 border-gray-600 rounded-[3rem] px-3 py-1 relative shadow-lg shadow-rose-400/50'
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button 
        className='bg-red-400 w-8 h-8 rounded-full flex place-items-center place-content-center text-lg hover:text-xl cursor-pointer absolute top-19 left-[27.7rem]'
        onClick={searchHandler}
      >
        <FiSearch className='text-white'/>
      </button>
    </div>
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
    </>
  );
}


export default ProductsPage
