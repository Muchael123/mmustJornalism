// BlogCard.js
import { Link } from 'react-router-dom';

function BlogCard(props) {
  const { title, image, slug, published_on, author, id ,category} = props; // Destructure id from props

  const url = `/Blog/${category}/${id}`; // Use id in the URL
  localStorage.setItem('id', props.key);

  return (
    <div>
      <Link to={url}>
      <div className='shadow-lg w-full rounded-lg p-2 cursor-pointer object-contain'>
        <div>
          <img className='w-full rounded-md h-[250px]' src={image} alt="" />
        </div>
        <div className='flex gap-3 mt-3'>
          <div className='bg-orange-400 border-none cursor-pointer px-1 text-white font-semibold'>{author}</div>
          <div>{published_on}</div>
        </div>
        <h1 className='font-bold hover:text-orange-400 ease-in-out duration-150'>
          {title}
        </h1>
        <h1 className='border-none px-1 text-black'>
          {slug}
        </h1>
      </div>
      </Link>
    </div>
  )
}

export default BlogCard;