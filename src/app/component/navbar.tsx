import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" w-[100%]  top-0 z-50">
      <header className="text-gray-100 font-serif font-bold body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="h-[75px] w-[90px] ml-3 transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-110 duration-300 ..."
              src="./logo.png"
              alt="logo"
            />
            <span className="ml-3 text-2xl text-gray-200 hover:animate-spin">
              Siddiqa Badar
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 text-xl hover:bg-[#017ee0] hover:p-3 hover:rounded-2xl cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mr-5 text-xl hover:bg-[#017ee0] hover:p-3 hover:rounded-2xl cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="/milestones"
              className="mr-5 text-xl hover:bg-[#017ee0] hover:p-3 hover:rounded-2xl cursor-pointer"
            >
              Milestones
            </Link>
            <Link
              href="/gallery"
              className="mr-5 text-xl hover:bg-[#017ee0] hover:p-3 hover:rounded-2xl cursor-pointer"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="mr-5 text-xl hover:bg-[#017ee0] hover:p-3 hover:rounded-2xl cursor-pointer"
            >
              Contact Us
            </Link>
          </nav>
          <a href="Cv.pdf.pdf">
            <button className="inline-flex items-center bg-purple-400  text-black py-1 px-3 focus:outline-none hover:bg-purple-700 hover:text-gray-200 rounded-md text-base mt-4 md:mt-0 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
              Download CV
              <FaCloudDownloadAlt className="inline-block pb-1 ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
