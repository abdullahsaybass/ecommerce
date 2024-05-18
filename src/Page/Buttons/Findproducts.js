import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import '../Buttons/ShowMore.css'
import { Link } from 'react-router-dom';

const ShowMore = () => {
  return (
    <div>
        <div className='find-more-button'>
            <Link to ="/">FIND PRODUCT <BsArrowRightCircleFill style ={{fontSize:'14px', marginLeft:'10px'}}/> </Link>
        </div>
    </div>
  )
}

export default ShowMore