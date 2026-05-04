import { House, Info, Compass, Search, ShoppingCart } from "lucide-react";
import "./MyNav.css";

function MyNav() {
  return (
    <nav className="container d-flex justify-content-center mt-4">
      <ul className="d-flex justify-content-evenly gap-4 bg-info py-3 px-5 rounded-pill list-unstyled mb-0 nav-pill-shadow col-md-8 col-lg-6">
        <li className="nav-item-custom position-relative d-flex justify-content-center">
          <House color="white" size={28} className="nav-icon" />
          <span className="nav-label position-absolute fw-bold">Home</span>
        </li>
        <li className="nav-item-custom position-relative d-flex justify-content-center">
          <Info color="white" size={28} className="nav-icon" />
          <span className="nav-label position-absolute fw-bold">About</span>
        </li>
        <li className="nav-item-custom position-relative d-flex justify-content-center">
          <Compass color="white" size={28} className="nav-icon" />
          <span className="nav-label position-absolute fw-bold">Browse</span>
        </li>
        <li className="nav-item-custom position-relative d-flex justify-content-center">
          <Search color="white" size={28} className="nav-icon" />
          <span className="nav-label position-absolute fw-bold">Search</span>
        </li>
        <li className="nav-item-custom position-relative d-flex justify-content-center">
          <ShoppingCart color="white" size={28} className="nav-icon" />
          <span className="nav-label position-absolute fw-bold">Cart</span>
        </li>
      </ul>
    </nav>
  );
}

export default MyNav;
