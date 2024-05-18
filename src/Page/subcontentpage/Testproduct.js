import React from 'react'
import Testingprod from '../subcontentpage/Testingprod';
import Findproducts from '../Buttons/Findproducts'
import shoewire from '../Assests/shoe-wire-removebg-preview (1).png';


const Testproduct = () => {
    const testProdData = [
        {
            title:"FEATURED",
            titleHead:"FEATURED FROM BUYERS",
            model:"BEST REWARDS 2023",
            para1:"Experience The Epitome Of Footwear Excellence",
            para2:"With These Remarkable Shoes That Redefine",
            para3:"style, Comfort, And Lasting Quality.",
            button: <Findproducts />,
            img : <img src= {shoewire} alt='shoe-wire-img' />
        },
    ]

    const testProd = testProdData.map((item, index) => (
        <div key={index} style={{ backgroundColor: '#65b6af', color:'red'}}>
            <Testingprod 
                title={item.title} 
                titleHead={item.titleHead} 
                model={item.model} 
                para1={item.para1} 
                para2={item.para2} 
                para3={item.para3}  
                button={item.button}
                img ={item.img}
            />
        </div>
    ));
  return (
    <div className='test-prod'>
        {testProd}
    </div>
  )
}

export default Testproduct