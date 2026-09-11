import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import PackageCard from "../../components/PackageCard/PackageCard";

import api from "../../services/api";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import Testimonials from "../../components/Testimonials/Testimonials";
import GalleryPreview from "../../components/GalleryPreview/GalleryPreview";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [destinations, setDestinations] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    api
      .get("destinations/")
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get("packages/")
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Hero />

      {/* Popular Destinations */}
      <section className="bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-3">
            Popular Destinations
          </h2>

          <p className="text-gray-600 text-center mb-12">
            Discover India's most loved travel destinations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations
  .filter((destination) => destination.is_featured)
  .slice(0, 4)
  .map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-3">
            Featured Packages
          </h2>

          <p className="text-gray-600 text-center mb-12">
            Choose from our most popular travel packages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
              />
            ))}
            
          </div>

        </div>
      </section>
        <WhyChoose />
        <Testimonials />
        <GalleryPreview />
         <Footer />
    </>
  );
}

export default Home;