import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function BookingSuccess() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center bg-gray-100">

        <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">

          <div className="text-6xl">
            ✅
          </div>

          <h1 className="text-4xl font-bold mt-5">
            Booking Successful
          </h1>

          <p className="mt-5 text-gray-600 leading-8">
            Thank you for choosing us.
            <br />
            Our travel expert will contact you shortly.
          </p>

          <Link to="/">

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">

              Back to Home

            </button>

          </Link>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default BookingSuccess;