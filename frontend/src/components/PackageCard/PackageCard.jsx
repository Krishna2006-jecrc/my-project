import { Link } from "react-router-dom";
function PackageCard({ pkg }) {
  return (
    <Link to={`/packages/${pkg.id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h2 className="text-xl font-bold">
            {pkg.title}
          </h2>

          <p className="text-gray-500 mt-2">
            📍 {pkg.destination.name}
          </p>

          <p className="mt-2 text-orange-600 font-bold text-2xl">
            ₹ {pkg.price}
          </p>

          <p className="text-gray-600 mt-2">
            {pkg.duration_days} Days / {pkg.duration_nights} Nights
          </p>

          <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
            View Details
          </button>

        </div>

      </div>
    </Link>
  );
}

export default PackageCard;