import React from 'react'
import Header from './Header'
import LatestCatNews from './LatestCatNews'

function HomeNewsPage(props) {
    const businessHeading = props.businessHeading
    const businessData = props.businessData
  return (
          <div className='w-full flex flex-col'>
        <Header
       heading = {businessHeading}
      />
        <div className='flex flex-col lg:flex-row justify-between mx-4'>
        {businessData.map((item, index) => (
            <LatestCatNews 
            item={item}
            />
        ))}
      </div>
      <div>
        {

        }
      </div>
        </div>
  )
}

export default HomeNewsPage