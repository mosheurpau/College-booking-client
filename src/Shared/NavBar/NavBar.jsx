import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useColleges from "../../pages/hooks/useColleges";
import { FaSearch } from "react-icons/fa";
import CollegeCard from "../CollegeCard/CollegeCard";
import logo from "../../assets/college-img/logoCollege1.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [colleges] = useColleges();

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
        <div className="college-cards mt-16 p-4 mb-2 text-center grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {user?.displayName ? (
        <>
          {" "}
          <li>
            <details>
              <summary>Name: {user?.displayName || "Username"} </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
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
          </li>{" "}
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-xl fixed top-0 opacity-50 bg-black text-white z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost border-0 bg-transparent p-0 text-xl"
          >
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center mx-2">
            {/* Search field */}
            <FaSearch></FaSearch>
            <input
              type="text"
              className="-ms-8 bg-transparent ps-9 pe-0 py-2 border-2 rounded-full"
              placeholder=" Search for a college"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Render college cards based on search */}
      {renderCollegeCards()}
    </>
  );
};

export default NavBar;
