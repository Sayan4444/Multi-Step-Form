import React, { useState } from "react";
import Personalinfo from "./Personalinfo";
import Selectplan from "./Selectplan";
import Addons from "./Addons";
import Finishingup from "./Finishingup";
import Thankyou from "./Thankyou";
import { useSelector } from "react-redux";

const compAr = [
  <Personalinfo></Personalinfo>,
  <Selectplan></Selectplan>,
  <Addons></Addons>,
  <Finishingup></Finishingup>,
  <Thankyou></Thankyou>,
];

const Hero = () => {
  const pageNo = useSelector((state) => state.pageNoSlice.pageNo);
  return (
    <div className='fixed z-50 top-28 -translate-x-1/2 left-[50%] bg-white rounded-xl px-6 py-10 w-[90%] md:static md:-translate-x-0 md:top-0 md:py-0'>
      {compAr[pageNo - 1]}
    </div>
  );
};

export default Hero;
