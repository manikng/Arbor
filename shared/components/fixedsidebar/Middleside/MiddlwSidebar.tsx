import React from 'react'
import CreatePostCard from './../../PostCard/CreatePostCard';
import FeedPost from './../../PostCard/FeedPost';




function MiddlwSidebar() {
  return (
    <div>
      <div>
      {/* <div className='bg-blue-600'>MiddlwSidebar</div> */}
      <CreatePostCard />
      <FeedPost />
      </div>
    </div>
  )
}

export default MiddlwSidebar