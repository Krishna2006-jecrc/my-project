import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";

function PackageDetails() {

  const { id } = useParams();
    const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {

    api.get(`packages/${id}/`)
      .then((response) => {
        setPkg(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  if (!pkg) {

    return (
      <h1 className="text-center text-3xl mt-20">
        Loading...
      </h1>
    );

  }

  return (
    <>

      <Navbar />

      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-[500px] object-cover"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold">
          {pkg.title}
        </h1>

        <p className="text-orange-600 text-3xl font-bold mt-6">
          ₹ {pkg.price}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-gray-100 p-5 rounded-xl">
            🗓
            <br />
            {pkg.duration_days} Days / {pkg.duration_nights} Nights
          </div>

          <div className="bg-gray-100 p-5 rounded-xl">
            👥
            <br />
            Max People : {pkg.max_people}
          </div>

          <div className="bg-gray-100 p-5 rounded-xl">
            📍
            <br />
            {pkg.destination.name}
          </div>

        </div>

        <h2 className="text-3xl font-bold mt-16">
          Package Description
        </h2>

        <p className="mt-6 text-gray-700 leading-8">
          {pkg.description}
        </p>

     <button
  onClick={() => navigate(`/booking?package=${pkg.id}`)}
  className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
>
  Proceed to Book
</button>

      </section>

      <Footer />

    </>
  );

}

export default PackageDetails;