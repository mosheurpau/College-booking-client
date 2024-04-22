import { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://college-booking-server-lilac.vercel.app/colleges"
        );
        const data = await response.json();
        setColleges(data);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [colleges, loading];
};

export default useColleges;
