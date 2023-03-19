import React from "react";
import { useSelector } from "react-redux";
import AddonsComp from "./AddonsComp";

export const addonData = [
  ["Online Service", "Access to multiplayer games", 1, 10],
  ["Larger Storage", "Extra 1TB of cloud save", 2, 20],
  ["Customizable Profile", "Custom theme on your profile", 2, 20],
];

const Addons = () => {
  const planIndex = useSelector(
    (state) => state.personalInfoSlice.data.planIndex
  );
  const addonsIndex = useSelector(
    (state) => state.personalInfoSlice.data.addonsIndex
  );

  return (
    <>
      <h1 className='text-3xl font-bold mb-2'>Pick add-ons</h1>
      <div className='text-gray-500'>
        Add-ons help to enhance your gaming experience
      </div>
      {addonData.map((item, index) => (
        <AddonsComp
          key={index}
          item={item}
          index={index}
          planIndex={planIndex}
          checked={addonsIndex.includes(index)}
        />
      ))}
    </>
  );
};

export default Addons;
