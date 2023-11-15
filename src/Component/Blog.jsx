import React from 'react'
import Navbar from '../Component/Navbar';
import SidePanel from '../Component/SidePanel';



function Content(props) {
    const title = props.title
    const image = props.image
    const body = props.body
    const published_on = props.published_on
    const author = props.author
  return (
    <div>
        <Navbar/>
        
 </div>
  )
}

export default Content;
