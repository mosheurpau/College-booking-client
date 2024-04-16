import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Reset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { resetPass } = useContext(AuthContext);
  const [resetEmail, setResetEmail] = useState("");

  const onSubmit = (data) => {
    resetPass(data.email).then(() => {
      console.log(data.email);

      // Display a success message using SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Password Reset Email Sent",
        text: "Please check your email inbox for further instructions.",
      });
    });
    // Clear the email field
    setResetEmail("");
  };

  return (
    <>
      <Helmet>
        <title>College Booking | Reset Password</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">Reset Password</h1>
                <p className="text-gray-700 mt-2">
                  Enter your email address to receive a password reset link.
                </p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Reset Password"
                />
              </div>
              <div className="text-center mt-6">
                <p>
                  <small>
                    Remembered your password?{" "}
                    <Link className="text-primary" to="/login">
                      Login
                    </Link>
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
