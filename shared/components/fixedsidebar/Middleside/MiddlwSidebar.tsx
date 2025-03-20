import React from "react";
import FeedPost from "./../../PostCard/FeedPost";
import { CreatePostCard } from "~/routes/home";

interface Post {
dbid: string;

id: string;
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
className?: string;
}

function MiddleSidebar ({ posts,className }: MiddleSidebarProps) {
console.log("data in middle ", posts);
return (
<div className={`flex-1 middleside ml-1 mr-2 h-auto ${className}`}>
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
