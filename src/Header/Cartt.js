import React from 'react'
import { BsCartX } from "react-icons/bs";
import './cart.css'
import { BiSolidDiscount } from "react-icons/bi";


const Cartt = () => {
  return (
    <div className='cart'>
        <div className='cart-header'>
            <div className='cart-row'>
                <div className='col-sm-2 cart-1'>
                    <h2>My Cart</h2>
                    <p>0 ITEMS</p>
                </div>

                <div className='col-sm-2 cart-2'>
                    <BsCartX style={{ fontSize: '70px',marginTop: '100px'}}/>
                    <p>Your cart is empty</p>
                </div>

                <div className='col-sm-3 cart-3'>
                  <div className='dd'>
                      <div  className='col-sm-2 log'>
                        <BiSolidDiscount style={{ fontSize: '20px'}} />
                        <p>Add discount code</p>
                      </div>

                        <input type="text" placeholder="Promo Code"className='hh'/>

                      <div className='col-sm-2 total'>
                        <h2>Subtotal</h2>
                        <h3>0.00USD</h3>
                      </div>
                  </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartt