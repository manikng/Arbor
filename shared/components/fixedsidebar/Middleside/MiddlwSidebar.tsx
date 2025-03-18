import React from "react";
import FeedPost from "./../../PostCard/FeedPost";
import { CreatePostCard } from "~/routes/home";

interface Post {
  dbid: string;

  id: number;
  avatarUrl: string;
  description: string;
  tags: string[];
  price: string;
  productName: string;
  imageUrl: string;
  isliked: boolean;
  likes: number;
  comments: number;
}

interface MiddleSidebarProps {
  posts: Post[];
}

function MiddleSidebar ({ posts }: MiddleSidebarProps)  {
  console.log("data in middle ", posts);
  return (
    <div className="flex-1 middleside ml-1 mr-2 h-screen">
      <CreatePostCard />
      <div className="space-y-6 h-screen">
        {posts.map((post, index) => (
          <FeedPost key={post.dbid || index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MiddleSidebar;
