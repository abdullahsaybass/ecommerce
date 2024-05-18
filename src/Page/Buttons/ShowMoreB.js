import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import '../Buttons/ShowMoreB.css'
import { Link } from 'react-router-dom';

const ShowMoreB = (style) => {
  return (
    <div >
        <div className='black-show-more-button'style={style}>
            <Link to ="/">SHOW MORE <BsArrowRightCircleFill style ={{fontSize:'14px', marginLeft:'10px'}}/> </Link>
        </div>
    </div>
  )
}

export default ShowMoreB