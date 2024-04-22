import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://college-booking-server-lilac.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
