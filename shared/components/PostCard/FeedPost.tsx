import React, { useEffect } from "react";
import { setDoc, updateDoc } from "firebase/firestore";

import { Button } from "~/components/ui/button";
import {
  OpenHeartIcon,
  FilledHeartIcon,
  ShareIcon,
  CommentIcon,
} from "./../../icons/icons";
import { getresponsefromgeminiapi } from "shared/AI/Gemini";
import { SplineIcon } from "lucide-react";

import Markdown from "react-markdown";
import { doc } from "firebase/firestore";
import { db } from "shared/database/firebase";
import { update } from "firebase/database";

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

interface FeedPostProps {
  post: Post;
}

// function FeedPost({ post }: FeedPostProps) {
//   const [localPost, setLocalPost] = React.useState(post);
//   const [showAIDescription, setShowAIDescription] = React.useState(false);

//   const toggleLike = () => {
//     setLocalPost(prev => ({
//       ...prev,
//       isliked: !prev.isliked,
//       likes: prev.isliked ? prev.likes - 1 : prev.likes + 1
//     }));
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center p-6 pb-4 gap-4">
//         <img
//           src={localPost.avatarUrl}
//           className="w-12 h-12 rounded-full border-2 border-purple-500 p-0.5"
//           alt="User avatar"
//         />
//         <div className="flex-1">
//           <div className="flex items-center gap-3 mb-1">
//             <h3 className="font-bold text-gray-900 text-lg">{localPost.productName}</h3>
//             <span className="text-sm bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-3 py-1 rounded-full">
//               ${localPost.price}
//             </span>
//           </div>
//           <div className="flex flex-wrap gap-2">
//             {localPost.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="text-sm font-sans font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="px-6 pb-6">
//         <div className="group relative mb-4">
//           <img
//             src={localPost.imageUrl}
//             alt="Post content"
//             className="w-full h-80 object-cover rounded-xl border border-gray-100 shadow-sm hover:border-purple-100 transition-colors"
//           />
//           <button
//             onClick={() => setShowAIDescription(!showAIDescription)}
//             className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-sm font-semibold text-purple-700 hover:bg-white transition-all hover:shadow-md"
//           >
//             {showAIDescription ? 'Hide AI Insight' : 'Generate AI Insight'}
//           </button>
//         </div>

//         {showAIDescription && (
//           <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
//             <p className="text-sm text-purple-900 italic">
//               AI-generated product insight describing key features and benefits...
//             </p>
//           </div>
//         )}

//         <p className="text-gray-700 mb-4 text-base leading-relaxed">
//           {localPost.description}
//         </p>
//       </div>

//       {/* Actions */}
//       <div className="px-6 py-4 border-t border-gray-100">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-5">
//             <button
//               onClick={toggleLike}
//               className="flex items-center gap-2 transition-all hover:-translate-y-0.5"
//             >
// {localPost.isliked ?
// <div className="w-6 h-6 text-red-500 hover:text-red-600"><FilledHeartIcon /> </div>
// :
// <div className="w-6 h-6 text-gray-500 hover:text-red-500" > <OpenHeartIcon />  </div>

// }
//               <span className="font-medium text-gray-700">{localPost.likes}</span>
//             </button>
//             <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
//               <div  className="w-6 h-6"><CommentIcon /></div>
//               <span className="font-medium">{localPost.comments}</span>
//             </button>
//           </div>
//           <Button
//             variant="outline"
//             className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800"
//           >
//             <div className="w-5 h-5"><ShareIcon  /></div>
//             Share
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

function FeedPost({ post }: FeedPostProps) {
  const [localPost, setLocalPost] = React.useState(post);
  const [showAIDescription, setShowAIDescription] = React.useState(false);
  const [AiDescription, setAiDescription] = React.useState("");
  const [generatingAiDescription, setGeneratingAiDescription] =
    React.useState(false);
  // const HandleAiDescriptionClick = async () => {
  //   if (showAIDescription) {
  //     setGeneratingAiDescription(true)
  //     setShowAIDescription((prev)=> !prev);
  //   } else {
  //     // const response = await getresponsefromgeminiapi(localPost.productName);
  //     // console.log("the response is : ", response);
  //     // setShowAIDescription(true);
  //     setGeneratingAiDescription(true);
  //     const curpost = JSON.stringify(localPost);
  //     console.log("the local post is : ", curpost);
  //     const response = await getresponsefromgeminiapi(curpost);
  //     try {
  //       if(response){
  //         setAiDescription(response);
  //         setGeneratingAiDescription(false);
  //         setShowAIDescription(true);

  //     }} catch (error) {
  //       console.log("error getting response", error);

  //     }

  //   }
  // };

  const HandleAiDescriptionClick = async () => {
    // Immediately handle hide/cancel action
    if (showAIDescription || generatingAiDescription) {
      setShowAIDescription(false);
      setGeneratingAiDescription(false);
      setAiDescription("");
      return;
    }

    // Only proceed if not already showing/generating
    try {
      setGeneratingAiDescription(true);
      const response = await getresponsefromgeminiapi(
        JSON.stringify(localPost)
      );
      setAiDescription(response || "No AI description available.");
      setShowAIDescription(true);
    } catch (error) {
      console.error("Error generating description", error);
      // Consider adding error state feedback
    } finally {
      setGeneratingAiDescription(false);
    }
  };

  const toggleLike = () => {
    console.log("the local post is : ", localPost.id);

    const docRef = doc(db, "posts", localPost.id);
    setDoc(
      docRef,
      {
        ...localPost,
        isliked: !localPost.isliked,
        likes: localPost.likes + (localPost.isliked ? -1 : 1),
      },
      { merge: true }
    )
      .then(() => {
        console.log("Document written with ID: ", localPost.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    // update(docRef, { isliked: !localPost.isliked ,
    //   likes: localPost.likes + (localPost.isliked ? -1 : 1)
    // }).then(()=>{
    //   console.log("Document updated with new like status");
    // }).catch((error)=>{
    //   console.error("Error updating document: ", error);
    // });

    setLocalPost((prev) => ({
      ...prev,
      isliked: !prev.isliked,
      likes: prev.isliked ? prev.likes - 1 : prev.likes + 1,
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Header with subtle gradient */}
      <div className="flex items-center p-6 gap-4 bg-gradient-to-r from-purple-50 to-purple-25">
        <img
          src={localPost.avatarUrl}
          className="w-12 h-12 rounded-full border-2 border-purple-300 shadow-inner"
          alt="User avatar"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-bold text-gray-900 text-lg tracking-tight">
              {localPost.productName}
            </h3>
            <span className="text-sm bg-gradient-to-br from-orange-100 to-orange-50 text-orange-800 px-3 py-1 rounded-full border border-orange-200">
              ${localPost.price}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {localPost.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100 hover:bg-purple-100 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content with image overlay */}
      <div className="relative px-6 pb-6">
        <div className="relative mt-4 rounded-xl overflow-hidden shadow-inner">
          <img
            src={localPost.imageUrl}
            alt="Post content"
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <button
            onClick={HandleAiDescriptionClick}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm text-sm font-semibold text-purple-700 hover:bg-white transition-all hover:shadow-md border border-purple-100"
          >
            {/* {showAIDescription ? "Hide AI Insight" : "Generate AI Insight"} */}
            {generatingAiDescription ? (
              <span className="flex items-center gap-2">
                <SplineIcon className="w-4 h-4 animate-spin" />
                Cancel Generation
              </span>
            ) : showAIDescription ? (
              "Hide AI Insight"
            ) : (
              "Generate AI Insight"
            )}
          </button>
        </div>

        {generatingAiDescription ? (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-inner">
            <p className="text-sm text-purple-900 leading-relaxed animate-pulse">
              Generating AI Description...
            </p>
          </div>
        ) : showAIDescription && AiDescription ? (
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 shadow-inner">
            <div className="text-sm text-purple-900 leading-relaxed">
              <Markdown className="AidescriptionMarkdown">
                {AiDescription}
              </Markdown>
            </div>
          </div>
        ) : null}

        <p className="text-gray-700 mt-4 text-base leading-relaxed tracking-wide">
          {localPost.description}
        </p>
      </div>

      {/* Actions with enhanced visual hierarchy */}
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <button
              onClick={toggleLike}
              className="flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              {localPost.isliked ? (
                <div className="w-6 h-6 text-red-500 hover:text-red-600">
                  <FilledHeartIcon />{" "}
                </div>
              ) : (
                <div className="w-6 h-6 text-gray-500 hover:text-red-500">
                  {" "}
                  <OpenHeartIcon />{" "}
                </div>
              )}
              <span className="font-medium text-gray-700 text-sm tracking-wide">
                {localPost.likes}
              </span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-purple-700 transition-colors">
              <div className="w-6 h-6">
                <CommentIcon />
              </div>

              <span className="font-medium text-sm tracking-wide">
                {localPost.comments}
              </span>
            </button>
          </div>
          <Button
            variant="outline"
            className="gap-2 border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-5 h-5">
              <ShareIcon />
            </div>

            <span className="text-sm tracking-wide">Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;

// function FeedPost({ post }: FeedPostProps) {
//   console.log("post is : ", post);

//   const [localPost, setLocalPost] = React.useState(post);

//   console.log("the local post is : ", localPost);
//   const toggleLike = () => {
//     setLocalPost(prev => ({
//       ...prev,
//       isliked: !prev.isliked,
//       likes: prev.isliked ? prev.likes - 1 : prev.likes + 1
//     }));
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//       {/* Header */}
//       <div className="flex items-center p-4 border-b">
//         <img
//           src={localPost.avatarUrl}
//           className="w-10 h-10 rounded-full"
//           alt="User avatar"
//         />
//         <div className="ml-3">
//           <h3 className="font-semibold text-lg">{localPost.description}</h3>
//           <div className="flex gap-2 text-sm text-gray-500">
//             {localPost.tags.map((tag, index) => (
//               <span key={index} className="bg-gray-100 px-2 py-1 rounded">
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <p className="text-gray-700 mb-4">{localPost.description}</p>
//         <img
//           src={localPost.imageUrl}
//           alt="Post content"
//           className="w-full h-96 object-cover rounded-lg"
//         />
//       </div>

//       {/* Actions */}
//       <div className="p-4 border-t">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleLike}
//               className="flex items-center gap-1 text-red-500 hover:text-red-600"
//             >
//               {localPost.isliked ? <FilledHeartIcon /> : <OpenHeartIcon />}
//               <span>{localPost.likes}</span>
//             </button>
//             <button className="flex items-center gap-1 text-gray-600 hover:text-gray-700">
//               <CommentIcon />
//               <span>{localPost.comments}</span>
//             </button>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-xl font-bold text-orange-500">
//               {localPost.comments}
//             </span>
//             <Button variant="outline" className="gap-2">
//               <ShareIcon />
//               Share
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
