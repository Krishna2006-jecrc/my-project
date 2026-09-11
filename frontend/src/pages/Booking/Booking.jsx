
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
const [packageData, setPackageData] = useState(null);
  const [searchParams] = useSearchParams();

const packageId = searchParams.get("package");
const [packages, setPackages] = useState([]);
const [errorMessage, setErrorMessage] = useState("");
const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  travel_date: "",
  travelers: 1,
  special_request: "",
  package: packageId || "",
});
useEffect(() => {

  api.get("packages/")
    .then((response) => setPackages(response.data))
    .catch((error) => console.log(error));

  if (packageId) {

    setFormData((prev) => ({
      ...prev,
      package: packageId,
    }));

    api.get(`packages/${packageId}/`)
      .then((response) => {
        setPackageData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }

}, [packageId]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.package) {
      setErrorMessage("Please select a tour package before submitting your request.");
      return;
    }

    api
      .post("bookings/", formData)
      .then(() => {
       navigate("/booking-success");

        setFormData({
          full_name: "",
          email: "",
          phone: "",
          travel_date: "",
          travelers: 1,
          special_request: "",
          package: packageId,
        });
      })
      .catch((error) => {
        console.log(error);
        const firstError = Object.values(error.response?.data || {})[0];
        setErrorMessage(Array.isArray(firstError) ? firstError[0] : "Booking could not be submitted. Please try again.");
      });
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-100 py-20">

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">

          <h1 className="text-4xl font-bold text-center mb-10">
            Book Your Trip
          </h1>
{packageData && (

  <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8">

    <h2 className="text-2xl font-bold">
      {packageData.title}
    </h2>

    <p className="text-gray-600 mt-2">
      📍 {packageData.destination.name}
    </p>

    <p className="text-orange-600 text-3xl font-bold mt-3">
      ₹ {packageData.price}
    </p>

    <p className="mt-3">
      🗓 {packageData.duration_days} Days / {packageData.duration_nights} Nights
    </p>

    <p>
      👥 Max People : {packageData.max_people}
    </p>

  </div>

)}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {!packageId && (
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
                required
              >
                <option value="">Select a tour package</option>
                {packages.filter((pkg) => pkg.is_available).map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.title} — ₹ {pkg.price}
                  </option>
                ))}
              </select>
            )}

            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="date"
              name="travel_date"
              value={formData.travel_date}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="number"
              name="travelers"
              placeholder="Travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              min="1"
            />
            {packageId && <input type="hidden" name="package" value={formData.package} />}

            <textarea
              rows="4"
              name="special_request"
              placeholder="Special Request"
              value={formData.special_request}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg text-lg font-semibold"
            >
              Confirm Booking
            </button>

            {errorMessage && (
              <p className="text-center text-sm font-medium text-red-600" role="alert">
                {errorMessage}
              </p>
            )}

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Booking;
