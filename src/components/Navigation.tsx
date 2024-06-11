"use client";

import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaReact } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const { theme, toggleTheme }: any = useThemeContext();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex items-start ${
          openMenu ? "w-28" : "w-12"
        } transition-all duration-300  verflow-hidden flex-col py-10 px-2 md:max-w-40 justify-between md:w-min md:px-5 relative border-r-2 border-slate-300`}
      >
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setOpenMenu((prevVal) => !prevVal)}
        >
          <GiHamburgerMenu size={25} className="dark:text-teal-300" />
        </div>
        <nav className="flex flex-col gap-3">
          <Link
            href="/"
            title="Homepage"
            className={`text-xs md:text-sm flex items-center ${
              openMenu ? "justify-start" : "justify-center"
            } md:justify-start gap-2`}
          >
            <FaHome
              size={25}
              className={`min-w-6 dark:text-teal-300 ${
                pathname === "/" && "text-blue-800"
              }`}
            />{" "}
            <span
              className={`transition-all ${
                openMenu ? "inline-block" : "hidden"
              } md:inline-block dark:text-teal-300 ${
                pathname === "/" && "text-blue-800 font-semibold"
              }`}
            >
              Homepage
            </span>
          </Link>
          <Link
            href="/about"
            title="About me page"
            className={`text-xs md:text-sm flex items-center ${
              openMenu ? "justify-start" : "justify-center"
            } md:justify-start gap-2`}
          >
            <IoPerson
              size={25}
              className={`min-w-6 dark:text-teal-300 ${
                pathname.includes("about") && "text-blue-800"
              }`}
            />{" "}
            <span
              className={`transition-all ${
                openMenu ? "inline-block" : "hidden"
              } md:inline-block dark:text-teal-300 ${
                pathname.includes("about") && "text-blue-800 font-semibold"
              }`}
            >
              About me
            </span>
          </Link>
          <Link
            href="/skills"
            title="Skills page"
            className={`text-xs md:text-sm flex items-center ${
              openMenu ? "justify-start" : "justify-center"
            } md:justify-start gap-2`}
          >
            <FaReact
              size={25}
              className={`min-w-6 dark:text-teal-300 ${
                pathname.includes("skills") && "text-blue-800"
              }`}
            />{" "}
            <span
              className={`transition-all ${
                openMenu ? "inline-block" : "hidden"
              } md:inline-block dark:text-teal-300 ${
                pathname.includes("skills") && "text-blue-800 font-semibold"
              }`}
            >
              Skills
            </span>
          </Link>
          <Link
            href="/projects"
            title="Projects page"
            className={`text-xs md:text-sm flex items-center ${
              openMenu ? "justify-start" : "justify-center"
            } md:justify-start gap-2`}
          >
            <GrProjects
              size={25}
              className={`min-w-6 dark:text-teal-300 ${
                pathname.includes("projects") && "text-blue-800"
              }`}
            />{" "}
            <span
              className={`transition-all ${
                openMenu ? "inline-block" : "hidden"
              } md:inline-block dark:text-teal-300 ${
                pathname.includes("projects") && "text-blue-800 font-semibold"
              }`}
            >
              Projects
            </span>
          </Link>
          <Link
            href="/contact"
            title="Contact page"
            className={`text-xs md:text-sm flex items-center ${
              openMenu ? "justify-start" : "justify-center"
            } md:justify-start gap-2`}
          >
            <IoMdMail
              size={25}
              className={`min-w-6 dark:text-teal-300 ${
                pathname.includes("contact") && "text-blue-800"
              }`}
            />{" "}
            <span
              className={`transition-all ${
                openMenu ? "inline-block" : "hidden"
              } md:inline-block dark:text-teal-300 ${
                pathname.includes("contact") && "text-blue-800 font-semibold"
              }`}
            >
              Contact
            </span>
          </Link>
        </nav>
        <div className="self-start md:self-center">
          <span
            className={`${
              openMenu ? "visible" : "invisible"
            } relative w-14 h-7 md:visible block`}
            onClick={toggleTheme}
          >
            <span
              className={`cursor-pointer transition-all absolute rounded-2xl top-0 right-0 left-0 bottom-0 ${
                theme === "light" ? "bg-blue-500" : "bg-neutral-500"
              } before:inline-block before:absolute before:w-5 before:h-5 ${
                theme === "light" ? "before:left-1" : "before:left-8"
              } before:bottom-1 ${
                theme === "light"
                  ? "before:bg-amber-300"
                  : "before:bg-stone-100"
              } before:rounded-full `}
            ></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
