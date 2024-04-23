import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useColleges from "../../pages/hooks/useColleges";
import { FaSearch } from "react-icons/fa";
import CollegeCard from "../CollegeCard/CollegeCard";
import logo from "../../assets/college-img/logoCollege1.png";
import { RxCross1 } from "react-icons/rx";
import { RiMenu2Fill } from "react-icons/ri";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [colleges] = useColleges();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Filter colleges based on search query
  const filteredColleges = colleges.filter((college) =>
    college.college_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCollegeCards = () => {
    if (searchQuery && filteredColleges.length > 0) {
      return (
        <div className="college-cards mt-16 p-4 mb-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredColleges.map((college) => (
            <CollegeCard key={college._id} topCollege={college}></CollegeCard>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/colleges">Colleges</Link>
      </li>
      <li>
        <Link to="/admission">Admission</Link>
      </li>
      <li>
        <Link to="/myCollege">My College</Link>
      </li>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user?.displayName ? (
            <>
              <li className="z-50 bg-gray-900">
                <details>
                  <summary className="p-0">
                    Name: {user?.displayName || "Username"}{" "}
                  </summary>
                  <ul className="bg-gray-900 rounded-t-none ">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>

                    {user ? (
                      <>
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="btn btn-ghost pb-3 m-0"
                          >
                            LogOut
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </details>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div className="bg-gray-900 text-white">
        <nav className="navbar  px-4 py-3 flex items-center justify-between">
          {/* Drawer toggle for mobile */}
          <div>
            <button
              className="lg:hidden text-white"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <RiMenu2Fill className="text-2xl hover:text-blue-500" />
            </button>
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold ms-4">
              <img src={logo} alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex space-x-8">{navOptions}</ul>

          {/* Render college cards based on search */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search for a college"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </nav>
      </div>

      {/* Sidebar drawer for mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-gray-900 text-white p-8">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-white"
              onClick={() => setIsDrawerOpen(false)}
            >
              <RxCross1 className="text-2xl hover:text-red-700" />
            </button>
            <ul className="space-y-4">{navOptions}</ul>
          </div>
        </div>
      )}

      {renderCollegeCards()}
    </>
  );
};

export default NavBar;
