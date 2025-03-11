import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import Header from "./Header/Header";
import React from "react";

import NAVBAR from "./../../shared/components/nav/NAVBAR";
import SidebarLeft from "./../../shared/components/sidebar/SidebarLeft";
//fixed sidebars
import LeftSidebar from "../../shared/components/fixedsidebar/Leftsidebar/h/LeftSidebar";
import MiddleSidebar from "../../shared/components/fixedsidebar/Middleside/MiddlwSidebar";
import RightSidebar from "../../shared/components/fixedsidebar/RightSide/RightSidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Vercel" };
}
export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {/* <SidebarLeft children={undefined} /> */}
      <Header />
      <NAVBAR />
      <div className="flex mt-1">
        <div className="leftside"><LeftSidebar /></div>
        <div className="middleside"><MiddleSidebar /></div>
        <div className="rightside"><RightSidebar /></div>
      </div>
    </div>
  );
}
// export default function Home({ loaderData }: Route.ComponentProps) {
//   return <Welcome message={loaderData.message} />;
// }
