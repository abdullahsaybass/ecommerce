import React from 'react'
import Subpage from '../Subpages/Subpage'

const Contactel = () => {
    const subpageData = [
        {
          id:1,
          title:"Contact us",
          description:"With that in mind, we strive to deliver accurate, trustworthy, and engaging content to our users. Our team of experts, researchers, and writers work tirelessly to curate high-quality articles, guides, and resources that cover various domains such as technology, science, health, business, and more."
        }
      ]
    
    const subpageDatas = subpageData.map((item) => <Subpage title ={item.title}description={item.description} />);
  return (
    <div>
         {subpageDatas}
    </div>
  )
}

export default Contactel