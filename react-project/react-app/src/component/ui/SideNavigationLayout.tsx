import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { PiFolderStarFill, PiLinkSimpleBold } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { HiClipboardDocumentList, HiMiniQrCode } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";


type NavigationItem = {
  path: string;
  label: string;
  icon: IconType;
}

const Header = () => {
  return (
    <div className="header flex justify-between items-center p-4 ">
     
    </div>
  );
};

const SideNavigationLayout = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggleClick = () => {
    setOpen(!open);
  };


  const navigationItems: NavigationItem[] = [
    { path: '/home', label: 'Home', icon: AiFillHome },
    { path: '/liveSong', label: 'Link', icon: PiLinkSimpleBold },
    { path: '/01', label: 'QR Code', icon: HiMiniQrCode },
    { path: '/02', label: 'Documents', icon: HiClipboardDocumentList },
    { path: '/03', label: 'Files', icon: PiFolderStarFill },
    { path: '/04', label: 'Custom Links', icon: PiLinkSimpleBold },
    { path: '/03', label: 'Settings', icon: FiSettings },
  ];

  const handleMobileItemClick = () => {
    // Close the navigation menu when a mobile item is clicked
    setOpen(false);
  };

  return (
    <div className="">
    <div className={`app flex flex-col ${open ? 'open' : ''}`}>
    <div className='flex border-b border-gray-300'>
       <div className="header flex justify-between items-center p-4 ">
            <button
              className="toggle-button text-2xl bg-transparent  cursor-pointer text-gray-500"
              onClick={handleToggleClick}
            >
              ☰
            </button>
          </div>
        <Header />
       </div>
       <div className='flex'>
       <div className=" text-white border-r border-t h-screen flex flex-col gap-8 border-divider">
            <ul className={`p-0 m-0  ${open ? 'block' : 'hidden md:block'}`}>
            {navigationItems.map((item, index) => (
              <li key={index} className="text-blue-500 ">
                <Link
                  to={item.path}
                  onClick={handleMobileItemClick}
                  className={`${
                    location.pathname === item.path ? 'bg-slate-300' : ''
                  } flex items-center p-4 transition duration-200 hover:bg-white`}
                >
                  <span className="text-[25px] font-bold flex flex-col gap-5"><item.icon /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
         <div className="main-content flex-grow transition duration-200">
        {children}
      </div>
       
       </div>
      </div>
    </div>
  );
};

export default SideNavigationLayout;