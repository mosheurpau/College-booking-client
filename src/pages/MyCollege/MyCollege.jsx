import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";
import { Link } from "react-router-dom";
import useCollegeBookings from "../hooks/useCollegeBookings";
import Loading from "../../Shared/Loading/Loading";

const MyCollege = () => {
  const [bookings, loading] = useCollegeBookings();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mt-28 my-8 mx-auto">
      <Sectiontitle heading="My All Booking College"></Sectiontitle>

      <div className="mx-auto p-4 overflow-x-auto">
        <table className="table table-zebra w-full mx-auto">
          <thead>
            <tr className="text-xl font-bold border-b-2">
              <th className="text-center">College Details</th>
              <th className="text-center">Candidate Details</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="text-center py-4">
                  <div className="max-w-sm mx-auto">
                    <div className="card w-96 card-compact bg-base-100 shadow-xl">
                      <figure>
                        <img src={booking.caImg} alt="college" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{booking.caName}</h2>
                        <p className="text-left">
                          Admission Date: {booking.caDate}
                        </p>
                        <Link to="/addReview">
                          {" "}
                          <button className="btn btn-sm btn-outline uppercase border-0 border-b-2">
                            Add Review
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-center py-4">
                  <div className="max-w-sm mx-auto">
                    <div className="card card-compact bg-base-100 shadow-xl">
                      <div className="hero">
                        <div className="hero-content">
                          <figure>
                            <img
                              className="w-36 mx-auto"
                              src={booking?.imageUrl}
                              alt="Image"
                            />
                          </figure>
                          <div className="text-left">
                            <h1 className="text-xl font-bold">
                              {booking.candidateName}
                            </h1>
                            <p>{booking.dob}</p>
                            <p>{booking.candidateEmail}</p>
                            <p>{booking.candidatePhone}</p>
                            <p>{booking.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyCollege;
