'use client'

import Head from "next/head";
import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";


import Admin from "../welcome/Admin/page";
import Courses from "../welcome/Courses/page";
import Departments from "../welcome/Departments/page";
import Register from "../welcome/Register/page";
import Student from "../welcome/Student/page";


import { BsArrowLeftShort } from "react-icons/bs";
import { FaPersonShelter } from "react-icons/fa6";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { SiCrowdsource } from "react-icons/si";

import { FcFactory, FcLandscape } from "react-icons/fc";
import { RiDashboardFill } from "react-icons/ri";
import Dashboard from "../welcome/Dashboard/page";
import Logout from "../welcome/Logout/page";

import Business from "../welcome/Business/CreateBusiness";

// ===================


const Page = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("");
    const [currentPage, setCurrentPage] = useState("");
    const [open, setOpen] = useState(true);
    //menu items

    const Menus = [
      { title: "Dashboard" },
      
        { title: "Business", icon: <FaPersonShelter /> },

        { title: "Admin", icon: <FaPersonShelter /> },
        { title: "Courses", icon: <MdOutlineRealEstateAgent /> },
        { title: "Departments", icon: <SiCrowdsource /> },
        { title: "Register", icon: < FcLandscape /> },
        { title: "Student", icon: < FcFactory /> },
        
       
        { title: "Logout", icon: <AiOutlineLogin /> },
    ]

        const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
      
        const toggleProfileDropdown = () => {
          setProfileDropdownOpen(!isProfileDropdownOpen);
        };
    return (
        <>
  {/* Header */}
  <div className="bg-blue-950 fixed w-full top-0 z-10 ">
        <Head>
          {/* Add your head content here */}
        </Head>
        <div className="flex p-2 justify-end items-center pr-4">
         
          {/* Profile Logo */}
          <div
            className="bg-white w-12 h-12 rounded-full mr-4 ms-4 cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            <img
              src="/profile.jpg"
              alt="Profile Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          {/* Profile Options */}
          {isProfileDropdownOpen && (
             <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-md">
             <p className="cursor-pointer hover:underline p-2">
               Profile Settings
             </p>
             <p className="cursor-pointer hover:underline p-2">Logout</p>
           </div>
          )}
        </div>
      </div>
      {/* Header end */}
            <div className="flex bg-white">


                {/* Sidebar */}
                <div
                    className={`bg-blue-950
       text-white
        h-screen
         p-4 pt-8 mt-6 pr-5
          ${open ? "w-72" : "w-20"} 
          duration-300 relative`}>

                    <BsArrowLeftShort
                        className={`bg-blue-950
                          text-blue
                           text-3xl  
                           rounded-full mt-2
                           absolute -right-3 top-9  
                           border border-blue 
                                   cursor-pointer 
                                                ${!open && "rotate-180"} `}
                                               onClick={() => setOpen(!open)} />
  {/* sidebar logo */}
  <div className="inline-flex">
                        <img
                            src="/Devlogix.png"
                            alt="Profile Logo"
                            className="w-full h-full rounded-full object-cover mt-6"
                        />


                    </div>

                    {/* sidebar menu */}
                    <ul className=" pt-2">
                        {Menus.map((menu) => (
                            <>
                                <li
                                    key={menu.title}
                                    onClick={() => {
                                        setSelectedMenuItem(menu.title);
                                        setCurrentPage(menu.title);
                                    }}
                                    className={`text-sm text-gray-300 flex items-center gap-x-4 
                cursor-pointer p-2 hover:bg-light-white 
                rounded-md 
                 ${selectedMenuItem === menu.title ? "bg-black text-white" : ""
                                        }`}
                                >
                                  {/* for icons of sidebar */}
                                  <span className="text-2xl block  float-left">
                                        {menu.icon ? menu.icon : <RiDashboardFill />}
                                    </span>

                                    <span className={`text-base font-medium 
                flex-1 duration-200
                   ${!open && "hidden"}`}>
                                        {menu.title}</span>
                                </li>
                            </>
                        ))}

                    </ul>
                </div>


                {/* Home page content */}
                <div className="p-7 ">
                  {/* <Dashboard/> */}
                   

                    {currentPage === "Dashboard" && <Dashboard />}
        {currentPage === "Admin" && <Admin />}
        {currentPage === "Courses" && <Courses />}
        
        {currentPage === "Register" && <Register />}
        {currentPage === "Student" && <Student />}
        {currentPage === "Departments" && <Departments />}
        {currentPage === "Business" && <Business/>}


        {currentPage === "Logout" && <Logout />}

                        </div>
            </div>

        </>

    );




};

export default Page;   