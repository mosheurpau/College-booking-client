import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://college-booking-server-jt9f.onrender.com",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
