import React from "react";
import { useSelector } from "react-redux";
import bgSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import bgSidebarDesktop from "../assets/images/bg-sidebar-desktop.svg";
import Navigationbtn from "./Navigationbtn";
import Hero from "./Hero";

const Background = () => {
  const numberingClass =
    "text-white border-2 font-bold border-white rounded-[50%] px-3 py-1";
  const pageNo = useSelector((state) => state.pageNoSlice.pageNo);

  let bubbles = [
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ];
  if (pageNo <= 4) {
    bubbles[pageNo - 1].active = true;
  }

  const bubbleText = [
    ["STEP 1", "YOUR INFO"],
    ["STEP 2", "SELECT PLAN"],
    ["STEP 3", "ADD-ONS"],
    ["STEP 4", "SUMMARY"],
  ];

  return (
    <>
      {/* Mobile Version */}
      <div className='h-screen relative bg-white md:hidden'>
        <img src={bgSidebarMobile} alt='' className='w-screen' />
        <div className='absolute top-[5%] left-[24%] flex flex-row space-x-4 md:space-x-0 '>
          {bubbles.map((item) => (
            <span
              className={`${numberingClass} ${
                item.active ? "bg-[#bce2ff] border-[#bce2ff] text-black" : ""
              }`}
              key={item.id}
            >
              {item.id}
            </span>
          ))}
        </div>
        <div className='h-[58%] bg-[#eef5ff]'></div>
        <Navigationbtn></Navigationbtn>
      </div>
      {/* Desktop Version */}
      <div className='mx-[5%] my-[4%] px-[18%] py-[3%] bg-blue-100 rounded-xl hidden md:block'>
        <div className='flex flex-row p-3 bg-white rounded-xl space-x-3 h-[36rem] relative'>
          <img src={bgSidebarDesktop} alt='' className='h-full' />
          <div className='absolute flex flex-col space-y-4 left-10 top-10'>
            {bubbles.map((item) => (
              <div
                key={item.id}
                className='flex flex-row items-center space-x-4'
              >
                <span
                  className={`${numberingClass} ${
                    item.active
                      ? "bg-[#bce2ff] border-[#bce2ff] text-black"
                      : ""
                  }`}
                >
                  {item.id}
                </span>
                <div>
                  <p className='text-gray-400 font-bold'>
                    {bubbleText[item.id - 1][0]}
                  </p>
                  <p className='text-white'>{bubbleText[item.id - 1][1]}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-col justify-between pt-10 w-full'>
            <Hero />
            <Navigationbtn></Navigationbtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
