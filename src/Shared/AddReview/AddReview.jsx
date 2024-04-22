import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";

const AddReview = () => {
  const { caName } = useParams();
  // console.log(caName);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const imageStorageKey = "8a2fd622b09fe164cd5a3cd0097a5b35";

  const onSubmit = async (data) => {
    setIsLoading(true); // Start loading indicator
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const review = {
            userName: data.name,
            img: img,
            collegeName: data.collegeName,
            rating: data.rating,
            comment: data.comment,
          };
          // send to your database
          fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              setIsLoading(false); // Stop loading indicator
              if (inserted.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Success",
                  text: "Review added successfully",
                }).then(() => {
                  reset();
                  navigate("/");
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Failed to add the Review",
                });
              }
            });
        }
      });
  };

  return (
    <section className="flex justify-center items-center mt-28 mb-10">
      <div className="max-w-xs">
        <h3 className="text-center text-2xl font-bold border-y-2 py-4 my-4">
          Add a New Review
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            {errors.name && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">College Name</span>
            </label>
            <input
              type="text"
              placeholder="College Name"
              className="input input-bordered w-full"
              {...register("collegeName", {
                required: {
                  value: true,
                  message: "College Name is Required",
                },
              })}
              defaultValue={caName}
            />
            {errors.collegeName && (
              <span className="label-text-alt text-red-500">
                {errors.collegeName.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              step="0.1"
              min="0.1"
              max="5"
              placeholder="Your Rating (0.1 to 5)"
              className="input input-bordered w-full"
              {...register("rating", {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
                pattern: {
                  value: /^(?=.)([+-]?([0-4]\.\d{1,2}|[0-4]))$|^5$/,
                  message: "Provide a valid rating (0.1 to 5)",
                },
              })}
            />
            {errors.rating && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Comment</span>
            </label>
            <textarea
              placeholder="Your Comment"
              className="textarea textarea-bordered w-full"
              {...register("comment", {
                required: {
                  value: true,
                  message: "Comment is Required",
                },
              })}
            />
            {errors.comment && (
              <span className="label-text-alt text-red-500">
                {errors.comment.message}
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            {errors.image && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </div>

          <input
            className="btn w-full mt-4 text-white"
            type="submit"
            value="Add"
            disabled={isLoading} // Disable button while loading
          />
        </form>

        {/* Loading indicator */}
        {isLoading && <Loading></Loading>}
      </div>
    </section>
  );
};

export default AddReview;
