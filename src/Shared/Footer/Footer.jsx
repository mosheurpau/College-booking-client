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
    <footer>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <nav className="mx-auto md:order-1 order-2">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="mx-auto md:order-3 order-3">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav className="mx-auto  md:order-2 order-1">
          <div className="grid grid-flow-col gap-4">
            <div>
              <aside>
                <Link to="/">
                  {" "}
                  <img className="mx-auto" src={logo} alt="" />
                </Link>
                <p className="font-bold my-4">E-College Booking</p>
              </aside>
              <h6 className="footer-title">Social</h6>
              <a
                href="https://web.facebook.com/mosheur.pau"
                className="inline-block mr-4 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaFacebook className="text-3xl text-blue-500 hover:text-blue-700"></FaFacebook>
              </a>
              <a
                href="https://www.youtube.com/c/BasicProgrammer"
                className="inline-block mr-4 transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaYoutube className="text-3xl text-red-500 hover:text-red-700"></FaYoutube>
              </a>
              <a
                href="https://www.linkedin.com/in/mosheurrahman29"
                className="inline-block transition duration-300 ease-in-out transform hover:scale-110"
              >
                <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700"></FaLinkedin>
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>
              Copyright © {currentYear} - All right reserved by Mosheur Rahman
            </p>
          </aside>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
