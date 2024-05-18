import React from 'react'
import '../Buttons/addtocart.css';
import { CiShoppingCart } from "react-icons/ci";

const Addtocart = () => {
  return (
    <div className='add-to-cart'>
        <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>
    </div>
  )
}

export default Addtocart