import React from 'react'
import './Style.css'
import { useState } from "react";

const Faqs = ({faq,index,toggleFaq}) => {
      const [clickedIndex, setClickedIndex] = useState(null); // Initially no FAQ clicked

      const handleClick = (index) => {
        setClickedIndex(index === clickedIndex ? null : index); // Toggle clicked state
      };
  
  return (
    <div
    className={"faq " + (faq.open ? "open" : "")}
    key={index}
    onClick= {handleClick} 
    style={{ order: clickedIndex === index ? -1 : index }}
    >
    <div className="faq-question">{faq.question }</div>
    <div className="faq-answer">{faq.ans}</div>
    
    </div>
  )
}

export default Faqs