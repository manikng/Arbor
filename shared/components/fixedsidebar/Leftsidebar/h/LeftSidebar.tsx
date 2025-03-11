import { Link2 } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

function LeftSidebar() {
  return (
    <div className="container h-screen ">
      <div className="flex flex-col  overflow-hidden items-center justify-center  shadow-lg rounded-md  bg-gray-800 p-4">
        <img
          src="https://github.com/shadcn.png"
          alt="Avatar"
          className="rounded-full h-14"
        />
        <div className="text-white">Jhone</div>
      </div>
      <div className="">
        <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
          Branches
        </span>
      </div>

{/* now  */}
      <div className=" flex flex-col  overflow-hidden items-center justify-center  shadow-lg rounded-md  p-4">
      
        <div className="shadow-lg rounded-md p-4">
          <Link to={`/FastBuySell`}>
            <div className="flex items-center gap-2">
              {/* <Link2 size={24} /> */}
              <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
                FastBuySell
              </span>
            </div>
          </Link>
        </div>

        <div className="shadow-lg rounded-md p-4">
          <Link to={`/NaturaLoop`}>
            <div className="flex items-center gap-2">
              <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
                NaturaLoop
              </span>
            </div>
          </Link>
        </div>

        

        <div className="shadow-lg rounded-md p-4">
          <Link to={`/Transport & Logistics`}>
            <div className="flex flex-col  items-center gap-2 p-4 m-2">
              <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
                Transport&Logistics
              </span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col overflow-hidden items-center justify-center shadow-lg rounded-md p-4">
          <Link to={`/More`}>
            <div className="flex items-center gap-2">
              <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
                More
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
// src="https://github.com/shadcn.png"
