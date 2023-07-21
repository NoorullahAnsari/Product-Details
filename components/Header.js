import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Menu from "./Menu";
import Dropdown from "./Dropdown";

const Header = () => {
  const { data: session } = useSession();
  return (
    <>
      <nav className=" bg-sky-950 text-white ">
        <div className=" hidden md:flex flex-row font-semibold justify-center gap-6 p-1 border-b-2 border-black">
          <div className="ml-0 pl-0  p-4 ">
            {session?.user ? (
              <div className="">WELCOME, {session.user.name}</div>
            ) : (
              " "
            )}
          </div>
          <Menu />
        </div>
        <div className="float-right m-2 md:hidden">
          <div className="ml-0 pl-0  p-4 ">
            {session?.user ? (
              <div className=" ">WELCOME,{session.user.name}</div>
            ) : (
              " "
            )}
          </div>
          <Dropdown />
        </div>
      </nav>
    </>
  );
};

export default Header;
