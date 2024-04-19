import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const useCollegeBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/bookingCollege/${user.email}`
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.email]);
  return [bookings, loading];
};

export default useCollegeBookings;
