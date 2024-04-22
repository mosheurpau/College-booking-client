import { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../pages/hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [isLoading, setIsLoading] = useState(false);

  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          img: result.user?.photoURL,
          university: "Your University",
          address: "Your Address",
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
      })
      .finally(() => setIsLoading(false));
  };

  const handleFacebookSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await facebookSignIn();
      console.log(result);

      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        img: result.user?.photoURL, // Assuming picture data is available from Facebook
        university: "",
        address: "",
        newEmail: "Your new email",
      };

      const response = await axiosPublic.post("/users", userInfo);
      console.log(response.data);
      navigate(from, { replace: true });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login with Facebook successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to sign in with Facebook.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="my-8">
        <button
          className="btn btn-block btn-outline"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <>
              <FaGoogle /> Login with Google
            </>
          )}
        </button>
      </div>
      <div className="mb-8">
        <button
          className="btn btn-block btn-outline"
          onClick={handleFacebookSignIn}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <>
              <FaFacebook /> Login with Facebook
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
