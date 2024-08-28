"use client"
import Link from "next/link";
import Project from "./component/project";
import Hero from "./component/hero";
import Skill from "./component/skill";





export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <Skill/>
      
      
      
      
    </div>
  );
}



















//  const Home =() =>{
//   return (
//     <div>

// {/* //   <section className=" text-gray-900 body-font ">
// //   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
// //     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
// //       <h1 className="text-[35] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-900 md:mt-2 md:ml-[90px]">
// //      I am
// //      <Typewriter */}
// //   options={{
// //     strings: [ 'Frontend Developer', 'Graphic Designer', 'Digital Creator', 'Video Editor'],
// //     autoStart: true,
// //     loop: true,
// //   }}
// // />

       
// //       </h1>
// //       <div className="w-[100px] h-4px bg-blue-700 "> </div>
// //      <div>
// //        <p className="mb-8 leading-relaxed text-gray-900 md:ml-[30px] mt-8">
// //       I am a skilled Frontend Developer with a passion for creating visually appealing user interfaces. My expertise lies inbr HTML, CSS, and JavaScript,alongside modern frameworks like Next.js. I focus on crafting responsive, high-performance websites and web applications that offer seamless user experiences across all devices.
// //       </p>
// //       </div>
// //       <div className="flex justify-center">
// //        <Link href="https://www.whatsapp.com/"> <button className="inline-flex text-black font-bold bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 hover:text-white rounded text-lg md:ml-[200px]">
// //           Contact
// //         </button></Link>
// //        <Link href="Siddiqa.png"> <button className="ml-4 inline-flex text-gray-700 bg-blue-400 border-0 py-2 px-6 font-bold focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg">
// //           Github
// //         </button></Link>
// //       </div>
// //     </div>
// //     <div className="flex justify-end  h-[250px] w-50  mr-[60px] mx-10 md: mb-[200px] md:mr-15 lg:w-[400px] lg:mt-5">
// //     <img className="rounded-full h-60 border-solid border bg-gray-300  md:h-[450px] lg:w-[400px] lg:h-[400px]"src="Sidpic.png" alt="" />
// //     </div>
// //   </div>
// // </section>

    
// <Hero/>
// <Project/>

// </div>
    
//   )
// }
// export default Home