import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData, setGoNext } from "../Redux/personalInfoSlice";

const Personalinfo = () => {
  const dispatch = useDispatch();
  const errorDisplayed = useSelector(
    (state) => state.personalInfoSlice.errorDisplayed
  );
  const data = useSelector((state) => state.personalInfoSlice.data);

  const [errorContainer, setErrorContainer] = useState({
    name: true,
    email: true,
    phone: true,
  });

  const errorValidator = () => {
    if (
      data.name.trim().length === 0 ||
      data.email.trim().length === 0 ||
      data.phone.trim().length === 0
    ) {
      dispatch(setGoNext(false));
      setErrorContainer(() => ({
        name: data.name.trim().length === 0 ? true : false,
        email: data.email.trim().length === 0 ? true : false,
        phone: data.phone.trim().length === 0 ? true : false,
      }));
    } else {
      dispatch(setGoNext(true));
      setErrorContainer(() => ({
        name: false,
        email: false,
        phone: false,
      }));
    }
  };

  useEffect(() => {
    errorValidator();
  }, [data]);

  return (
    <>
      <h1 className='text-3xl font-bold mb-2'>Personal info</h1>
      <div className='text-gray-500'>
        Please provide your name,email address, and phone number
      </div>
      <form className='mt-4 flex flex-col space-y-4'>
        {/* ////// NAME FIELD//////// */}
        <div>
          <div className='flex flex-row justify-between'>
            <p className='text-blue-900'>Name</p>
            {errorDisplayed && errorContainer.name && (
              <p className={`text-right text-red-600 font-bold`}>
                This field is required
              </p>
            )}
          </div>
          <input
            type='text'
            name='name'
            placeholder='e.g. Stephen King'
            className={`border-2 px-3 py-1 w-full outline-none ${
              errorDisplayed && errorContainer.name
                ? "border-red-600"
                : "border-gray-400"
            }`}
            value={data.name}
            onChange={(e) =>
              dispatch(setData({ ...data, name: e.target.value }))
            }
          />
        </div>
        {/* ////// EMAIL FIELD////// */}
        <div>
          <div className='flex flex-row justify-between'>
            <p className='text-blue-900'>Email Address</p>
            {errorDisplayed && errorContainer.email && (
              <p className={`text-right text-red-600 font-bold`}>
                This field is required
              </p>
            )}
          </div>
          <input
            type='text'
            name='email'
            placeholder='e.g. stephenking@lorem.com'
            className={`border-2 px-3 py-1 w-full outline-none ${
              errorDisplayed && errorContainer.email
                ? "border-red-600"
                : "border-gray-400"
            }`}
            value={data.email}
            onChange={(e) =>
              dispatch(setData({ ...data, email: e.target.value }))
            }
          />
        </div>
        {/* ////// PHONE NUMBER FIELD////// */}
        <div>
          <div className='flex flex-row justify-between'>
            <p className='text-blue-900'>Phone Number</p>
            {errorDisplayed && errorContainer.phone && (
              <p className={`text-right text-red-600 font-bold`}>
                This field is required
              </p>
            )}
          </div>
          <input
            type='text'
            name='phone'
            placeholder='e.g. +1 234 567 890'
            className={`border-2 px-3 py-1 w-full outline-none ${
              errorDisplayed && errorContainer.phone
                ? "border-red-600"
                : "border-gray-400"
            }`}
            value={data.phone}
            onChange={(e) =>
              dispatch(setData({ ...data, phone: e.target.value }))
            }
          />
        </div>
      </form>
    </>
  );
};

export default Personalinfo;
