import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import '../Icons/threeicon.css'

const Threeicons = () => {
  return (
    <div className='threeicons'>
        <CiHeart style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}}/>,
        <IoEyeOutline style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}} />,
        <TbArrowsDoubleNeSw  style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}}/>,
    </div>
  )
}

export default Threeicons