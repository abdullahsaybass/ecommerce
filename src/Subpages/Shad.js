import React from 'react'
import Subpage from '../Subpages/Subpage'

const Shad = () => {
    const subpageData = [
        {
          id:1,
          title:"Shipping & Delivery",
          description:"We value the diverse perspectives and experiences of our users, and we encourage collaboration and community engagement. Our platform provides opportunities for users to contribute their knowledge, share their opinions, and engage in discussions with like-minded individuals."
        }
      ]
    const subpageDatas = subpageData.map((item) => <Subpage title ={item.title}description={item.description} />);
  return (
    <div>
        {subpageDatas}
    </div>
  )
}

export default Shad