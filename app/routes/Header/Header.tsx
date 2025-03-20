import { Link } from "react-router";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import l3 from './../../../features/images/logo/logomynew.png';
import MobileSearch from './MobileSearch';

import NewLogo from './../../../image.png';
import React from "react";
import logo from './../../../logo.png';
import A_rbor from './../../../A_rbor.jpg';
import Arbor_logo from './../../../uploads/img/Arbor_logo_flower.jpg';
import Arbor_logo2 from './../../../uploads/img/logo2.jpg';
function Header() {
  return (
    <div>
      <div className=" bg-gray-50">
        <header className=" flex items-center justify-between p-4 bg-white border-b shadow-sm ">
          <div className=" headerlogocontainer flex items-center space-x-2 mx-2">
            <Link to="/" className="flex items-center space-x-2">
              <img id="logo" src={Arbor_logo2} alt="logo" className=" bg-contain h-15 w-auto rounded-full bg-white mix-blend-multiply" />
              {/* <img id="logo" src={logo} alt="logo" className="h-22 w-auto rounded-full bg-white mix-blend-multiply" /> */}
              {/* <img id="logo" src={NewLogo} alt="logo" className="h-12 headerlogo w-auto  rounded-md " /> */}
              {/* <img id="logo" src={A_rbor} alt="logo" className="h-20 w-auto rounded-full " /> */}
              {/* <img id="logo" src={l3} alt="logo" className="h-22 w-auto rounded-full " /> */}
            
            </Link>
          </div>
          <MobileSearch />

          <div className="rounded-full border px-4 py-2 hover:shadow-md transition">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="auth/signup">Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to="auth/login">Login</Link>

                </DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;