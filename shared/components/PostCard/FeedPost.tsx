import { set } from "firebase/database";
import React, { useEffect } from "react";

import { Button } from "~/components/ui/button";
import {
  OpenHeartIcon,
  FilledHeartIcon,
  ShareIcon,
  CommentIcon
} from './../../icons/icons';



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

interface FeedPostProps {
  post: Post;
}



function FeedPost({ post }: FeedPostProps) {
  console.log("post is : ", post);
  
  const [localPost, setLocalPost] = React.useState(post);
  
  console.log("the local post is : ", localPost);
  const toggleLike = () => {
    setLocalPost(prev => ({
      ...prev,
      isliked: !prev.isliked,
      likes: prev.isliked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4 border-b">
        <img
          src={localPost.avatarUrl}
          className="w-10 h-10 rounded-full"
          alt="User avatar"
        />
        <div className="ml-3">
          <h3 className="font-semibold text-lg">{localPost.description}</h3>
          <div className="flex gap-2 text-sm text-gray-500">
            {localPost.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 px-2 py-1 rounded">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-700 mb-4">{localPost.description}</p>
        <img
          src={localPost.imageUrl}
          alt="Post content"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Actions */}
      <div className="p-4 border-t">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLike}
              className="flex items-center gap-1 text-red-500 hover:text-red-600"
            >
              {localPost.isliked ? <FilledHeartIcon /> : <OpenHeartIcon />}
              <span>{localPost.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-700">
              <CommentIcon />
              <span>{localPost.comments}</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-orange-500">
              {localPost.comments}
            </span>
            <Button variant="outline" className="gap-2">
              <ShareIcon />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;


