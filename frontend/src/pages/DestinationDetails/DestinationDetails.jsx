import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import api from "../../services/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function DestinationDetails() {

  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {

    api
      .get(`destinations/${id}/`)
      .then((response) => {
        setDestination(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [id]);

  if (!destination) {

    return (
      <h1 className="text-center text-3xl mt-20">
        Loading...
      </h1>
    );

  }

  return (
    <>

      <Navbar />

      {/* Hero */}

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-[500px] object-cover"
      />

      {/* Content */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

          {destination.category}

        </span>

        <h1 className="text-5xl font-bold mt-6">

          {destination.name}

        </h1>

        <div className="flex gap-8 mt-6 text-lg">

          <p>
            ⭐ {destination.rating}
          </p>

          <p>
            📍 {destination.city}, {destination.state}
          </p>

          <p>
            🌤 {destination.best_time_to_visit}
          </p>

        </div>

        <p className="mt-10 text-lg leading-9 text-gray-700">

          {destination.description}

        </p>
        <section className="mt-20">

  <h2 className="text-4xl font-bold mb-10">
    Available Packages
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {destination.packages.length === 0 ? (

      <p>No packages available.</p>

    ) : (

      destination.packages.map((pkg) => (
<div
  key={pkg.id}
  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
>

  <img
    src={pkg.image}
    alt={pkg.title}
    className="w-full h-56 object-cover"
  />

  <div className="p-6">

    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
      Tour Package
    </span>

    <h3 className="text-2xl font-bold mt-4">
      {pkg.title}
    </h3>

    <p className="text-orange-600 font-bold text-3xl mt-3">
      ₹ {pkg.price}
    </p>

    <div className="mt-4 space-y-2 text-gray-600">

      <p>
        🗓 {pkg.duration_days} Days / {pkg.duration_nights} Nights
      </p>

      <p>
        👥 Max People : {pkg.max_people}
      </p>

    </div>



<Link to={`/packages/${pkg.id}`}>
  <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
    View Package
  </button>
</Link>
  </div>

</div>

      ))

    )}

  </div>

</section>


      </section>

      <Footer />

    </>
  );
}

export default DestinationDetails;
