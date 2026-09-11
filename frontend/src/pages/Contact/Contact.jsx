import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    api
      .post("contact/", formData)
      .then(() => {
        setStatus("Thanks! Your enquiry has been sent. We will contact you shortly.");

        setFormData({
          name: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setStatus("Your enquiry could not be sent. Please call or WhatsApp us directly.");
      });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-sky-500 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">
            Contact Us
          </h1>

          <p className="text-gray-200 mt-5 text-lg">
            We're always here to help you plan your perfect trip.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

  <div>
    <h3 className="font-bold text-xl">📞 Phone</h3>
    <a
      href="tel:+918619779258"
      className="text-blue-600 hover:underline"
    >
      +91 8619779258
    </a>
  </div>

  <div>
    <h3 className="font-bold text-xl">💬 WhatsApp</h3>
    <a
      href="https://wa.me/919414338624"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:underline"
    >
      +91 9414338624
    </a>
  </div>

  <div>
    <h3 className="font-bold text-xl">📧 Email</h3>
    <a
      href="mailto:manojagrawal5495@gmail.com"
      className="text-blue-600 hover:underline"
    >
      manojagrawal5495@gmail.com
    </a>
  </div>

  <div>
    <h3 className="font-bold text-xl">📍 Office Address</h3>
    <p>
      Balaji Residency,<br />
      Triveni Nagar,<br />
      Jaipur, Rajasthan
    </p>
  </div>

</div>
<div className="mt-10 flex flex-col md:flex-row gap-4">

  <a
    href="https://wa.me/919414338624"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-xl text-lg font-bold transition"
  >
    💬 Chat on WhatsApp
  </a>

  <a
    href="tel:+918619779258"
    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-xl text-lg font-bold transition"
  >
    📞 Call Now
  </a>

</div>

            {/* Google Map */}
            <div className="mt-10">
              <iframe
                title="map"
                className="w-full h-72 rounded-xl"
                src="https://www.google.com/maps?q=Jaipur&output=embed"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                inputMode="tel"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-4 rounded-xl"
                required
              />

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>

              {status && (
                <p className="text-center text-sm font-medium text-blue-700" role="status">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
