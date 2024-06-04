import Link from "next/link";
import { MenuLinks } from "../constants/MenuLinks";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

export default function MobileMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <>
      <label className="swap swap-rotate md:hidden">
        <input
          type="checkbox"
          onClick={mobileMenuHandler}
          checked={openMobileMenu ? false : true}
          value={openMobileMenu ? false : true}
        />
        <HiMenu className="dark:text-white swap-on fill-current w-6 h-6" />
        <MdOutlineClose className="dark:text-white swap-off fill-current w-6 h-6" />
      </label>

      {openMobileMenu ? (
        <div className="mobile-menu">
          {MenuLinks.map((menu, index) => (
            <Link href={menu.link}>{menu.name}</Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
