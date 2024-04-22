import { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
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

  const { googleSignIn, facebookSignIn, gitHubSignIn } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosPublicFacebook = useAxiosPublic();
  const axiosPublicGitHub = useAxiosPublic();

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
          newEmail: " ",
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
        name: result.additionalUserInfo.profile.name,
        email: result.additionalUserInfo.profile.email,
        img: result.additionalUserInfo.profile.picture.data.url, // Assuming picture data is available from Facebook
        university: "",
        address: "",
        newEmail: "", // Make sure to handle newEmail appropriately
      };

      const response = await axiosPublicFacebook.post("/users", userInfo);
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
      console.error("Error signing in with Facebook", error);
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

  const handleGitHubSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await gitHubSignIn();
      console.log(result);

      const userInfo = {
        name: result.additionalUserInfo.username,
        email: result.additionalUserInfo.email || "", // Ensure to handle the case where email might be null
        img: result.additionalUserInfo.avatar_url, // Assuming picture data is available from GitHub
        university: "",
        address: "",
        newEmail: "", // Make sure to handle newEmail appropriately
      };

      const response = await axiosPublicGitHub.post("/users", userInfo);
      console.log(response.data);
      navigate(from, { replace: true });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login with GitHub successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error signing in with GitHub", error);
      setIsLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to sign in with GitHub.",
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
      <div className="mb-8">
        <button
          className="btn btn-block btn-outline"
          onClick={handleGitHubSignIn}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <>
              <FaGithub></FaGithub> Login with GitHub
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
