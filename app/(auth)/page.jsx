"use client";

import "../globals.css";
import React, { useEffect, useState } from "react";
import { FaSms, FaBeer, FaRegFilePdf, FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiMonitorFill } from "react-icons/pi";
import { BiSolidNote, BiSolidBadgeDollar, BiDevices } from "react-icons/bi";
import {
  BsFillImageFill,
  BsFillCloudCheckFill,
  BsFillPlayCircleFill,
  BsFillFilePdfFill,
  BsDatabaseFillCheck,
} from "react-icons/bs";
import { FcOvertime } from "react-icons/fc";
import { AiFillPieChart } from "react-icons/ai";
import ReactPlayer from "react-player/youtube";
import SimpleImageSlider from "react-simple-image-slider";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// modal style
const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "translate(-50%, -50%)",
  width: 400,

  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};
const ReactPlayerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function Page() {
  // modal states
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // images for silder
  const images = [
    { url: "/assets/feature-image.png" },
    { url: "assets/feature-image1.png" },
    { url: "assets/feature-image2.png" },
  ];

  // styles of slieder
  const customStyles = {
    backgroundColor: "transparent",
    backgroundSize: "contain ",
    backgroundRepeat: "norepeat ",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='relative text-white px-4 py-4 flex justify-between items-center bg-sky-500'>
        <div className='text-xl'>DenistPortal</div>
        <div className={`lg:hidden navbar-burger `}>
          <button
            className='navbar-burger flex items-center text-white p-3'
            onClick={toggleMenu}
          >
            <svg
              className='block h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <ul className='hidden absolute top-1/2 text-white left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6'>
          <li>
            <Link className='text-xl text-white hover:font-bold' href='#'>
              Home
            </Link>
          </li>

          <li>
            <Link className='text-xl  hover:font-bold' href='#'>
              About Us
            </Link>
          </li>

          <li>
            <Link className='text-xl text-white hover:font-bold' href='#'>
              Services
            </Link>
          </li>

          <li>
            <Link className='text-xl text-white hover:font-bold' href='#'>
              Pricing
            </Link>
          </li>

          <li>
            <Link className='text-xl text-white hover:font-bold' href='#'>
              Contact
            </Link>
          </li>
        </ul>
        <Link
          className='hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200'
          href='/sign-in'
        >
          Sign In
        </Link>
        <Link
          className='hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200'
          href='/sign-up'
        >
          Sign up
        </Link>
      </nav>
      <div
        className={`navbar-menu relative text-white z-50 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'></div>
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto'>
          <div className='flex items-center mb-8'>
            <a className='mr-auto text-3xl font-bold leading-none' href='#'>
              <svg className='h-12' alt='logo' viewBox='0 0 10240 10240'>
                <path
                  xmlns='http://www.w3.org/2000/svg'
                  d='M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z'
                ></path>
              </svg>
            </a>
            <button className='navbar-close' onClick={toggleMenu}>
              <svg
                className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='#'
                >
                  Home
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='#'
                >
                  About Us
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='#'
                >
                  Services
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='#'
                >
                  Pricing
                </a>
              </li>
              <li className='mb-1'>
                <a
                  className='block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded'
                  href='#'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='mt-auto'>
            <div className='pt-6'>
              <Link
                className='block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl'
                href='/sign-in'
              >
                Sign in
              </Link>
              <Link
                className='block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl'
                href='/sign-up'
              >
                Sign Up
              </Link>
            </div>
            <p className='my-4 text-xs text-center text-gray-400'>
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
      <div className='section1 bg-slate-300 dark:bg-gray-800 dark:text-gray-100 '>
        <div className='container  flex flex-col justify-between p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
          <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
            <h1 className='text-2xl font-semibold leading-14 text-white sm:text-6xl'>
              DESIGNED TO KEEP THINGS SIMPLE
            </h1>
            <p className='mt-6 mb-8 text-lg sm:mb-12'>
              We want to help you manage your patient information. Instead of
              using index cards, we have created an app that you can use on
              different devices.
            </p>

            <Link
              href='/'
              className='px-8 py-3 text-lg   text-center font-bold border-white border-solid border-2 rounded-md text-sky-500 bg-white'
            >
              Use it On Your Browser
            </Link>
          </div>
          <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
            <Image
              src='/assets/devices.png'
              height={600}
              width={600}
              alt='devices'
              className='object-contain h-72 pr-0   sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
            />
          </div>
        </div>
      </div>
      <div className='section2 pt-4  bg-white  '>
        <div className='main-heading'>
          <h2 className='pt-5'>DentistPortal Features</h2>
          <p className=''>
            Designed with ease of use in mind, you will be up and running with
            DentitPortal in a few minutes! We have included the features that
            you need the most:
          </p>
        </div>
        <div className=' container flex items-center justify-center mt-[-50px]   gap-2 min-h-screen w-full'>
          <div className='slider  mr-8 '>
            <SimpleImageSlider
              width={300}
              height={500}
              images={images}
              showBullets={false}
              showNavs={false}
              style={customStyles}
              autoPlay={true}
            />
          </div>
          <div className='sub-container '>
            <div className='box flex flex-row items-center justify-center cursor-pointer '>
              <div className='bg-sky-500 text-2xl mb-2 text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
                <BiSolidNote />
              </div>
              <div className='flex flex-col flex-wrap pl-4'>
                <span className='mb-1 text-xl text-sky-500'>
                  PATIENT INFORMATION
                </span>
                <p className='text-gray-600 font-light leading-6'>
                  Keep track of your patient{" "}
                </p>
                <p className='text-gray-600 font-light leading-6'>
                  information.
                </p>
              </div>
            </div>

            <div className='box flex flex-row items-center justify-center cursor-pointer '>
              <div className='bg-sky-500 mb-2 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
                <BsFillImageFill />
              </div>
              <div className='flex flex-col flex-wrap pl-4'>
                <span className='mb-1 text-xl text-sky-500'>ATTACK IMAGE</span>
                <p className='text-gray-600 font-light leading-6'>
                  Attach image to your patients record{" "}
                </p>
              </div>
            </div>

            <div className='box flex flex-row items-center justify-center cursor-pointer '>
              <div className='bg-sky-500 mb-2 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
                <FaSms />
              </div>
              <div className='flex flex-col flex-wrap pl-4'>
                <span className='mb-1 text-xl text-sky-500'>
                  CALL & SEND SMS
                </span>
                <p className='text-gray-600 font-light leading-6'>
                  call and send sms to your patients in one click.{" "}
                </p>
              </div>
            </div>

            <div className='box flex flex-row items-center justify-center cursor-pointer '>
              <div className='bg-sky-500 mb-2 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
                <BiSolidBadgeDollar />
              </div>
              <div className='flex flex-col flex-wrap pl-4'>
                <span className='mb-1 text-xl text-sky-500'>
                  {" "}
                  PAYMENT TRANSACTIONS
                </span>
                <p className='text-gray-600 font-light leading-6'> </p>
                keep track of your patient payments.
              </div>
            </div>

            <div className='box flex flex-row items-center justify-center cursor-pointer '>
              <div className='bg-sky-500 mb-2 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
                <FcOvertime />
              </div>
              <div className='flex flex-col flex-wrap pl-4'>
                <span className='mb-1 text-xl text-sky-500'>APPOINTMENTS</span>
                <p className='text-gray-600 font-light leading-6'>
                  keep track of your appointments.{" "}
                </p>
              </div>
            </div>

            <div className='box flex flex-row items-center justify-center cursor-pointer '>
              <div className='bg-sky-500 text-2xl mb-2 text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
                <AiFillPieChart />
              </div>
              <div className='flex flex-col flex-wrap pl-4'>
                <span className='mb-1 text-xl text-sky-500'>CHARTS</span>
                <p className='text-gray-600 font-light leading-6'>
                  Dental chart that is very easy to use.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section3 bg-white w-full '>
        <div className='main-heading'>
          <h2>OTHER EXCELLENT FEATURES</h2>
        </div>
        <div className='container'>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <FaSms />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                sms sending
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full  text-gray-500'>
                Send SMS to your upcoming patient appointments.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <BsFillCloudCheckFill />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                DATA SYNCING
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full  text-gray-500'>
                Data are synced and accessible from different platforms.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <PiMonitorFill />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                EXPENSES MONITORING
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full leading-8 text-gray-500'>
                Track your daily, weekly and monthly expenses in your clinic.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <BsFillFilePdfFill />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                PATIENT INFO TO PDF
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full leading-8 text-gray-500'>
                Create a copy of your patient information in PDF.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <BiDevices />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                MULTI-PLATFORM
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full leading-8 text-gray-500'>
                Access your data from your computer through a web browser and
                other phone or tablet.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <FaRegFilePdf />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                PRESCRIPTION PLAN
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full leading-8 text-gray-500'>
                Create, print and email your prescriptions to your patients in
                an instant.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <FaUsers />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                MULTI-DENTIST
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full leading-8 text-gray-500'>
                Add up to 4 dentists as user & assign them to your patient
                appointments.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <div className='grid items-center mb-2 justify-center text-white w-20 h-20 text-3xl bg-sky-500 rounded-full'>
              <BsDatabaseFillCheck />
            </div>
            <div className='text-center grid justify-center items-center'>
              <span className='font-normal text-lg relative mb-70px uppercase'>
                BACKUP & RESTORE
              </span>
              <p className='w-550px mx-auto mb-100 max-w-full leading-8 text-gray-500'>
                Secured database because you can backup & restore your patient
                data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='section4 w-full h-[400px] text-center flex flex-col items-center font-semibold  justify-center text-white  text-4xl'>
        <p>Watch our video to know</p> <p>more about the app</p>{" "}
        <div className='text-box  flex ho justify-center mt-3'>
          <button className='hover:text-red-500 text-7xl' onClick={handleOpen}>
            <BsFillPlayCircleFill />
          </button>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <box sx={style}>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=NweTwht6VAI'
              controls={true}
              width='300px'
              height='200px'
              // light={true}

              style={ReactPlayerStyle}
            />
          </box>
        </Modal>
      </div>
      <div className='section5 bg-white'>
        <Testimonials />
      </div>
      <section className=' p-5 bg-white'>
        <div className='flex flex-wrap'>
          <div className='mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'>
            <h2 className='mb-6 text-3xl font-bold'>Contact us</h2>
            <p className='mb-6 text-neutral-500 dark:text-neutral-300'>
              Do you have a comment, a suggestion or in need of help? We are
              here to listen!
            </p>

            <p className='mb-2 text-neutral-500 dark:text-neutral-300'>
              ahmedebrahimz930@gmail.com
            </p>
          </div>
          <div className=' w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'>
            <form>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  type='text'
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                  id='exampleInput90'
                  placeholder='Name'
                />
                <label className='pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                  Name
                </label>
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <input
                  type='email'
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                  id='exampleInput91'
                  placeholder='Email address'
                />
                <label className='pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                  Email address
                </label>
              </div>
              <div className='relative mb-6' data-te-input-wrapper-init>
                <textarea
                  className='peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  placeholder='Your message'
                ></textarea>
                <label className='pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'>
                  Message
                </label>
              </div>
              <div className='mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex'>
                <input
                  className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type='checkbox'
                  value=''
                  id='exampleCheck96'
                />
                <label className='inline-block pl-[0.15rem] hover:cursor-pointer'>
                  Send me a copy of this message
                </label>
              </div>
              <button
                type='button'
                data-te-ripple-init
                data-te-ripple-color='light'
                className='mb-6  inline-block w-full rounded bg-sky-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className='flex bg-sky-500 flex-col items-center text-center text-white'>
        <div className='w-full p-4 text-center'>
          © 2023 Copyright:
          <span className='text-white'>DentistPortal</span>
        </div>
      </div>
    </div>
  );
}
