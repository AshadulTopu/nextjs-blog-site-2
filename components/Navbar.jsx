"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import { IoMdPulse } from "react-icons/io";
import LinkItem from "./LinkItem";
import useMenuActive from "../hooks/useMenuActive";
import { MenuLinks } from "../constants/MenuLinks";

export default function Navbar() {
  return (
    <nav className="w-full py-5 dark:bg-dark">
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-gray-900 text-2xl dark:text-white">
              Tech Pulse
            </h1>
            <IoMdPulse className="text-3xl text-sky-400" aria-hidden="true" />
          </div>
        </Link>

        <div className="flex gap-8 max-lg:gap-5 items-center flex-1 max-md:hidden text-gray-600 dark:text-white justify-center">
          {MenuLinks.map((item, index) => {
            const isActive = useMenuActive(item.link);
            return (
              <LinkItem
                key={index}
                route={item.link}
                label={item.name}
                isActive={isActive}
              />
            );
          })}
        </div>
        <div className="flex-1 justify-end flex gap-3 items-center">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
