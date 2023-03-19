import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPageNext, setPagePrev } from "../Redux/pageNoSlice";
import { setErrorDisplayed } from "../Redux/personalInfoSlice";
const Navigationbtn = () => {
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.pageNoSlice.pageNo);
  const goNext = useSelector((state) => state.personalInfoSlice.goNext);
  const data = useSelector((state) => state.personalInfoSlice.data);
  const nextpage = () => {
    if (goNext === false) {
      dispatch(setErrorDisplayed(true));
      return;
    }
    if (pageNo === 2 && data.planIndex[0] === -1) {
      return;
    }
    dispatch(setPageNext());
  };
  const prevpage = () => {
    dispatch(setPagePrev());
  };

  return (
    <>
      <div
        className={`flex flex-row m-4 md:w-full md:pr-5 ${
          pageNo === 1 ? "justify-end" : "justify-between"
        }`}
      >
        {!(pageNo === 1 || pageNo === 5) && (
          <button className='text-gray-500' onClick={prevpage}>
            Go back
          </button>
        )}
        {!(pageNo >= 4) && (
          <button
            className='bg-[#03295a] text-white px-6 py-3 rounded-xl'
            onClick={nextpage}
          >
            Next Step
          </button>
        )}
        {pageNo === 4 && (
          <button
            className='bg-blue-600 text-white px-6 py-3 rounded-xl'
            onClick={nextpage}
          >
            Confirm
          </button>
        )}
      </div>
    </>
  );
};

export default Navigationbtn;
