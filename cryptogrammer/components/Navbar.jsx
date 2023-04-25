import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import images from "../assets";
import Button from "./Button";

// ? This is the MenuItems function which is used to generate the menu items for the navbar
const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return "/";
      case 1:
        return "/created-nft";
      case 2:
        return "/my-nfts";
      default:
        return "/";
    }
  };

  // ? Here i return the menu items and i'm  using the Link component from nextjs to navigate to the pages and i'm using the generateLink function to generate the links for the menu items and  using the active state to change the color of the menu items when they are active
  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && "flex-col h-full"
      }`}
    >
      {["Explore NFTs", "Listed NFTs", "My NFTs"].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-poppins
          font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3
          ${
            active === item
              ? "dark:text-white text-nft-black-1"
              : "dark:text-nft-gray-3 text-nft-gray-2"
          }`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

//! This ButtonGroup function is for the mobile view and inside this logic is for the connect button and the create button for example if the user is connected then the create button will be shown and if the user is not connected then the connect button will be shown
const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = true;

  //  ? Here i'm using the ternary operator to check if the user is connected or not and if the user is connected then the !CREATE button will be shown and if the user is not connected then the !CONNECT button will be shown
  return hasConnected ? (
    <Button
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setActive("");

        router.push("/create-nft");
      }}
    />
  ) : (
    <Button
      btnName="Connect"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {}}
    />
  );
};

const Navbar = () => {
  // i'm using the useTheme hook to change the theme of the website and i'm using the setTheme function to change the theme of the website.
  const { theme, setTheme } = useTheme();
  // i'm using the useRouter hook to navigate to the pages for example when the user clicks on the create button then the user will be navigated to the create page
  const router = useRouter();
  //  i'm using this active state to change the color of the menu items when they are active
  const [active, setActive] = useState("Explore NFTs");
  //  isOpen state is for the mobile view and if the isOpen state is true then the menu items will be shown and if the isOpen state is false then the menu items will be hidden
  const [isOpen, setIsOpen] = useState(false);

  // In here i return the navbar and i'm using the MenuItems function to generate the menu items and i'm using the ButtonGroup function to generate the connect and create buttons.
  return (
    <nav className="flexBetween border-nft-gray-1 w-full fixed z-10 p-4 flex-row border-b bg-white dark:border-nft-black-1  dark:bg-nft-dark">
    <div className="flex flex-1 flex-row justify-start">
      <Link href="/">
        <div
          className="flexCenter md:hidden cursor-pointer"
          onClick={() => {}}
        >
          <Image
            src={images.logo02}
            objectFit="contain"
            width={32}
            height={32}
            alt="logo"
          />
          <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
            CyptoKet
          </p>
        </div>
      </Link>
      <Link href="/">
        <div className="hidden md:flex" onClick={() => {}}>
          <Image
            src={images.logo02}
            objectFit="contain"
            width={32}
            height={32}
            alt="logo"
          />
        </div>
      </Link>
    </div>
    <div className="flex flex-initial flex-row justify-end">
      <div className="flex items-center mr-2">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <label
          htmlFor="checkbox"
          className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
        >
          <i className="fas fa-sun" />
          <i className="fas fa-moon" />
          <div className="w-3 h-3 absolute bg-white rounded-full ball" />
        </label>
      </div>

      <div className="md:hidden flex">
        <MenuItems active={active} setActive={setActive} />
        <div className="ml-4">
          <ButtonGroup setActive={setActive} router={router} />
        </div>
      </div>
    </div>

    <div className="hidden md:flex ml-2">
      {isOpen ? (
        <Image
          src={images.cross}
          objectFit="contain"
          width={20}
          height={20}
          alt="close"
          onClick={() => setIsOpen(false)}
          className={theme === 'light' && 'filter invert'}
        />
      ) : (
        <Image
          src={images.menu}
          objectFit="contain"
          width={25}
          height={25}
          alt="menu"
          onClick={() => setIsOpen(true)}
          className={theme === 'light' && 'filter invert'}
        />
      )}

      {isOpen && (
        <div
          className="fixed inset-0 top-65 dark:bg-nft-dark bg-white
        z-10 nav-h flex justify-between flex-col"
        >
          <div className="flex-1 p-4">
            <MenuItems active={active} setActive={setActive} isMobile />
          </div>
          <div className="p-4 border-t dark:border-nft-black-1 border-nft-grey-1">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      )}
    </div>
  </nav>
);
};
export default Navbar;
