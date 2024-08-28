import React from 'react'

const Gallery = () => {
  return (
    <div>
      {/* development collection */}
<section className="text-black body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-semibold font-serif title-font mb-4 text-gray-100">
        My Web Development Creativity
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-100">
      As a web developer, I build responsive, user-friendly websites that are both visually captivating and technically robust. My expertise in modern web technologies like HTML5, CSS3, JavaScript, and frameworks like React and Nextjs ensures that my projects are built to the highest standards.
      </p>
    </div>

    <div className="flex flex-wrap -m-4">

       {/* picture1 */}
      <div className="lg:w-1/3 sm:w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="delivery report"
            className="absolute inset-0 w-[95%] h-full object-cover object-center border-8 border-gray-100"
            src="./pic4.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 ">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Delivery Report
            </h1>
            <p className="leading-relaxed text-gray-900">
             I build this page by HTML5 and CSS as a project. Its great experience for my learning period.
            </p>
          </div>
        </div>
      </div>
       {/* picture2 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-8 border-gray-100"
            src="./pic5.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Registration Form
            </h1>
            <p className="leading-relaxed text-gray-900">
             This is my unique and beautiful registration form page which is the part of my website.
            </p>
          </div>
        </div>
      </div>
       {/* picture3 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object- border-8 border-gray-100"
            src="./pic6.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Amazone Website Clone
            </h1>
            <p className="leading-relaxed text-gray-900">
             This is Amazing creativity of my learning skill which is target for me to build.
            </p>
          </div>
        </div>
      </div>
       {/* picture4 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object- border-8 border-gray-100"
            src="./pic10.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4  border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Daraz Website Clone
            </h1>
            <p className="leading-relaxed text-gray-900">
             This is Daraz Clone which was more chellenging to me and my development.
            </p>
          </div>
        </div>
      </div>
       {/* picture5 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object- border-8 border-gray-100"
            src="./pic1.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4  border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Calculator
            </h1>
            <p className="leading-relaxed text-gray-900">
             This is an another project of JavaScript which is fully working with javaScript functionality.
            </p>
          </div>
        </div>
      </div>
       {/* picture6 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-8 border-gray-100"
            src="./pic11.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4  border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Facebook Sign in Page
            </h1>
            <p className="leading-relaxed text-gray-900">
This is Facebook Signin Page with fully functionality of JavaScript and so on.
            </p>
          </div>
        </div>
      </div>
       {/* picture7 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object- border-8 border-gray-100"
            src="./pic13.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4  border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Stop Watch
            </h1>
            <p className="leading-relaxed text-gray-900">
             It is a stop watch which has fully organized with functionalty of JavaScript.
            </p>
          </div>
        </div>
      </div>
       {/* picture8 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-8 border-gray-100"
            src="./pic14.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4  border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              14th August Website
            </h1>
            <p className="leading-relaxed text-gray-900">
             This is my project of 14th August Website with functionality.
            </p>
          </div>
        </div>
      </div>
       {/* picture9 */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center border-8 border-gray-100"
            src="./pic15.png"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4  border-blue-500 bg-blue-100 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE SUBTITLE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Parcel Delivery Report
            </h1>
            <p className="leading-relaxed text-gray-900">
              This is my another craetive webpage design which is made by HTML5 and CSS3 to see status of delivery .
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




{/* Graphic Collection */}
{/* //section 1 */}
<section className="text-gray-100 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium font-serif title-font text-gray-100 lg:w-1/3 lg:mb-0 mb-4">
        My Graphic Design Creativity
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-gray-100">
      My graphic design projects reflect my commitment to crafting visually compelling and effective designs that resonate with audiences and elevate brand identities. Each project is a testament to my ability to blend creativity with strategic thinking, ensuring that the final product not only looks stunning but also serves its intended purpose.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="Mockup"
            className="w-full object-cover h-full object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G1.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="Jp logo"
            className="w-full object-cover h-full object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G2.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="scenery"
            className="w-full h-full object-cover object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G3.png"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="stationery"
            className="w-full h-full object-cover object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G4.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="poster1"
            className="w-full object-cover h-full object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G5.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="poster2"
            className="w-full object-cover h-full object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G6.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* section 2 */}


<section className=" body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
   
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="js logo"
            className="w-full object-cover h-full object-center block  border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G7.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
            alt="st logo"
            className="w-full object-cover h-full object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..."
            src="./graphicpics/G8.png"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
            alt="Egyptian"
            className="w-full h-full object-cover object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[600px] lg:[250px] ml-20"
            src="./graphicpics/G9.jpg"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
            alt="Company logo"
            className="w-full h-full object-cover object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[500px] lg:h[300px] lg:ml-10"
            src="./graphicpics/G10.jpg"
          />
        </div>
       <div className="md:p-2 p-1 w-1/1">
          <img
            alt="typography"
            className="w-full object-cover h-full object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:w-[500px] Lg:h-[100px] lg:ml-10"
             src="./graphicpics/G11.jpg"
          />
        </div> 
        <div className="md:p-2 p-1 w-1/1">
          <img
            alt="truck logo"
            className="w-full object-cover h-full object-center block border-8 border-gray-700 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 lg:ml-10"
            src="./graphicpics/G12.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</section>










































{/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
    <h1 className="sm:text-3xl text-2xl font-semibold font-serif title-font mb-4 text-gray-100">
        My Graphic Creativity
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-gray-100">
      My graphic design projects reflect my commitment to crafting visually compelling and effective designs that resonate with audiences and elevate brand identities. Each project is a testament to my ability to blend creativity with strategic thinking, ensuring that the final product not only looks stunning but also serves its intended purpose.
      </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 ">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/1  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
       
          <img
            alt="Mockup"
            className=" w-[100%] h-[100%] md:w-[80%] object-cover md:h-[80%] object-center block border-8 border-gray-700 rounded-xl  lg:ml-[100px] "
            src="./graphicpics/G9.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
       
          <img
            alt="Logo JP Design"
            className=" w-[100%] h-[100%] md:w-[80%] object-cover md:h-[80%] object-center block border-8 border-gray-700 rounded-xl lg:ml-[100px]"
            src="./graphicpics/G1.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
       
          <img
            alt="scenery"
            className="w-[100%] h-[100%] object-cover md:w-[80%] md:h-[80%]  object-center block border-8 border-gray-100 rounded-xl lg:ml[300px] "
            src="./graphicpics/G5.png"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        
          <img
            alt="stationery"
            className="w-[90%] h-[90%] object-cover object-center block border-8 border-gray-700 rounded-xl m-6"
            src="./graphicpics/G7.png"
          />
        </div>
        <div className="md:p-2 p-1 w-1/1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
       
          <img
            alt="add poster 1"
            className="md:w-[80%] object-cover md:h-[80%] object-center block border-8 border-gray-100 rounded-xl m-6"
            src="./graphicpics/G8.jpg"
          />
        </div>
        
        <div className="md:p-2 p-1 w-1/1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        
          <img
            alt="add poster 2"
            className="md:w-[80%] object-cover md:h-[80%] object-center block border-8 border-gray-100 rounded-xl m-6"
            src="./graphicpics/G10.jpg"
          />
        </div>
        
      </div>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1 ">
      <div className="flex flex-wrap w-1/1 mt-3">
        
       
        <div className="md:p-2 p-1 w-[80%] ml-[10%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        
          <img
            alt="logos collection"
            className="w-[90%] h-[90%] object-cover object-center block border-8 border-gray-100 rounded-xl m-6"
            src="./graphicpics/G12.png"
          />
        </div>
        
     
        
        <div className="md:p-2 p-1 w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
       
          <img
            alt="chris brown logo"
            className="w-[90%] object-cover h-[90%] object-center block border-8 border-gray-100 rounded-xl m-6"
            src="./graphicpics/G2.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
       
          <img
            alt="stylo"
            className="w-[90%] object-cover h-[90%] object-center block border-8 border-gray-100 rounded-xl m-6"
            src="./graphicpics/G13.jpg"
          />
        </div>
        <div className="md:p-2 p-3 w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
       
          <img
            alt="Egyptian"
            className="w-[80%] object-cover h-[80%] object-center block border-8 border-gray-100 rounded-xl ml-[30px] mt-[30px]"
            src="./graphicpics/G11.jpg"
          />
        </div>
        <div className="md:p-2 p-3 w-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
        
          <img
            alt="Ben 10"
            className="w-[80%] object-cover h-[80%] object-center block border-8 border-gray-100 rounded-xl ml-[30px] mt-[30px]"
            src="./graphicpics/G14.png"
          />
        </div>
      </div>
    </div>
  </div>
</section> */}
<div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-semibold font-serif title-font mb-4 text-gray-100">
        My Video Editing Creativity
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed">
      My Video Editing skills are grounded in a deep understanding of both technical tools and creative concepts, allowing me to transform raw footage into polished, impactful content.
      </p>
    </div>
<div className='lg:ml-[280px] mb-[200px] sm:ml-[110px]'>
  
<video className=" lg:h-[20%] lg:w-[75%] rounded-3xl border-8 border-gray-100" controls autoPlay muted>
      <source
        src="video.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    </div>
    </div>
  )
}

export default Gallery;