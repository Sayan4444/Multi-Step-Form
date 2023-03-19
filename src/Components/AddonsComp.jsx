import React from "react";
import { useDispatch } from "react-redux";
import { insertAddOns, deleteAddOns } from "../Redux/personalInfoSlice";

const AddonsComp = ({ item, index, planIndex, checked }) => {
  const dispatch = useDispatch();
  const changeHandler = (index) => {
    if (!checked) dispatch(insertAddOns(index));
    else dispatch(deleteAddOns(index));
  };

  return (
    <div
      className={`flex flex-row items-center border p-3 rounded-xl justify-between mt-3 ${
        checked ? "bg-gray-200 border-violet-700" : "border-gray-500"
      }`}
    >
      <div className='flex flex-row space-x-2 items-center'>
        <input
          checked={checked}
          id='checked-checkbox'
          type='checkbox'
          value=''
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded'
          onChange={() => changeHandler(index)}
        />
        <div>
          <p className='font-bold'>{item[0]}</p>
          <p className='text-xs text-gray-500'>{item[1]}</p>
        </div>
      </div>
      {planIndex[1] === "mo" && (
        <span className='text-violet-600'>+${item[2]}/mo</span>
      )}
      {planIndex[1] === "yr" && (
        <span className='text-violet-600'>+${item[3]}/yr</span>
      )}
    </div>
  );
};

export default AddonsComp;
