import React from 'react'
import { Link } from 'react-router-dom';

function OtherCatNews(props) {
    const title = props.title;
    const published_on = props.published_on;
    const category = props.category;
    const id = props.id;
     const url = `/Blog/${category}/${id}`;
  return (
    <div className='md:flex w-5/6  flex-1  flex-col hidden items-center '>
        <ul className='border-t-2 border-b-2 text-left'>
            <li className='py-2'><Link className='font-bold hover:text-orange-500' to={url}>{title}</Link>
            <p className='font-light text-[10px] text-right'>{published_on}</p>
            </li>
        </ul>
    </div>
  )
}

export default OtherCatNews;