import { Link } from "react-router-dom";

function GalleryPreview() {

  const images = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Travel Gallery
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Memories from our amazing trips.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {images.map((image, index) => (

            <img
              key={index}
              src={image}
              alt="Travel"
              className="rounded-2xl h-64 w-full object-cover hover:scale-105 transition duration-300"
            />

          ))}

        </div>

        <div className="text-center mt-10">

          <Link to="/gallery" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition">
            View Full Gallery
          </Link>

        </div>

      </div>

    </section>
  );
}

export default GalleryPreview;
