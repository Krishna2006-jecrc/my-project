import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PackageCard from "../../components/PackageCard/PackageCard";
import api from "../../services/api";

function Packages() {

  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");
const [selectedDestination, setSelectedDestination] = useState("");
const [selectedType, setSelectedType] = useState("");
  useEffect(() => {
    api
      .get("packages/")
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
const destinations = [
  ...new Set(packages.map((pkg) => pkg.destination.name)),
];

const packageTypes = [
  ...new Set(packages.map((pkg) => pkg.package_type)),
];
  const filteredPackages = packages.filter((pkg) => {

  const matchesSearch =
    pkg.title.toLowerCase().includes(search.toLowerCase()) ||
    pkg.destination.name.toLowerCase().includes(search.toLowerCase());

  const matchesDestination =
    selectedDestination === "" ||
    pkg.destination.name === selectedDestination;

  const matchesType =
    selectedType === "" ||
    pkg.package_type === selectedType;

  return (
    matchesSearch &&
    matchesDestination &&
    matchesType
  );

});
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Explore Our Tour Packages
          </h1>

          <p className="mt-4 text-xl text-gray-200">
            Find the perfect package for your next unforgettable journey.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="bg-gray-100 py-10">

        <div className="max-w-7xl mx-auto px-6">

  <section className="bg-gray-100 py-10">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-5">

      <input
        type="text"
        placeholder="Search Package..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-xl p-4"
      />

      <select
        value={selectedDestination}
        onChange={(e) => setSelectedDestination(e.target.value)}
        className="border rounded-xl p-4"
      >
        <option value="">All Destinations</option>

        {destinations.map((destination) => (
          <option
            key={destination}
            value={destination}
          >
            {destination}
          </option>
        ))}

      </select>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border rounded-xl p-4"
      >
        <option value="">All Package Types</option>

        {packageTypes.map((type) => (
          <option
            key={type}
            value={type}
          >
            {type}
          </option>
        ))}

      </select>

    </div>

  </div>

</section>

        </div>

      </section>

      {/* Packages */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredPackages.length === 0 ? (

              <h2 className="text-2xl">
                No Package Found
              </h2>

            ) : (

              filteredPackages.map((pkg) => (

                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                />

              ))

            )}

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Packages;