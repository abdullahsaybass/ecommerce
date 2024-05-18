import React from 'react'
import Rating from '@mui/material/Rating';
import { HiOutlinePencil } from "react-icons/hi2";
import { PiScissors } from "react-icons/pi";
import Addtocart from '../Page/Buttons/Addtocart';
import Buynow from '../Page/Buttons/Buynow';
import Product from './Product'
import Imagechange from '../Imagechange/Imagechange';
import Laggedjogers from '../Imagechange/Laggedjogers';
import Leathershoes from '../Imagechange/Classleather';
import Europeanlace from '../Imagechange/Europalceimage';
import OmaxImage from '../Imagechange/Omaxleatherimage';
import Redimage from '../Imagechange/Redimage';
import Classicedge from '../Imagechange/Classicedge';
import Spriteyoga from '../Imagechange/Spriteyoga';
import Titaniumlace from '../Imagechange/Titaniumlaceimage';
import Classclub from '../Imagechange/Clubimage';
import Wynktext from '../Imagechange/Wynktext'
import Vaccumlaceup from '../Imagechange/Vaccumlaceup'


const products = [
    {
        id: 1,
        sliderImage: <Imagechange />,
        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "COURT VISION Lace-Up Sneakers",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "Additionally, fashion has often evolved into many different designs, such as high heels, which are most commonly worn by women during fancy occasions. Contemporary footwear...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }   
    },
    {
        id: 2,
        sliderImage: <Laggedjogers />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Laced Joggers for Men",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "Our shoes are designed to empower you with every step. With a focus on quality materials and ergonomic design, we prioritize comfort without compromising on...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"800.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 3,
        sliderImage: <Leathershoes />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Classic Leather Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "The leather manufacturing process is divided into three fundamental subprocesses: preparatory stages, tanning, and crusting. A further subprocess, finishing, can be added into the leather..",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 4,
        sliderImage: <Europeanlace />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Europa Lace-Up Running Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "The leather manufacturing process is divided into three fundamental subprocesses: preparatory stages, tanning, and crusting. A further subprocess, finishing, can be added into the leather..",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 5,
        sliderImage: <OmaxImage />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Omax Lace-Up Sports Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "The leather manufacturing process is divided into three fundamental subprocesses: preparatory stages, tanning, and crusting. A further subprocess, finishing, can be added into the leather..",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 6,
        sliderImage: <Redimage />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Explore Mid-Top Lace-Up Casual Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "It is thought that shoes may have been used long before this, but because the materials used were highly perishable, it is difficult to find...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 7,
        sliderImage: <Spriteyoga/>,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Sprite Yoga Softy Set",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "In medieval times shoes could be up to two feet long, with their toes sometimes filled with hair, wool, moss, or grass. Many medieval shoes...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 8,
        sliderImage: <Classicedge />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Classic 2.5 Edge Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "The InstaPump Fury was released in 1994. The shoe was lace-less and featured Reebok's pump technology, a reduced midsole, Hexalite cushioning and a fully synthetic...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 9,
        sliderImage: <Titaniumlace />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Titanium Lace-Up Sports Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "In another building I was shown his manufactory of shoes, which, like the other, is full of ingenuity, and, in regard to subdivision of labour,...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 10,
        sliderImage: <Classclub />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Club C 85 Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 11,
        sliderImage: <Wynktext />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Wynk Textured Low-Top Lace-Up Sports Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "Our shoes are not just footwear; they are an extension of your personality. With an eclectic mix of bold colors, unique patterns, and innovative designs,...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },
    {
        id: 12,
        sliderImage: <Vaccumlaceup />,

        ratingDetails:{
            rating: <Rating name="no-value" value={null}/>,
            ratingPencil : <HiOutlinePencil />,
            ratingTitle: "Write a review"
        },

        titleDetails:{
        title: "Vacum Lace-Up Running Shoes",
        title2 : "Sneakers 2023 Limited Edition",
        },

        productCategories:{
            productTitle:"SKU:",
            size:"12",
            category:"CATEGORY:",
            categoryName: "Sneakers"
        },
        para: "As each man performs but one step in the process, which implies no knowledge of what is done by those who go before or follow...",
        colorCategory:{
            colorTitle:"COLOR",
            colorTitleSpan:"VARIANTS:",
            firstColor: "cement",
            secondColor: "yellow",
            thirdColor:"Green",
        },
        sizeCategory:{
            icon:<PiScissors style ={{fontSize:'20px'}}/>,
            para:"See Sizing Guide"
        },
        quantityCategory:{
            para:"Quantity",
            minus: "-",
            number:1,
            plus:"+"
        },
        priceCategory:{
            price:"851.00",
            priceSpan:"USD",
            cartButton: <Addtocart />,
            buyButton: <Buynow />,
        }
    },

];


const productData = products.map((items,index)=> <Product id = {items.id} sliderImage = {items.sliderImage} rating = {items.ratingDetails.rating} ratingIcon = {items.ratingDetails.ratingPencil}
ratingTitle = {items.ratingDetails.ratingTitle} title = {items.titleDetails.title} title2={items.titleDetails.title2} productTitle={items.productCategories.productTitle}
size={items.productCategories.size} category={items.productCategories.category} categoryName={items.productCategories.categoryName}
para={items.para} colorTitle={items.colorCategory.colorTitle} colorTitleSpan={items.colorCategory.colorTitleSpan} firstColor={items.colorCategory.firstColor}
secondColor={items.colorCategory.secondColor} thirdColor={items.colorCategory.thirdColor} sizeIcon = {items.sizeCategory.icon} sizePara = {items.sizeCategory.para}
quantitypara={items.quantityCategory.para} minus={items.quantityCategory.minus} number={items.quantityCategory.number} plus = {items.quantityCategory.plus}
price={items.priceCategory.price} priceSpan={items.priceCategory.priceSpan} cartButton={items.priceCategory.cartButton} buyButton ={items.priceCategory.buyButton} />)

export {productData};

const Courtvision = (product) => { 
   
  return (
    <div>
        {/* <Blucershoe /> */}
    </div>
  )
}

export default Courtvision
