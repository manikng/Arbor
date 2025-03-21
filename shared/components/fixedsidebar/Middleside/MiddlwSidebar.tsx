import React, { useEffect } from "react";
import FeedPost from "./../../PostCard/FeedPost";
import { CreatePostCard } from "~/routes/home";
import type { Post } from "shared/types/post";



interface MiddleSidebarProps {
posts: Post;
className?: string;
}
import type { Route } from ".react-router/types/app/routes/+types/home";

import { collection, getDocs } from "firebase/firestore";
import { db } from "shared/database/firebase";

export async function loader({ context }: Route.LoaderArgs) {
  let querySnapshotPostData = await getDocs(collection(db, "posts")); 
  
  let AllPosts = querySnapshotPostData.docs.map((doc) => {
    let fetchedData = { dbid: doc.id, PostData: doc.data() };
    let postdata = { ...fetchedData.PostData, id: doc.id };
    console.log("middle Data is : ", postdata);
    
    return postdata;
  });
  let res = Object.values(AllPosts);
  console.log("All Posts in midddlebar  : ", res);
  return { posts: res,  };
}


function MiddleSidebar ({ posts,className }: MiddleSidebarProps) {
    useEffect(()=>{
        console.log("data in middle using useeffect ", posts);
    },[posts]);
console.log("data in middle ", posts);
return (
<div className={`flex-1 middleside ml-1 mr-2 h-auto ${className}`}>
<CreatePostCard />
<div className="flex flex-col gap-5 mb-4">
{posts.map((post, index) => (
<FeedPost key={index} post={post} />
))}
</div>
</div>
);
};

export default MiddleSidebar;
