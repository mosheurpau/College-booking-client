import { useEffect, useState } from "react";
import logo from "../../assets/college-img/logoCollege1.png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

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
      <div className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <img src={logo} alt="" />
          <p>
            <strong>E-College Booking</strong>
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
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
        </nav>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright © {currentYear} - All right reserved by Mosheur Rahman
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
