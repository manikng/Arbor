import type { Route } from "./+types/home";
import Header from "./Header/Header";
import React, { useEffect, useState } from "react";
import NAVBAR from "./../../shared/components/nav/NAVBAR";

export function meta() {
  return [
    { title: "Creativecreata - Social Marketplace" },
    { name: "description", content: "Connect and create with community" },
  ];
}

import { Form, redirect, useLoaderData, useActionData } from "react-router";
import { Button } from "~/components/ui/button";
import postDetails from "./../../shared/database/TEMPData/PostData";

import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryUpload } from "./cloudUpload";
import { set } from "firebase/database";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "shared/database/firebase";

// //fixed sidebars
import LeftSidebar from "../../shared/components/fixedsidebar/Leftsidebar/LeftSidebar";
import MiddleSidebar from "../../shared/components/fixedsidebar/Middleside/MiddlwSidebar";
import RightSidebar from "../../shared/components/fixedsidebar/RightSide/RightSidebar";

// Types
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

export async function loader() {
  //and when load it using loader then fetch its dbid and post data

  const querySnapshotPostData = await getDocs(collection(db, "posts"));

  // querySnapshotPostData.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });
  const AllPosts = querySnapshotPostData.docs.map((doc) => {
    const  fetchedData= { dbid: doc.id, PostData: doc.data() };
    const postdata = {...fetchedData.PostData,id:doc.id}
    // console.log("Post data is : ", postdata);
    
    return postdata;
  });
  console.log("All posts are : ", AllPosts);
  return { posts: AllPosts };
}

export async function action({ request }: Route.ClientActionArgs) {
  //when inserting into the db no dbid is present as it only generate after the data pushed into the db
  //so when user post a  img just take sample id and put  dbid as empty string
  //and when load it using loader then fetch its dbid and post data

  const formData = await request.formData();

  const imageUrlfromCloudinary = await CloudinaryUpload(formData);
  console.log("Image URL in cloudinary is :", imageUrlfromCloudinary);

  const newPost = {
    dbid: "",

    id: postDetails.length + 1,
    avatarUrl:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    description:
      formData.get("Product-Description")?.toString() || "No description",
    tags: (formData.get("Tags")?.toString() || "")
      .split(",")
      .map((t) => t.trim()),
    price: `$${formData.get("Price")?.toString() || "0"}`,
    productName: formData.get("Product-Name")?.toString() || "Unnamed Product",
    imageUrl: imageUrlfromCloudinary,
    isliked: false,
    likes: 0,
    comments: 0,
  };

  try {
    const docRef = await addDoc(collection(db, "posts"), newPost);
    console.log("Document written with ID: ", docRef.id);

    postDetails.push(newPost);

    // Return success instead of redirecting
    return { success: true, message: "Post created successfully" };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, message: "Failed to create post" };
  }
}

export default function Home() {


  const { posts } = useLoaderData() as { posts: Post };
  console.log("now the post with their dbid are home mai : ", posts);

  return (
    <div className="min-h-screen w-full mb-4">
      <Header />
      <NAVBAR />
      <div className="flex w-full mt-10  min-h-screen">
        <LeftSidebar username="" />
        <MiddleSidebar posts={posts} />
        <RightSidebar />
      </div>
    </div>
  );
}

// CreatePostCard component
function CreatePostCard() {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [price, setPrice] = useState<number | string>("");
  const [image, setImage] = useState<File | null>(null);

  // Get action data to check if form was submitted successfully
  const actionData = useActionData<{ success: boolean; message: string }>();

  // Reset form when submission is successful
  useEffect(() => {
    if (actionData?.success) {
      setPreviewImage("");
      setProductDescription("");
      setProductName("");
      setTags("");
      setPrice("");
      setImage(null);
    }
  }, [actionData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImage(file);
    }
  };

  return (
    <Form
      method="post"
      encType="multipart/form-data"
      className="mb-6 bg-white rounded-lg shadow-sm border"
    >
      <div className="p-4">
        {/* {actionData?.success && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded animate-fade-out">
            {actionData.message}
          </div>
        )} */}

        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            className="w-12 h-12 rounded-full"
            alt="User"
          />
          <textarea
            name="Product-Description"
            placeholder="Share your creation with the community..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="Product-Name"
            placeholder="Product Name"
            className="p-2 border rounded"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <input
            type="number"
            name="Price"
            placeholder="Price ($)"
            className="p-2 border rounded"
            step="0.01"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            type="text"
            name="Tags"
            placeholder="Tags (comma separated)"
            className="p-2 border rounded"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
          <div className="relative">
            <input
              type="file"
              name="postimage"
              onChange={handleImageChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
              id="image-upload"
              accept="image/*"
            />
            <label
              htmlFor="image-upload"
              className="block p-2 text-center border rounded bg-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              Upload Images
            </label>
          </div>
        </div>
        {previewImage.length > 0 && (
          <div className="flex gap-2 mb-4">
            <img
              src={previewImage}
              alt="Preview"
              className="w-20 h-20 object-cover rounded border"
            />
          </div>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Post Creation
          </Button>
        </div>
      </div>
    </Form>
  );
}

export { CreatePostCard };
