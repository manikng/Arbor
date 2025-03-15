import React from "react";
import FeedPost from './../../PostCard/FeedPost';
import { CreatePostCard } from "~/routes/home";
// import type { PostData } from "~/routes/home";

import PostData from './../../../database/TEMPData/PostData';

interface MiddleSidebarProps {
  posts: PostData[];
}
function MiddleSidebar({ posts }: MiddleSidebarProps) {
  return (
    <div className="flex-1 max-w-2xl mx-4">
      <CreatePostCard />
      <div className="space-y-6">
        {posts.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default MiddleSidebar;

// import React from 'react'
// // import CreatePostCard from './../../PostCard/CreatePostCard';
// import FeedPost from './../../PostCard/FeedPost';
// import { CreatePostCard } from '~/routes/home';
// import postDetails from './../../../database/TEMPData/PostData';
// import Img from 'shared/tenp/Img';

// // Sample post data
// // const samplePost = {
// //   id: '1',
// //   productName: 'Sample Product',
// //   description: 'This is a sample product description.',
// //   price: 99,
// //   imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2021-10/18/21/asset/ad3b668d4767/sub-buzz-639-1634594115-27.jpg?output-format=auto&output-quality=auto',
// //   avatarUrl: 'https://example.com/avatar.jpg',
// //   tags: ['Sample,', 'Product'],
// //   isliked: true,
// //   likes: 10,
// //   comments: 5
// // };



// function MiddlwSidebar() {
//   return (
//     <div>
//       <div>
//       {/* <div className='bg-blue-600'>MiddlwSidebar</div> */}
//       <CreatePostCard />
//       {/* <Img /> */}
//       {/* <MyPostCard /> */}
      
//       {/* to use js in tsx use {} wrap js inside the {} */}

//       {postDetails.map((post)=>{
//         return <FeedPost key={post.id} post={post} />
//       })}

//       {/* <FeedPost post={samplePost} /> */}
//       {/* <SocialMediaCard /> */}
//       </div>
//     </div>
//   )
// }
// export default MiddlwSidebar