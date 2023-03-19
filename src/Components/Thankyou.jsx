import React from "react";
import thankYou from "../assets/images/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <>
      <div className='flex flex-col space-y-5 items-center'>
        <img src={thankYou} alt='' />
        <span className='text-xl font-extrabold'>Thank You!</span>
        <p className='px-5 text-center'>
          Thank you for confirming your subcription! We hope that you have fun
          using our platform. If you ever need support,feel free to email us at
          supprt@loremgaming.com
        </p>
      </div>
    </>
  );
};

export default Thankyou;
