import React from 'react'
import Allcategoriesjx from '../subcontentpage/Allcatgoriesjx';
import Findproducts from '../Buttons/Findproducts'
import redtshirt from '../Assests/red-tshirt-removebg-preview.png';
import brownladyleg from '../Assests/brown-lady-leg-removebg-preview.png';

const Allcategories = () => {
    const allproddata = [
        {
            title:"FEATURED",
            titleHead:"ORIGINALS",
            model:"SNEAKERS 2023 EDITION",
            para1:"Allow Me To Introduce An Outstanding Pair Of",
            para2:"Shoes That Truly Surpasses Expectations. These",
            para3:"shoes Are A Testament To Exceptional",
            para4:'Craftsmanship And Unparalleled Style',
            button: <Findproducts />,
            img : <img src= {redtshirt} alt='red-tshirt-img' />
        },
        {
            title:"FEATURED",
            titleHead:"BESTSELLERS",
            model:"2023 BEST SALES",
            para1:"From The Moment You Slip Them On, You'll Feel",
            para2:"The Difference In Quality And Comfort. The",
            para3:"Attention To Detail Is Remarkable, With Each",
            para4:'Stitch And Contour Flawlessly Executed.',
            button: <Findproducts />,
            img : <img src= {brownladyleg} alt='brown-lady-leg-img' />
        },
    ]

    const allprod = allproddata.map((item, index) => (
        <div key={index} style={{ backgroundColor: index % 2 === 0 ? '#81bece' : '#eaa73e' ,width:'575px', height:'350px'}}>
            <Allcategoriesjx 
                title={item.title} 
                titleHead={item.titleHead} 
                model={item.model} 
                para1={item.para1} 
                para2={item.para2} 
                para3={item.para3} 
                para4={item.para4} 
                button={item.button}
                img ={item.img}
            />
        </div>
    ));

  return (
    <div className='all-categories-section'>
        <div className='all-categories-prod'>
            {allprod}
        </div>
    </div>
  )
}

export default Allcategories