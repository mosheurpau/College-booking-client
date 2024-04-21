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
      <div className="flex justify-center items-center h-full">
        <div className="max-w-md mx-auto">
          <div className="my-8">
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="max-h-fit">
                  <img
                    className="w-full h-auto rounded-full mb-4 mx-auto"
                    src={editedUser.img}
                    alt="Profile"
                  />
                </div>

                <p className="text-center">
                  <strong>Name:</strong> {editedUser?.name}
                </p>
                <p className="text-center my-2">
                  <strong>Email:</strong> {editedUser?.email}
                </p>
                <p className="text-center">
                  <strong>University:</strong> {editedUser?.university}
                </p>
                <p className="text-center my-2">
                  <strong>Address:</strong> {editedUser?.address}
                </p>
                {editing ? (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={editedUser.img}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, img: e.target.value })
                      }
                      className="input mb-2"
                      placeholder="Photo URL"
                    />
                    <input
                      type="text"
                      value={editedUser.name}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, name: e.target.value })
                      }
                      className="input mb-2"
                      placeholder="Display Name"
                    />
                    <input
                      disabled
                      type="email"
                      value={editedUser.email}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, email: e.target.value })
                      }
                      className="input mb-2"
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      value={editedUser.university}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          university: e.target.value,
                        })
                      }
                      className="input mb-2"
                      placeholder="University"
                    />
                    <input
                      type="text"
                      value={editedUser.address}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          address: e.target.value,
                        })
                      }
                      className="input mb-2"
                      placeholder="Address"
                    />
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
