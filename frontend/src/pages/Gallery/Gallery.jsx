import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    api
      .get("gallery/")
      .then((response) => {
        setItems(response.data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-sky-500 py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-5xl font-bold text-white">Travel Gallery</h1>
          <p className="mt-4 text-lg text-blue-100">
            Moments, destinations and journeys shared by SKN Tours travellers.
          </p>
        </div>
      </section>

      <main className="min-h-[50vh] bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          {status === "loading" && (
            <p className="text-center text-lg text-gray-600" role="status">Loading travel memories…</p>
          )}

          {status === "error" && (
            <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800">Gallery is unavailable right now</h2>
              <p className="mt-3 text-gray-600">Please try again shortly, or contact us to see recent trip photos.</p>
            </div>
          )}

          {status === "ready" && items.length === 0 && (
            <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800">New memories are coming soon</h2>
              <p className="mt-3 text-gray-600">Our latest trip photos will appear here shortly.</p>
            </div>
          )}

          {status === "ready" && items.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveImage(item)}
                  className="group overflow-hidden rounded-2xl bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label={`View ${item.caption || "travel photo"}`}
                >
                  <img src={item.image} alt={item.caption || "SKN Tours travel memory"} className="h-72 w-full object-cover transition duration-300 group-hover:scale-105" />
                  {item.caption && <p className="p-4 font-medium text-gray-700">{item.caption}</p>}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>

      {activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true" aria-label="Gallery image preview" onClick={() => setActiveImage(null)}>
          <div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.image} alt={activeImage.caption || "SKN Tours travel memory"} className="max-h-[80vh] max-w-full rounded-xl object-contain" />
            {activeImage.caption && <p className="mt-3 text-center text-white">{activeImage.caption}</p>}
            <button type="button" onClick={() => setActiveImage(null)} className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-white text-2xl text-gray-800 shadow-lg" aria-label="Close preview">×</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Gallery;
