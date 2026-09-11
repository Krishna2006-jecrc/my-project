import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Destinations from "../pages/Destinations/Destinations";
import Packages from "../pages/Packages/Packages";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Booking from "../pages/Booking/Booking";
import MyBookings from "../pages/MyBookings/MyBookings";
import NotFound from "../pages/NotFound/NotFound";
import DestinationDetails from "../pages/DestinationDetails/DestinationDetails";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import BookingSuccess from "../pages/BookingSuccess/BookingSuccess";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/packages" element={<Packages />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path="*" element={<NotFound />} />
        <Route
  path="/destinations/:id"
  element={<DestinationDetails />}
/>
<Route
  path="/packages/:id"
  element={<PackageDetails />}
/>
<Route
  path="/booking-success"
  element={<BookingSuccess />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;