


import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-[35] font-serif font-extrabold sm:text-6xl text-3xl mb-10 text-gray-100 md:mt-2 lg:ml-[60px]">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
            The primary goal of this portfolio is to present my work in a professional and visually appealing manner, making it easy for potential clients or employers to understand my capabilities and consider me for opportunities. The project reflects my commitment to quality, attention to detail, and passion for creating exceptional web experiences.
      </p>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {/* Project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="Event Website"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./pic3.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <h2 className="tracking-widest title-font text-2xl text-[#017ee0] mb-1">
                    HTML/CSS Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Event Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-900 text-sm">
                   This project is designed to provide a seamless and immersive experience for event attendees, blending modern web design with interactive features.
                  </p>
                  <Link
                    target="_blank"
                    href="https://web4-ef5db.web.app/"
                  >
                    <p className="leading-relaxed text-[#017ee0] hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 2*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="Parllax Website"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./pic2.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-[#017ee0] mb-1">
                    HTML/CSS Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Parallax Website
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-900 text-sm">
                  This project demonstrates the use of parallax scrolling to create an engaging, immersive website that captures the viewer’s attention and encourages exploration.
                  </p>
                  <Link
                    target="_blank"
                    href="https://website-9feb7.web.app/"
                  >
                    <p className="leading-relaxed text-[#017ee0] hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 3*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="Pakola Clone"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./pic7.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-[#017ee0] mb-1">
                    HTML/CSS Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Pakola Clone 
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-900 text-sm">
                  This project is a testament to my ability to replicate and enhance existing web designs, ensuring they are both visually appealing and functionally robust.
                  </p>
                  <Link
                    target="_blank"
                    href="https://web-1-bc4c0.web.app/"
                  >
                    <p className="leading-relaxed text-[#017ee0] hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 4*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./pic8.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-[#017ee0] mb-1">
                    JavaScript Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Techforce Pakistan 
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-900 text-sm">
                  This project is to create a visually stunning and interactive website that not only captures the essence of the content but also provides an engaging user experience through the innovative use of parallax scrolling.
                  </p>
                  <Link
                    target="_blank"
                    href="https://js-website-8cddd.web.app/"
                  >
                    <p className="leading-relaxed text-[#017ee0] hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 5*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="musicplayer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./musicpic.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-[#017ee0] mb-1">
                  Internship Project 1
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                  Music Mp3 Player
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-900 text-sm">
                  This project showcases my ability to develop an interactive, user-friendly music player that provides a seamless audio experience.
                  </p>
                  <Link
                    target="_blank"
                    href="./audioplayer/index.html"
                  >
                    <p className="leading-relaxed text-[#017ee0] hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 6*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <img
                  alt="Gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="./pic9.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-[#017ee0] mb-1">
                    Internship Project 2
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                  Image Gallery
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-gray-900 text-sm">
                  This project is designed to provide a beautiful and interactive way to browse, organize, and display images, reflecting my skills in both web development and graphic design.
                  </p>
                  <Link
                    target="_blank"
                    href="./Gallery/index.html"
                  >
                    <p className="leading-relaxed text-[#017ee0] hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

      