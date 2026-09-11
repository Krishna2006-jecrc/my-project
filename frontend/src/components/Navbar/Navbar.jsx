import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `transition hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" onClick={closeMenu} aria-label="SKN Tours home">
          <h1 className="text-3xl font-bold text-blue-600">
            SKN Tours
          </h1>
        </NavLink>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/destinations" className={navLinkClass}>Destinations</NavLink>
          <NavLink to="/packages" className={navLinkClass}>Packages</NavLink>
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/login" className={navLinkClass}>Login</NavLink>
          <NavLink to="/booking" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition">
            Book Now
          </NavLink>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
        >
          <span className="text-2xl" aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 font-medium">
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/destinations" className={navLinkClass} onClick={closeMenu}>Destinations</NavLink>
            <NavLink to="/packages" className={navLinkClass} onClick={closeMenu}>Packages</NavLink>
            <NavLink to="/gallery" className={navLinkClass} onClick={closeMenu}>Gallery</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/login" className={navLinkClass} onClick={closeMenu}>Login</NavLink>
            <NavLink to="/booking" className="mt-1 rounded-lg bg-orange-500 px-5 py-3 text-center text-white hover:bg-orange-600" onClick={closeMenu}>
              Book Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
