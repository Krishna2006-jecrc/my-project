
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Hero() {
  const [search, setSearch] = useState("");
const navigate = useNavigate();

const handleSearch = () => {
  if (search.trim() !== "") {
    navigate(`/destinations?search=${search}`);
  }
};
  return (

    <section className="relative h-[90vh] bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 flex items-center">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-2xl">

          <h1 className="text-6xl font-bold text-white leading-tight">
            Explore
            <br />
            Incredible India
          </h1>

          <p className="text-xl text-gray-200 mt-6">
            Discover beautiful destinations with affordable travel packages
            for families, couples and adventure lovers.
          </p>

          <div className="mt-8 flex gap-4">
            <button onClick={() => navigate("/packages")} className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-white font-semibold transition">
              Explore Packages
            </button>

            <button onClick={() => navigate("/contact")} className="border border-white px-8 py-3 rounded-lg text-white hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>

        </div>

      </div>

      {/* Floating Search Box */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 w-full max-w-6xl px-6">

        <div className="bg-white rounded-2xl shadow-2xl p-6">

          <div className="grid md:grid-cols-4 gap-4">

<input
  type="text"
  placeholder="📍 Destination"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
  className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
/>

            <input
              type="date"
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              min="1"
              placeholder="👥 Travelers"
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
<button
  onClick={handleSearch}
  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
>
  Search
</button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
