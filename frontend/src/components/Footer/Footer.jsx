import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              SKN Tours
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Explore India's most beautiful destinations with affordable,
              safe and memorable travel packages.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/destinations">Destinations</Link></li>

              <li><Link to="/packages">Packages</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <h3 className="text-xl font-semibold mb-5">
  Contact
</h3>

<ul className="space-y-3 text-gray-300">

 <a href="tel:+918619779258">
  📞 +91 8619779258
</a>
<a
  href="https://wa.me/919414338624"
  target="_blank"
  rel="noopener noreferrer"
>
  💬 WhatsApp: +91 9414338624
</a>

  <li>
    📧 manojagrawal5495@gmail.com
  </li>

  <li>
    📍 Balaji Residency,<br />
    Triveni Nagar,<br />
    Jaipur, Rajasthan
  </li>

</ul>

          {/* Follow */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4 text-3xl">

              <span className="cursor-pointer hover:scale-110 transition">
                📘
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                📷
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                🐦
              </span>

              <span className="cursor-pointer hover:scale-110 transition">
                ▶️
              </span>

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 SKN Tours. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
