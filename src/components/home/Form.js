import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col md:flex-row bg-amber-500 sm:max-md:mt-20 p-[2rem] lg:p-[10rem]">
      <div className="flex flex-col gap-5 md:w-1/2">
        <div className="text-2xl">JOIN OUR NEWSLETTER</div>
        <div className="text-4xl">Contact us</div>
        <div className="text-2xl">
          Centre d'affaires Dony | Rue de Chênée 53 (entrée B) | B-4031 Angleur-
          Belgique
        </div>
        <div className="text-2xl">Mon – Fri: 9:00 am – 8:00 pm, <br/> Sat – Sun: 9:00 am – 10 pm</div>
        <div>contacts@zinacor.com</div>
        <div className="flex gap-4">
            <img src="./facebook.svg" alt="facebook" className="h-6 w-5"/>
            <img src="./instagram.svg" alt="instagram" className="h-6 w-5"/>
            <img src="./twitter.svg" alt="twitter" className="h-6 w-5"/>
            <img src="./google.svg" alt="google" className="h-6 w-5"/>
        </div>
      </div>
      <div className="text-2xl text-black md:w-1/2 mt-10 ">
      <form className="flex flex-col gap-7">
        <input placeholder="Enter your name" className="bg-transparent text-black border-b border-black focus:outline-none pl-2 w-full"></input><br/>
        <input placeholder="Enter your valid email"  className="bg-transparent text-black border-b border-black focus:outline-none pl-2 w-full"></input><br/>
        <input placeholder="Message" className="bg-transparent text-black border-b border-black focus:outline-none pl-2 w-full"></input>
        <button type="click" className="bg-black text-white py-2 hover:bg-gray-900">Submit </button>
      </form>
      </div>
    </div>
  );
};

export default Form;
