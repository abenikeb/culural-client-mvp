"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";

const icons = ["/alert.svg", "/cart.svg", "/person.png"];

const navmenu = [
  { name: "Home", link: "/home" },
  { name: "Product", link: "/product" },
  { name: "Category", link: "/category" },
  { name: "Contact Us", link: "/contactUs" },
  { name: "About Us", link: "/aboutUS" },
];

export default function NavBar({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          {/* Logo */}
         <p className="text-[30px] flex items-center">
            <span className="text-[#912c2c] text-[50px] font-bold">A</span>sham
          </p>

          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
                <div className="flex">
                  {icons.map((cur) => (
                    <img className="w-[2rem]  h-[2rem] mr-[10px]" src={cur} />
                  ))}
                  <button
                    className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                    onClick={() => setShowSignInModal(true)}
                  >
                    Sign In
                  </button>
                </div>
            )}
          </div>
        </div>
        <>
          <ul className="flex justify-center h-[40px] bg-[#912c2c] w-full gap-x-2">
              {navmenu.map((curr) => {
                return (
                  <div className="flex text-[white] items-center px-[3rem]">
                    {curr.name == "Category" && (
                      <img className="w-[2rem]" src="menu.svg" />
                    )}
                    <Link
                      className="hover:text-gray-300 transition-all"
                      href={curr.link}
                    >
                      {curr.name}
                    </Link>
                  </div>
                );
              })}
          </ul>
        </>
      </div>
     
    </>
  );
}