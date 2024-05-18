import React from 'react'
import Subpage from '../Subpages/Subpage'


const Backabout = () => {
  const subpageData = [
    {
      id:1,
      title:"about us",
      description:"At AboutUs, we are a dynamic and innovative company committed to providing comprehensive information and valuable insights on a wide range of topics."
    }
  ]

  const subpageDatas = subpageData.map((item) => <Subpage title ={item.title}description={item.description} />);
  return (
    <div>
      {subpageDatas}
    </div>
  )
}

export default Backabout