import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import api from "../../services/api";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [searchParams] = useSearchParams();

const initialSearch = searchParams.get("search") || "";
 const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    api
      .get("destinations/")
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredDestinations = destinations.filter((destination) => {
    const matchSearch = destination.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || destination.category === category;

    return matchSearch && matchCategory;
  });

  const categories = [
    "All",
    "Beach",
    "Hill",
    "Adventure",
    "Religious",
    "Wildlife",
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-sky-500 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-white">
            Explore Destinations
          </h1>

          <p className="text-gray-200 mt-4 text-lg">
            Find your next unforgettable journey.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <input
            type="text"
            placeholder="🔍 Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl px-5 py-4 text-lg focus:ring-2 focus:ring-blue-600 outline-none"
          />

          {/* Category Buttons */}

          <div className="flex flex-wrap gap-3 mt-6">

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-2 rounded-full transition ${
                  category === item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>
      </section>

      {/* Cards */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          {filteredDestinations.length === 0 ? (

            <h2 className="text-center text-2xl text-gray-500">
              No destinations found.
            </h2>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {filteredDestinations.map((destination) => (

                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />

              ))}

            </div>

          )}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Destinations;