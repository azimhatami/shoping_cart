import { Link } from 'react-router';
import { TbListDetails } from 'react-icons/tb';
import { TbShoppingBagCheck } from 'react-icons/tb';
import { shortenText } from '../helpers/helper';


function Card({ data }) {
  const { id, title, image, price } = data;
  return(
    <div className='w-60 flex flex-col justify-between p-2 rounded-md border-1 border-gray-600 hover:shadow-xl hover:shadow-gray-400'>
      <div>
      <img src={image} alt={title} className='w-full h-60 rounded-lg'/>
      <h3 className='text-lg font-bold pt-4'>{shortenText(title)}</h3>
      <p className='text-sm font-semibold text-gray-600'>{price}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Link to={`/products/${id}`} className='text-red-600'>
          <TbListDetails className='w-6 h-6'/>
        </Link>
        <button className='outeline-none cursor-pointer'>
          <TbShoppingBagCheck className='w-7 h-7 text-red-600'/>
        </button>
      </div>
    </div>
  );
}


export default Card
