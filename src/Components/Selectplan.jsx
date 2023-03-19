import React, { useState } from "react";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { setplanIndex, resetAddons } from "../Redux/personalInfoSlice";

export const planData = [
  [iconArcade, "Arcade", 9, 90],
  [iconAdvanced, "Advanced", 12, 120],
  [iconPro, "Pro", 15, 150],
];

const Selectplan = () => {
  const dispatch = useDispatch();
  const planIndex = useSelector(
    (state) => state.personalInfoSlice.data.planIndex
  );
  const [isYearly, setIsYearly] = useState(
    planIndex[1] === "yr" ? true : false
  );

  const btnClickHandler = (index) => {
    const planType = isYearly ? "yr" : "mo";
    dispatch(setplanIndex([index, planType]));
  };

  const changeHandler = () => {
    dispatch(setplanIndex([-1, ""]));
    dispatch(resetAddons());
    setIsYearly((prev) => !prev);
  };

  const switchStyle =
    "w-11 h-6 bg-blue-900 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all";

  return (
    <>
      <h1 className='text-3xl font-bold mb-2'>Select your plan</h1>
      <div className='text-gray-500'>
        You have the option of monthly or yearly billing
      </div>
      <div className='flex flex-col space-y-2 my-5 md:flex-row md:space-y-0 md:justify-between md:space-x-4'>
        {planData.map((item, index) => (
          <div
            className={`flex flex-row space-x-5 items-center border-2 rounded-xl px-5 py-3 cursor-pointer md:flex-col md:space-x-0 md:space-y-10 md:pr-16 md:items-start md:pl-3 ${
              planIndex[0] === index
                ? "bg-gray-200 border-violet-700"
                : "border-gray-300"
            }`}
            key={index}
            onClick={() => btnClickHandler(index)}
          >
            <img src={item[0]} alt='' className='' />
            <div className='text-sm'>
              <p className='font-bold'>{item[1]}</p>
              {!isYearly && <p className='text-gray-500'>${item[2]}/mo</p>}
              {isYearly && <p className='text-gray-500'>${item[3]}/yr</p>}
              {isYearly && (
                <p className='text-gray-500 -mr-16 font-bold text-xs'>
                  2 months free
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-row space-x-4 justify-center items-center py-3 bg-gray-100 rounded-xl'>
        <span className={`${isYearly ? "text-gray-400" : "font-bold"}`}>
          Montly
        </span>
        <label className='relative inline-flex items-center cursor-pointer group'>
          <input
            type='checkbox'
            value=''
            className='sr-only peer'
            checked={isYearly}
            onChange={changeHandler}
          />
          <div className={switchStyle}></div>
        </label>
        <span className={`${!isYearly ? "text-gray-400" : "font-bold"}`}>
          Yearly
        </span>
      </div>
    </>
  );
};

export default Selectplan;
