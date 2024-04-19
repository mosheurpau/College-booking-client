import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../Loading/Loading";

const AdmissionForm = () => {
  const { caId } = useParams();
  const [collegeFormInfo, setCollegeFormInfo] = useState({});
  const { _id, college_img, college_name, admission_date } = collegeFormInfo;
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(caId);
  useEffect(() => {
    fetchCollegeInfo();
  }, [caId]);

  const fetchCollegeInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/college/${caId}`);
      setCollegeFormInfo(response.data);
    } catch (error) {
      console.error("Error fetching college info:", error);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const bookingInfo = {
        caId: _id,
        caName: college_name,
        caImg: college_img,
        caDate: admission_date,
        candidateName: data.candidateName,
        candidateEmail: data.candidateEmail,
        candidatePhone: data.candidatePhone,
        address: data.address,
        dob: data.dob,
        imageUrl: data.imageUrl,
      };

      const response = await axios.post(
        "http://localhost:5000/bookingCollege",
        bookingInfo
      );

      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Booking college added successfully",
        });
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add the college booking",
        });
      }
    } catch (error) {
      console.error("Error adding college booking:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the college booking",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <div className="mt-28 my-8">
        <Sectiontitle
          heading={collegeFormInfo?.college_name + " Admission Booking"}
        ></Sectiontitle>

        <div className="max-w-md mx-auto p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="candidateName"
              >
                Candidate Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="candidateName"
                type="text"
                // value={user?.displayName || ""}
                placeholder="Candidate Name"
                {...register("candidateName", { required: true })}
              />
              {errors.candidateName && (
                <span className="text-red-500">Candidate Name is required</span>
              )}
            </div>
            {/* Candidate Email */}
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="candidateEmail"
              >
                Candidate Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="candidateEmail"
                type="email"
                value={user?.email || ""}
                placeholder="Candidate Email"
                {...register("candidateEmail", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.candidateEmail && (
                <span className="text-red-500">
                  Please enter a valid email address
                </span>
              )}
            </div>
            {/* Candidate Phone */}
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="candidatePhone"
              >
                Candidate Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="candidatePhone"
                type="tel"
                placeholder="Candidate Phone"
                {...register("candidatePhone", {
                  required: true,
                  pattern: /^\+[0-9]{1,3} [0-9]{10}$/i,
                })}
              />
              {errors.candidatePhone && (
                <span className="text-red-500">
                  Please enter a valid phone number with country code (+XXX
                  XXXXXXXXXX)
                </span>
              )}
            </div>
            {/* Address */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Address"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-red-500">Address is required</span>
              )}
            </div>
            {/* Date of Birth */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="dob"
                type="date"
                {...register("dob", { required: true })}
              />
              {errors.dob && (
                <span className="text-red-500">Date of Birth is required</span>
              )}
            </div>
            {/* Image URL */}
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="imageUrl"
              >
                Image URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="imageUrl"
                type="text"
                placeholder="Image URL"
                {...register("imageUrl")}
              />
            </div>
            {/* Submit Button */}
            <div className="mb-4">
              <button
                className="btn btn-outline font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
            {isLoading && <Loading></Loading>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
