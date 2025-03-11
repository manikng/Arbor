import { Link2 } from "lucide-react";
import React from "react";
import { Link } from "react-router";

import { AvatarImage } from "~/components/ui/avatar";

function LeftSidebar() {
  return (
    <>
      <div className="flex h-screen bg-gray-100">

    

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center p-4">
          {/* Avatar Section */}
          <div className="flex flex-col items-center justify-center shadow-lg rounded-full h-32 w-32 overflow-hidden bg-gray-800">
            <img
              src="https://github.com/shadcn.png"
              alt="Avatar"
              className="object-cover h-full w-full"
            />
            <div className="text-white mt-2">Jhone</div>
          </div>

          {/* Branches Title */}
          <div className="mt-8">
            <span className="font-bold text-2xl text-gray-700">Branches</span>
          </div>

          {/* Branches Links */}
          <div className="flex flex-col items-stretch mt-4 w-full max-w-md">
            <Link
              to={`/FastBuySell`}
              className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold text-xl text-gray-800">
                  FastBuySell
                </span>
              </div>
            </Link>

            <Link
              to={`/NaturaLoop`}
              className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold text-xl text-gray-800">
                  NaturaLoop
                </span>
              </div>
            </Link>

            <Link
              to={`/Transport & Logistics`}
              className="shadow-md rounded-md p-4 mb-2 bg-white hover:bg-gray-50 transition duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold text-xl text-gray-800">
                  Transport & Logistics
                </span>
              </div>
            </Link>
            
            <Link
              to={`/More`}
              className="shadow-md rounded-md p-4 bg-white hover:bg-gray-50 transition duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="font-semibold text-xl text-gray-800">
                  More
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
    //     <div className="container h-screen ">

    //       <div className="flex flex-col  overflow-hidden items-center justify-center  shadow-lg rounded-md  bg-gray-800 p-4">
    //         <img
    //           src="https://github.com/shadcn.png"
    //           alt="Avatar"
    //           className="rounded-full h-14"
    //         />
    //         <div className="text-white">Jhone</div>
    //       </div>
    //       <div className="">
    //         <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
    //           Branches
    //         </span>
    //       </div>

    // {/* now  */}
    //       <div className=" flex flex-col  overflow-hidden items-center justify-center  shadow-lg rounded-md  p-4">

    //         <div className="shadow-lg rounded-md p-4">
    //           <Link to={`/FastBuySell`}>
    //             <div className="flex items-center gap-2">
    //               {/* <Link2 size={24} /> */}
    //               <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
    //                 FastBuySell
    //               </span>
    //             </div>
    //           </Link>
    //         </div>

    //         <div className="shadow-lg rounded-md p-4">
    //           <Link to={`/NaturaLoop`}>
    //             <div className="flex items-center gap-2">
    //               <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
    //                 NaturaLoop
    //               </span>
    //             </div>
    //           </Link>
    //         </div>

    //         <div className="shadow-lg rounded-md p-4">
    //           <Link to={`/Transport & Logistics`}>
    //             <div className="flex flex-col  items-center gap-2 p-4 m-2">
    //               <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
    //                 Transport&Logistics
    //               </span>
    //             </div>
    //           </Link>
    //         </div>
    //         <div className="flex flex-col overflow-hidden items-center justify-center shadow-lg rounded-md p-4">
    //           <Link to={`/More`}>
    //             <div className="flex items-center gap-2">
    //               <span className="font-stretch-ultra-expanded text-2xl flex justify-center">
    //                 More
    //               </span>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
  );
}

export default LeftSidebar;
// src="https://github.com/shadcn.png"
