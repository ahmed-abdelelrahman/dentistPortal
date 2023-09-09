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
import { UserButton } from "@clerk/nextjs";
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
  const [open, setOpen] = React.useState(false);
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

  return (
    <main>
      <section className='section1 bg-slate-300 dark:bg-gray-800 dark:text-gray-100 '>
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
      </section>
      <section className='section2 pt-4  bg-white  '>
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
              <div className='bg-sky-500 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
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
              <div className='bg-sky-500 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
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
              <div className='bg-sky-500  text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
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
              <div className='bg-sky-500 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
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
              <div className='bg-sky-500 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
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
              <div className='bg-sky-500 text-2xl text-white grid items-center rounded-md justify-center w-12 h-12 hover:rounded-full '>
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
      </section>
      <section className='section3 bg-white w-full '>
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
      </section>

      <section className='section4 w-full h-[400px] text-center flex flex-col items-center font-semibold  justify-center text-white  text-4xl'>
        <p>Watch our video to know</p> <p>more about the app</p>{" "}
        <div className='text-box  flex ho justify-center mt-3'>
          <button className='hover:text-red-500 text-7xl' onClick={handleOpen}>
            <BsFillPlayCircleFill />
          </button>
        </div>
      </section>
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
      <section className='section5 bg-white'>
        <Testimonials />
      </section>
      <section className='section5 flex gap-10 bg-white h-[200px] w-full p-10'>
        <div className='flex flex-col'>
          <div>
            <span className='font-bold text-3xl mb-4'>Connect with us</span>
            <p className='text-gray-600 text-lg'>
              Do you have a comment, a suggestion or in need of help?
              <p>We are here to listen!</p>
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold text-3xl mb-4'>Get in touch now!</span>
          <div className='flex items-center justify-between'>
            <MdEmail className='text-2xl mr-2' />
            <span className='text-gray-600 text-lg'>
              ahmedebrahimz930@gmail.com
            </span>
          </div>
        </div>
      </section>
      <section className='flex p-3 flex-col items-center justify-center w-full h-[100px] bg-sky-500 text-white'>
        <div className='font-semibold text-lg mb-4 pt-6'>
          Copyright © 2023 DentistPortal By Ahmed Abdelrahman Ebrahim
        </div>
        <div className='font-semibold text-md mb-4'>
          Terms & Conditions | Privacy Policy | Data & Security
        </div>
      </section>
    </main>
  );
}
