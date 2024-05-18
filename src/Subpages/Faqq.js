import React from 'react'
import Subpage from '../Subpages/Subpage'

const Faqq = () => {
    const subpageData = [
        {
          id:1,
          title:"Faq's",
          description:"People will always seek help and advice. They are unwilling to pick up the phone, walk into a store, or wait hours (even minutes) for that information or insight to become accessible."
        }
      ]
    
    const subpageDatas = subpageData.map((item) => <Subpage title ={item.title}description={item.description} />);
  return (
    <div>
         {subpageDatas}
    </div>
  )
}

export default Faqq