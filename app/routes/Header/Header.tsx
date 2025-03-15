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

import React from "react";

function Header() {
  return (
    <div>
      <div className=" bg-gray-50">
        <header className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
          <div className="flex items-center space-x-2 text-2xl font-bold text-red-500">
            <Link to="/" className="flex items-center space-x-2">
              <img id="logo" src={l3} alt="logo" className="h-12 w-auto" />
              <span>Arbor</span>
            </Link>
          </div>
          <MobileSearch />

          <button className="rounded-full border px-4 py-2 hover:shadow-md transition">
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
          </button>
        </header>
      </div>
    </div>
  );
}

export default Header;