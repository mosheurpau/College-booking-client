import { useEffect, useState } from "react";
import logo from "../../assets/college-img/logoCollege1.png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute to handle year change

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="bg-base-300 text-base-content ">
      <div className="container mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div className="footer grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mx-auto text-center order-1 md:order-2">
            <div className=" flex justify-center md:justify-start">
              <div>
                <Link to="/">
                  <img className="mb-4  mx-auto " src={logo} alt="Logo" />
                </Link>
                <p className="font-bold">E-College Booking</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center md:justify-start">
              <a
                href="https://web.facebook.com/mosheur.pau"
                className="inline-block mr-4 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://www.youtube.com/c/BasicProgrammer"
                className="inline-block mr-4 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaYoutube className="text-3xl text-red-500 hover:text-red-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/mosheurrahman29"
                className="inline-block transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700" />
              </a>
            </div>
          </div>
          <div className="mx-auto ps-4 text-center order-2 md:order-1">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="mx-auto  text-center order-3">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover ">Press kit</a>
          </div>
        </div>
      </div>
      <div className="mt-8 mx-auto text-center pb-8">
        <p>Copyright © {currentYear} - All right reserved by Mosheur Rahman</p>
      </div>
    </footer>
  );
};

export default Footer;
