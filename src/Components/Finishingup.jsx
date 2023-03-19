import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addonData } from "./Addons";
import { planData } from "./Selectplan";
import { setPage } from "../Redux/pageNoSlice";

const Finishingup = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setPage(2));
  };
  const planIndex = useSelector(
    (state) => state.personalInfoSlice.data.planIndex
  );
  const addonsIndex = useSelector(
    (state) => state.personalInfoSlice.data.addonsIndex
  );
  const isMonthly = planIndex[1] === "mo";
  const selectedPlan = planData[planIndex[0]];
  let total = 0;
  if (isMonthly) {
    if (addonsIndex.length !== 0) {
      addonsIndex.forEach((item) => {
        const addonAr = addonData[item];
        total = total + addonAr[2];
      });
    }
    total = total + selectedPlan[2];
  } else {
    if (addonsIndex.length !== 0) {
      addonsIndex.forEach((item) => {
        const addonAr = addonData[item];
        total = total + addonAr[3];
      });
    }
    total = total + selectedPlan[3];
  }
  return (
    <>
      <h1 className='text-3xl font-bold mb-2'>Finishing up</h1>
      <div className='text-gray-500'>
        Double-check everything looks OK before confirming.
      </div>
      <div className='bg-gray-100 flex flex-col space-y-3 py-5 px-3 rounded-xl my-6'>
        <div className='flex flex-row justify-between items-center border-b-2 pb-3 border-gray-400'>
          <div>
            {isMonthly && (
              <p className='font-bold'>{selectedPlan[1]}(Monthly)</p>
            )}
            {!isMonthly && (
              <p className='font-bold'>{selectedPlan[1]}(Yearly)</p>
            )}
            <p
              className='text-xs cursor-pointer mt-1 hover:underline hover:text-violet-400 transition-all duration-300'
              onClick={clickHandler}
            >
              Change
            </p>
            <span className='line-through w-full'></span>
          </div>
          <div className='font-bold'>
            {isMonthly && `$${selectedPlan[2]}/mo`}
            {!isMonthly && `$${selectedPlan[3]}/yr`}
          </div>
        </div>
        {addonsIndex.map((item) => (
          <div className='flex flex-row justify-between' key={item}>
            <span>{addonData[item][0]}</span>
            {isMonthly && <span>+${addonData[item][2]}/mo</span>}
            {!isMonthly && <span>+${addonData[item][3]}/yr</span>}
          </div>
        ))}
      </div>
      {isMonthly && (
        <div className='flex flex-row justify-between px-1'>
          <span>Total (per month)</span>
          <span className='text-lg font-bold text-blue-800'>+${total}/mo</span>
        </div>
      )}
      {!isMonthly && (
        <div className='flex flex-row justify-between px-1'>
          <span>Total (per year)</span>
          <span className='text-lg font-bold text-blue-800'>+${total}/yr</span>
        </div>
      )}
    </>
  );
};

export default Finishingup;
