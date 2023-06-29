import React from "react";

const Contact = () => {
  return ( 
    <div className="relative md:h-[60vh] lg:h-[90vh] ">
      <div className="">
        <img src="./contact.jpg" className="w-auto md:h-[400px] md:w-[600px] z-10 relative pt-10 pl-20 " alt="contact" />
      </div>
      <div className="absolute h-full w-40 left-[40%] top-0 bg-amber-500 z-0"></div>
      <div className="relative md:absolute left-0 md:top-[30%] md:left-[42%] pb-10 z-20 bg-white  md:w-1/2">
        <div className="p-4">
        <div className="font-medium text-3xl md:text-[50px]  ">
          Contact Our 
        </div>
        <div className="mb-10 font-medium text-3xl md:text-[50px] mt-2 ">Professionals today!</div>
        </div>
        <div className="mx-4 mb-10">
          {" "}
          Luctus venenatis lectus magna fringilla urna. Morbi tempus iaculis
          urna id. Mauris pellentesque pulvinar pellentesque habitant morbi
          tristique senectus et netus. Fermentum iaculis eu non diam. Sit amet
          tellus cras adipiscing.
        </div>
        <div className="p-4 border-2 inline border-amber-500 bg-white ml-10">Learn more</div>
      </div>
    </div>
  );
};

export default Contact;
