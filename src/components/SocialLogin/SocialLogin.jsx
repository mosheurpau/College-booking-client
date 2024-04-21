import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../pages/hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        img: result.user?.photoURL,
        university: "Your University", // Add university field
        address: "Your Address", // Add address field
        newEmail: "",
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login with Google successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="my-8">
        <button
          className="btn btn-block btn-outline"
          onClick={handleGoogleSignIn}
        >
          <FaGoogle></FaGoogle> Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
