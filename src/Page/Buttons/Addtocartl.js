import React from 'react'
import '../Buttons/addtocart.css';
import { CiShoppingCart } from "react-icons/ci";

const Addtocartl = () => {
  return (
    <div className='add-to-cartl'>
        <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>
    </div>
  )
}

export default Addtocartl