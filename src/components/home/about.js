import React from "react";

const About = () => {
  return (
    <div className=" relative flex py-[4rem] flex-col md:flex-row lg:h-[60vh] justify-center items-center ">
      <div className="absolute top-[0%] left-[10%] md:left-[15%] h-40 w-40 bg-amber-300 rounded-full "></div>
      <div className="p-6 md:w-2/5 z-10">
       <h1 className="text-4xl md:text-[60px] font-semibold z-10 mb-4">About Us</h1>
       <p className=" p-[1rem]">With their wealth of experience and know-how, Zinacor brings you the
        best anti-corrosion solution: the zinc and zinc-aluminium wire. Zinacor,
        specialised in the manufacturing of zinc and zinc-aluminium wire used in
        the field of thermal spraying, ideally combines quality, expertise and
        worldwide vision. All these aspects make Zinacor the ultimate world
        leader in the production of zinc and zinc-aluminium wire. ZINC-ALUMIN</p>
      </div>
      <div className="md:w-2/5 justify-self-end inline-block mb-20">
        <img src="./about.jpg" className="max-h-96 rounded-full " alt="about us"></img>
      </div>
    </div>
  );
};

export default About;
