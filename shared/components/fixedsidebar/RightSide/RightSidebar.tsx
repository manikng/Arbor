import React from 'react'
import { DrawerDialogDemo } from "./AskAiDrawer/AskAI"
import StickySearch from './StickySearch'
import { Link } from 'react-router'

function RightSidebar() {
  return (
    <div>
      <div className='bg-orange-400'>RightSidebar</div>
      <div className='flex items-center justify-center'>
      <DrawerDialogDemo />
      </div>
      
        <StickySearch className='static flex items-center justify-center'/>
        <div className="shadow-lg rounded-md p-4 hover:bg-orange-400 ">
          <Link to={`/TopSelled`}>
            <div className="flex items-center gap-2">
              <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
                Top Selled products of the day
              </span>
            </div>
          </Link>
        </div>
        
        <div className="shadow-lg rounded-md p-4 hover:bg-orange-400 ">
          <Link to={`/TopTrending`}>
            <div className="flex items-center gap-2">
              <span className="font-stretch-ultra-expanded text-2xl flex justify-center items-center">
              top Trending products of the  day
              </span>
            </div>
          </Link>
        </div>
        
        <div>
        <div className="flex flex-col items-center gap-2 shadow-lg rounded-md p-4 hover:bg-orange-400">
              <span className="font-stretch-ultra-expanded text-2xl flex justify-center  items-center p-6">
              top Trending tags of the day
              </span>
              <div className="tags flex flex-row-reverse gap-2">
                <span className='text-gray-800 font-semibold '>#BugaLuga </span>
                <span className='text-gray-800 font-semibold'>#alovera Bags</span>
              </div>
            </div>
        </div>



    </div>
  )
}

export default RightSidebar