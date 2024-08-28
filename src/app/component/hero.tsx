"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div>
      <section className=" text-gray-200 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {" "}
            <h1 className="text-[35] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-200 md:mt-2 md:ml-[90px]">
              Hello, I am
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Graphic Designer",
                    "Digital Creator",
                    "Video Editor",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div>
              <p className="mb-8 leading-relaxed text-white md:ml-[30px] mt-8">
                I am a dedicated Frontend developer with a solid foundation in
                web technologies. I completed a frontend development course from{" "}
                <b>TECHFORCE PAKISTAN</b>, where I gained proficiency in HTML5,
                CSS3, JavaScript. I have to learn also TypeScript Currently, I
                am further enhancing my skills by learning React and Next.js
                through the <b>KAMRAN KHAN TESSORI WEB 3.0 AI</b>. This advanced
                training allows me to stay at the forefront of web development,
                equipping me to build dynamic and responsive Websites using the
                latest frameworks.. <br />
                <br /> In addition to my development expertise, I am also an
                Graphic designer. My design skills enable me to create visually
                compelling graphics and user interfaces that enhance user
                experience and effectively communicate brand identity.
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <Link href="https://www.whatsapp.com/">
                {" "}
                <button className="inline-flex text-black font-bold  bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 hover:text-gray-200 rounded text-lg md:ml-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  Contact
                </button>
              </Link>
              <Link href="https://github.com/Siddiqa77?tab=repositories">
                {" "}
                <button className="ml-4 inline-flex text-black bg-blue-400 border-0 py-2 px-6 font-bold focus:outline-none  hover:text-gray-200 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300 ...">
                  Github
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-end mt-10 h-[250px] mr-[60px] mx-10 md: mb-[200px] md:mr-15 lg:w-[400px] lg:mt-[80px]">
            <img
              className="rounded-full h-60 border-8 border-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... md:h-[450px] lg:w-[400px] lg:h-[400px]"
              src="professional.png"
              alt="Siddiqa pic"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
