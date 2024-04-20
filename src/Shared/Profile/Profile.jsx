import { useContext, useState } from "react";
import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleSave = () => {
    // Update user profile with edited data
    updateUserProfile(editedUser);
    setEditing(false);
  };

  return (
    <section className="mt-28 my-8">
      <Sectiontitle heading="Profile details"></Sectiontitle>
      <div className="flex justify-center items-center h-full">
        <div className="max-w-md mx-auto">
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <img
              className="w-32 h-32 rounded-full mb-4"
              src={user.photoURL}
              alt="Profile"
            />
            <p>
              <strong>Name:</strong> {user.displayName}
            </p>
            <p className="my-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>University:</strong> {user.university}
            </p>
            <p className="my-2">
              <strong>Address:</strong> {user.address}
            </p>
            {editing ? (
              <div className="mt-4">
                <input
                  type="text"
                  value={editedUser.photoURL}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, photoURL: e.target.value })
                  }
                  className="input mb-2"
                  placeholder="Photo URL"
                />
                <input
                  type="text"
                  value={editedUser.displayName}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      displayName: e.target.value,
                    })
                  }
                  className="input mb-2"
                  placeholder="Display Name"
                />
                <input
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
                    setEditedUser({ ...editedUser, university: e.target.value })
                  }
                  className="input mb-2"
                  placeholder="University"
                />
                <input
                  type="text"
                  value={editedUser.address}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, address: e.target.value })
                  }
                  className="input mb-2"
                  placeholder="Address"
                />
                <div className="flex justify-between mt-4">
                  <button
                    className="btn btn-primary"
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
                className="btn btn-primary mt-4"
                onClick={() => setEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
