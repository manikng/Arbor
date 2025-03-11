import React from "react";

import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

function CreatePostCard() {
  return (
    <div className="rounded-sm shadow-md   min-h-[200px]">
      <div className="productInput flex items-center  mx-2 gap-4">
        <div className="h-22 w-20 rounded-full overflow-hidden">
          <img
            src="https://www.gravatar.com/avatar/
205e460b479e2e5b48aec07710c08d50"
            className="object-cover h-full w-full "
          />
        </div>

        <label htmlFor="Product-Description" className="flex w-full ">
          <textarea
            name="Product-Description"
            id="Product-Description"
            placeholder="I have Buga Luga awesome under 5$ just for you"
            aria-label="Product-Description"
            
            className="border-4 text-2xl font-mono  shadow-lg rounded-2xl w-full"
          ></textarea>
        </label>
      </div>
      <div className="productDetail flex justify-evenly items-center mb-2">
        <label htmlFor="Tags" className="flex items-center">
          <Button size="sm" className="font-mono">Tags</Button>
          {/* <p className="font-medium text-xl pr-1">Tags</p> */}
          <input type="text" className="border-4 shadow-lg rounded-2xl w-22" />
          <input
            type="text"
            placeholder="Price$"
            className="border-4 shadow-lg rounded-2xl w-22"
          />
        </label>
        <Button className="font-mono">Ai description</Button>
      </div>
      <div className="flex justify-between mx-4 items-center">
        <div className="flex  items-center gap-2">
          <Button className="font-mono ">Img</Button>
          <Button className="font-mono  ">GIf</Button>
        </div>
        <Button className="font-mono"> Create Post</Button>
      </div>
    </div>
  );
}

export default CreatePostCard;
