import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import '../Buttons/ShowMore.css'
import { Link } from 'react-router-dom';

const ShowMore = () => {
  return (
    <div>
        <div className='buttons'>
            <Link to ="/">SHOW MORE <BsArrowRightCircleFill style ={{fontSize:'14px', marginLeft:'10px'}}/> </Link>
        </div>
    </div>
  )
}

export default ShowMore