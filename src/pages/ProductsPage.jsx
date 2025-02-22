import { useState, useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { searchProducts, filterCategoryProducts } from '../helpers/helper';
import { FiSearch } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";

import Card from '../components/Card';
import Loader from '../components/Loader';


function ProductsPage() {

  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products)
  }, [products])

  useEffect(() => {
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterCategoryProducts(finalProducts, query.category)
    setDisplayed(finalProducts)
    console.log(finalProducts);
  }, [query])

  // console.log('products', products);

  const searchHandler = () => {
    setQuery((query) => ({...query, search}))
  };

  const categoryHandler = (event) => {
    const {tagName} = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== 'LI') return; 
    setQuery((query) => ({...query, category}))
  };

  return(
    <>
    <div className='my-10'>
      <input 
        type='text' 
        placeholder='pls enter text...' 
        className='w-[28rem] h-10 border-1 border-gray-600 rounded-[3rem] px-3 py-1 relative shadow-lg shadow-rose-400/50 outline-none'
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button 
        className='bg-red-400 w-8 h-8 rounded-full flex place-items-center place-content-center text-lg hover:text-xl cursor-pointer absolute top-19 left-[47.2rem] outline-none'
        onClick={searchHandler}
      >
        <FiSearch className='text-white'/>
      </button>
    </div>
    <div className='flex gap-x-4 w-full h-[calc(100vh-4rem)]'>
      <div className='w-full h-[calc(100vh-4rem)] flex flex-wrap itmes-center gap-x-4 gap-y-6 overflow-auto shadow-lg'>
        {!displayed.length && (
          <Loader />
        )}
        {
          displayed.map((product) => {
            return(
              <Card key={product.id} data={product} />
            );
          })
        }
      </div>
      <div className='w-50 border-1 border-gray-600 rounded-lg p-2'>
        <div className='flex items-center gap-x-5 mb-8 text-red-500 font-bold'>
          <FaListUl className='text-lg'/>
          <p className='text-lg'>Category</p>
        </div>
        <ul 
          className='text-lg font-semibold text-gray-700'
          onClick={() => categoryHandler(event)}
        >
          <li className='text-red-500 bg-red-300/50 rounded-md px-2'>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
        </ul>
      </div>
    </div>
    </>
  );
}


export default ProductsPage
