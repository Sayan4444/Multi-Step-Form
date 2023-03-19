import React from "react";
import Background from "./Components/Background";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <>
      <div className='font-ubuntu'>
        <Background></Background>
        <div className='md:hidden'>
          <Hero></Hero>
        </div>
      </div>
    </>
  );
};

export default App;
