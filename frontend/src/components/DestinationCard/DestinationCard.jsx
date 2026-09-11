import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
          {destination.category}
        </span>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800 mt-3">
          {destination.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center mt-2">
          ⭐
          <span className="ml-1 font-semibold">
            {destination.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 mt-3 line-clamp-3">
          {destination.description}
        </p>

        {/* Location */}
        <p className="text-gray-600 mt-3">
          📍 {destination.city}, {destination.state}
        </p>

        {/* Best Time */}
        <p className="text-gray-600 mt-2">
          🌤 Best Time: {destination.best_time_to_visit}
        </p>

     <Link to={`/destinations/${destination.id}`}>
  <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition">
    View Details
  </button>
</Link>

      </div>

    </div>
  );
}

export default DestinationCard;