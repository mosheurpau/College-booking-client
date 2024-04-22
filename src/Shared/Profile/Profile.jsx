import { useContext, useEffect, useState } from "react";
import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${user.email}`
        );
        setUserInfo(response.data[0]);
        setEditedUser(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user info:", error);
        setLoading(false);
      }
    };

    getUserInfo();
  }, [user]);

  const handleSave = async () => {
    console.log(editedUser);
    try {
      setLoading(true);
      const response = await axios.put(
        `http://localhost:5000/user/${userInfo._id}`,
        editedUser
      );
      console.log("User profile updated successfully:", response.data);
      setUserInfo(response.data);
    } catch (error) {
      console.error("Error updating user profile:", error);
    } finally {
      setLoading(false);
      setEditing(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User profile updated successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="mt-28 my-8">
      <Sectiontitle heading="Profile details" />
      <div className="flex justify-center items-center h-full mx-auto">
        <div className="max-w-md mx-auto">
          <div className="my-8">
            {loading ? (
              <Loading />
            ) : (
              <div className="mx-12 md:mx-16">
                <div>
                  <img
                    className="min-w-32 max-h-96 rounded-full mb-4 mx-auto"
                    src={editedUser?.img}
                    alt="Profile"
                  />
                </div>

                <p className="text-start">
                  <strong>Name:</strong> {editedUser?.name}
                </p>
                {editedUser.newEmail ? ( // Conditionally render based on newEmail
                  <p className="text-start my-2">
                    <strong>New Email:</strong> {editedUser?.newEmail}
                  </p>
                ) : (
                  <p className="text-start my-2">
                    <strong>Email:</strong> {editedUser?.email}
                  </p>
                )}

                <p className="text-start">
                  <strong>University:</strong> {editedUser?.university}
                </p>
                <p className="text-start my-2">
                  <strong>Address:</strong> {editedUser?.address}
                </p>
                {editing ? (
                  <div className="mt-4 mx-auto">
                    <label className="form-control w-full max-w-xs mx-auto mt-4">
                      <div className="label">
                        <span className="label-text font-b">
                          Profile imageUrl
                        </span>
                      </div>
                      <input
                        type="text"
                        value={editedUser.img}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, img: e.target.value })
                        }
                        className="input input-bordered input-info shadow-2xl w-full max-w-xs"
                        placeholder="Photo URL"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs mx-auto mt-4">
                      <div className="label">
                        <span className="label-text font-b">Name</span>
                      </div>
                      <input
                        type="text"
                        value={editedUser.name}
                        onChange={(e) =>
                          setEditedUser({ ...editedUser, name: e.target.value })
                        }
                        className="input input-bordered input-info shadow-2xl w-full max-w-xs"
                        placeholder="Display Name"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs mx-auto mt-4">
                      <div className="label">
                        <span className="label-text font-b">New Email</span>
                      </div>
                      <input
                        type="email"
                        value={editedUser.newEmail}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            newEmail: e.target.value,
                          })
                        }
                        className="input input-bordered input-info shadow-2xl w-full max-w-xs"
                        placeholder="Email"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs mx-auto mt-4">
                      <div className="label">
                        <span className="label-text font-b">University</span>
                      </div>
                      <input
                        type="text"
                        value={editedUser.university}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            university: e.target.value,
                          })
                        }
                        className="input input-bordered input-info shadow-2xl w-full max-w-xs"
                        placeholder="University"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs mx-auto mt-4">
                      <div className="label">
                        <span className="label-text font-b">Address</span>
                      </div>
                      <input
                        type="text"
                        value={editedUser.address}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            address: e.target.value,
                          })
                        }
                        className="input input-bordered input-info shadow-2xl w-full max-w-xs"
                        placeholder="Address"
                      />
                    </label>
                    <div className="flex justify-between mt-4">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setEditing(false)}
                      >
                        Cancel
                      </button>
                      <button className="btn btn-primary" onClick={handleSave}>
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="btn btn-primary mt-4 w-full"
                    onClick={() => setEditing(true)}
                  >
                    Edit
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
