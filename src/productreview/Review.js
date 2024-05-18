import React from 'react'
import Rating from '@mui/material/Rating';
import '../productreview/Style.css'
import { FaCloudUploadAlt } from "react-icons/fa";


const Review = () => {
  // const inputStyle = {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: '5px 10px',
  //   border: '1px solid #ccc',
  //   borderRadius: '5px',
  //   cursor: 'pointer',
  //   overflow:'hidden',
  // };
  return (
    <section className='Review-section'>
        <div className='review-container'>
         
          <div>
            <h2>Write a Review</h2>
            <p>Rating</p>
            <Rating name="no-value" value={null}/>
            <p>Review Tile</p>
            <input type="text" placeholder="Enter your text here" />
            <p>Review</p>
            <input type="text" placeholder="Write Your Comment here"/>
            <p>Picture/Video (optional)</p>
            
              <input
                id="uploadInput"
                type=""
                accept="image/*,video/*"
                // onChange={handleChange}
              />
              <FaCloudUploadAlt   style={{ fontSize:'100px',marginRight: '5px' }} />
        
            <p>Name (displayed publicly like John Smith)</p>
            <input type="text" placeholder ="Enter Your Name (public)" />
            <p>Email</p>
            <input type="text" placeholder ="Enter Your email (private)" />
            <p>How we use your data: We'll only contact you about the review you left, and only if necessary. 
                By submitting your review, you agree to Judge.me's terms and conditions and privacy policy.</p>
            <div>
                <button>Cancel review</button>
                <button>Submit review</button>
            </div>
          </div> 
        </div>
    </section>
  )
}

export default Review