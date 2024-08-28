"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Milestones = () => {
  return (
    <div>
      <div className="container mx-auto flex px-10 py- md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          {" "}
          <h1 className="text-[30] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-100 md:mt-2 md:ml-[400px]">
            My
            <Typewriter
              options={{
                strings: ["Achievements", "Success", "Milestones"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>

      <div className=" mr-[30px] grid grid-cols-2 md:grid-cols-3 gap-2 mb-5 mt-4">
        <div>
          <img
            className="h-auto max-w-[100%] rounded-lg ml-3 border-4 border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C1.jpg"
            alt="HTML Certificate"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-[100%] rounded-lg ml-3 border-4 border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C2.jpg"
            alt="CSS Certificate"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-[100%] rounded-lg ml-3 border-4 border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C9.png"
            alt="JavaScript Certificate"
          />
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg  ml-3 border-4 border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg ml-3 border-4 border-red-500  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C4.png"
            alt="Data Certificate"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg  ml-3 border-4 border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg  ml-3 border-4 border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C7.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg  ml-3 border-4 border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[80%] lg:h-[80%] lg:ml-7"
            src="./certificate/C8.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Milestones;
