"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster"
import "./animation.css"

import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const navLinks = document.querySelectorAll<HTMLAnchorElement>("header nav a");
      const menuIcon = document.querySelector<HTMLElement>("#menu-icon");
      const navbar = document.querySelector<HTMLElement>(".navbar");

      const handleMenuToggle = () => {
        menuIcon?.classList.toggle("bx-x");
        navbar?.classList.toggle("active");
      };

      const handleScroll = () => {
        const header = document.querySelector<HTMLElement>("header");
        const top = window.scrollY

        sections.forEach((sec) => {
          const offset = sec.offsetTop - 100;
          const height = sec.offsetHeight;
          const id = sec.getAttribute("id");

          if (id && top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              const activeLink = document.querySelector<HTMLAnchorElement>(
                `header nav a[href*='${id}']`
              );
              activeLink?.classList.add("active");
            });
          }
        });

        header?.classList.toggle("sticky", top > 100);

        menuIcon?.classList.remove("bx-x");
        navbar?.classList.remove("active");
      };

      menuIcon?.addEventListener("click", handleMenuToggle);
      window.addEventListener("scroll", handleScroll);

      return () => {
        menuIcon?.removeEventListener("click", handleMenuToggle);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <header className="header w-full h-28 p-3 flex flex-row items-center justify-around bg-[#e2e8f0]">
            <Link href={`/`}><img className="pr-3 max-lt:w-[160px] max-lm:w-[145px] max-mm:w-[130px] max-st:w-[115px]" src="/site-logo.svg" alt="img" /></Link>
          <nav className="navbar flex flex-row items-center gap-5 max-lg:gap-4 max-lt:gap-3 ">
            <a href={`/`} className="hover:text-[#3F83F8] font-medium cursor-pointer max-lt:text-sm">Home</a>
            <a href={`/tecnologySection`} className="hover:text-[#3F83F8] font-medium cursor-pointer max-lt:text-sm">Tecnology</a>
            <a href={`/gadgetSection`} id="/" className="hover:text-[#3F83F8] font-medium cursor-pointer max-lt:text-sm">Gadget</a>
            <a href={`/gameSection`} className="hover:text-[#3F83F8] font-medium cursor-pointer max-lt:text-sm">Games</a>
            <a href={`/appSection`} className="hover:text-[#3F83F8] font-medium cursor-pointer max-lt:text-sm">Apps</a>
            <a href={`/podcastSection`} className="hover:text-[#3F83F8] font-medium cursor-pointer max-lt:text-sm">Podcasts</a>
            <span className="active-nav"></span>  
          </nav>
          <div className="flex flex-row items-center gap-5 max-lg:gap-4 max-lt:gap-3 max-lm:gap-2">
          <Link href={`signIn`} className="max-lm:w-[80px] max-mm:w-[64px] max-mm:px-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm max-lt:text-xs px-5 py-2.5 text-center">Sign In</Link>
          <Link href={`signUp`} className="max-lm:w-[90px] max-mm:w-[64px] max-st:mr-2 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm max-lt:text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="max-lm:w-[90px] max-mm:w-[83px] relative px-5 max-mm:px-2 py-2.5 transition-all ease-in duration-75 bg-white text-[#1A56DB] hover:text-white rounded-md max-lt:text-xs group-hover:bg-opacity-0">Sign Up</span>
          </Link>
          </div>
          <div className="hidden max-mt:block bx bx-menu" id="menu-icon">
            <img className="bx bx-menu" id="menu-icon" src="/threelines.svg" alt="threeline" width={40} height={40}/>
          </div> 
        </header> */}
        <header className="header">
             <div className="w-full bg-[#e2e8f0] h-[100px] max-lm:h-[90px] max-mm:h-[80px] animation-up">
               <div className="h-full flex flex-row items-center justify-around p-[16px] gap-[12px] max-sm:justify-between">
               <Link href={`/`}><img className="pr-3 max-lt:w-[160px] max-lm:w-[145px] max-mm:w-[130px] max-st:w-[115px]" src="/site-logo.svg" alt="img" /></Link>
                   <nav className="navbar flex flex-row items-center gap-5 max-lg:gap-4 max-lt:gap-3">
                   <a href={`/`} className="hover:text-purple-700 font-medium cursor-pointer max-lt:text-sm">Home</a>
            <a href={`/tecnologySection`} className="hover:text-purple-700 font-medium cursor-pointer max-lt:text-sm">Tecnology</a>
            <a href={`/gadgetSection`} id="/" className="hover:text-purple-700 font-medium cursor-pointer max-lt:text-sm">Gadget</a>
            <a href={`/gameSection`} className="hover:text-purple-700 font-medium cursor-pointer max-lt:text-sm">Games</a>
            <a href={`/appSection`} className="hover:text-purple-700 font-medium cursor-pointer max-lt:text-sm">Apps</a>
            <a href={`/podcastSection`} className="hover:text-purple-700 font-medium cursor-pointer max-lt:text-sm">Podcasts</a>
                     <span className="active-nav"></span>           
                   </nav>
                   <section className="flex flex-row items-center gap-5 max-lg:gap-4 max-lt:gap-3 max-lm:gap-2">
          <Link href={`signIn`} className="max-lm:w-[80px] max-mm:w-[64px] max-mm:px-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm max-lt:text-xs px-5 py-2.5 text-center">Sign In</Link>
          <Link href={`signUp`} className="max-lm:w-[90px] max-mm:w-[64px] max-st:mr-2 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm max-lt:text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="max-lm:w-[90px] max-mm:w-[83px] relative px-5 max-mm:px-2 py-2.5 transition-all ease-in duration-75 bg-white text-[#1A56DB] hover:text-white rounded-md max-lt:text-xs group-hover:bg-opacity-0">Sign Up</span>
          </Link>
          </section>
          <div className="hidden max-mt:block bx bx-menu" id="menu-icon">
                     <img className="bx bx-menu" id="menu-icon" src="/threelines.svg" alt="threeline" width={40} height={40}/>
                   </div>
             
                   
                 </div>
               </div>
          </header>
        

        
        {children}
              
      <div className="mb-12">
        <div className="relative isolate overflow-hidden bg-[#0c4a6e] py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-4xl font-bold tracking-tight text-white max-xl:text-3xl">Subscribe to our newsletter</h2>
                <p className="mt-4 text-lg text-white font-medium max-xl:text-base">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
               <div className="mt-6 flex max-w-md gap-x-4">
                 <label form="email-address" className="sr-only">Email address</label>
                 <input id="email-address" name="email" type="email" autoComplete="email" required className="border border-white min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" placeholder="Enter your email"/>
                 <button type="submit" className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
               </div>
              </div>
             <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
               <div className="flex flex-col items-start">
                 <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                   <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                     <path strokeLinecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                   </svg>
                 </div>
                 <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                 <dd className="mt-2 text-base/7 text-white">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</dd>
               </div>
               <div className="flex flex-col items-start">
                 <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                   <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                   </svg>
                 </div>
                 <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                 <dd className="mt-2 text-base/7 text-white">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</dd>
               </div>
             </dl>
           </div>
         </div>
       </div>
     </div>
        <footer className="w-full">
<div className="mx-auto max-w-7xl">
{/* <!--Grid--> */}
<div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8 py-10 max-lt:justify-items-center">
<div className="col-span-full mb-10 2xl:col-span-2 lg:mb-0 flex items-center flex-col 2xl:items-start">
<img className="pr-3" src="/site-logo.svg" alt="img" />
<div className="flex items-center justify-between w-full max-w-xl mx-auto flex-col  2xl:flex-col 2xl:items-start">
  <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
  <Link href={`/contactUs`} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Us</Link>
</div>
</div>
{/* <!--End Col--> */}
<div className="lg:mx-auto text-left">
<h4 className="text-lg text-gray-900 font-medium mb-7">Tech Wire</h4>
<ul className="text-sm  transition-all duration-500 ">
  <li className="mb-6">
    <a href="javascript:;" className="hover:text-purple-700 text-gray-700">Home</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">About</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Gadgets</a>
  </li>
  <li>
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Features</a>
  </li>
</ul>
</div>
{/* <!--End Col--> */}
<div className="lg:mx-auto text-left">
<h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
<ul className="text-sm  transition-all duration-500">
  <li className="mb-6">
    <a href="javascript:;" className="hover:text-purple-700 text-gray-700">Podcasts</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Assets</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Blocks</a>
  </li>
  <li>
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Library</a>
  </li>
</ul>
</div>
{/* <!--End Col--> */}
<div className="lg:mx-auto text-left">
<h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
<ul className="text-sm  transition-all duration-500">
  <li className="mb-6">
    <a href="javascript:;" className="hover:text-purple-700 text-gray-700">FAQs</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Quick Start</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Documentation</a>
  </li>
  <li>
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">User Guide</a>
  </li>
</ul>
</div>
{/* <!--End Col--> */}
<div className="lg:mx-auto text-left">
<h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
<ul className="text-sm  transition-all duration-500">
  <li className="mb-6">
    <a href="javascript:;" className="hover:text-purple-700 text-gray-700">News</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Tips & Tricks</a>
  </li>
  <li className="mb-6">
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">New Updates</a>
  </li>
  <li>Name
    <a href="javascript:;" className=" hover:text-purple-700 text-gray-700">Events</a>
  </li>
</ul>
</div>
</div>
{/* <!--Grid--> */}
<div className="py-7 border-t border-gray-200">
<div className="flex items-center justify-center max-xl:justify-around flex-col lg:justify-between lg:flex-row">
<span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">TechWire</a> 2024, All rights reserved.</span>
<div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
  <Link href="https://www.linkedin.com/in/syed-fahad-ali-b1642b258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#111827]">
    <svg className=" text-white" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Vector" d="M17.5667 14.7386L24.072 7.33936H22.5305L16.8819 13.764L12.3704 7.33936H7.16699L13.9892 17.0546L7.16699 24.8139H8.70862L14.6736 18.0292L19.4381 24.8139H24.6415L17.5663 14.7386H17.5667ZM15.4552 17.1402L14.764 16.1728L9.2641 8.47491H11.632L16.0704 14.6873L16.7617 15.6548L22.5312 23.73H20.1633L15.4552 17.1406V17.1402Z" fill="currentColor" />
    </svg>
  </Link>
  <Link href="https://www.instagram.com/syed._fahad__" target="_blank" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#db2777]">
    <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z" fill="currentColor" />
    </svg>
  </Link>
  <Link href="https://www.linkedin.com/in/syed-fahad-ali-b1642b258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#0284c7]">
    <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor" />
    </svg>
  </Link>
  <Link href="https://youtube.com/@fahad3317?si=LVa7-zzCi_mslDvQ" target="_blank" className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-[#b91c1c]">
    <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9346 1.13529C14.5684 1.30645 15.0665 1.80588 15.2349 2.43896C15.5413 3.58788 15.5413 5.98654 15.5413 5.98654C15.5413 5.98654 15.5413 8.3852 15.2349 9.53412C15.0642 10.1695 14.5661 10.669 13.9346 10.8378C12.7886 11.1449 8.19058 11.1449 8.19058 11.1449C8.19058 11.1449 3.59491 11.1449 2.44657 10.8378C1.81277 10.6666 1.31461 10.1672 1.14622 9.53412C0.839844 8.3852 0.839844 5.98654 0.839844 5.98654C0.839844 5.98654 0.839844 3.58788 1.14622 2.43896C1.31695 1.80353 1.81511 1.30411 2.44657 1.13529C3.59491 0.828125 8.19058 0.828125 8.19058 0.828125C8.19058 0.828125 12.7886 0.828125 13.9346 1.13529ZM10.541 5.98654L6.72178 8.19762V3.77545L10.541 5.98654Z" fill="currentColor" />
    </svg>
  </Link>
</div>
</div>
</div>
</div>
</footer>
<Toaster />
      </body>
    </html>
  );
}
