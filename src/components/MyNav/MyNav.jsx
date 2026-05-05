import { useState, useContext } from "react";
import {
  House,
  Info,
  Compass,
  Search,
  ShoppingCart,
  Sun,
  Moon,
} from "lucide-react";
import { Container, Col, Row, Collapse } from "react-bootstrap";
import "./MyNav.css";
import MyForm from "../MyForm/MyForm";
import { ThemeContext } from "../../contexts/ThemeContext";

function MyNav({ searchQuery, setSearchQuery, limitBooks, setLimitBooks }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {
    isDark,
    toggleDarkTheme,
    computedTextClass,
    computedNavBg,
    computedNavIconColor,
    computedMainBg,
    computedCollapseShadow,
  } = useContext(ThemeContext);

  const Icon = isDark ? Sun : Moon;
  const computedThemeName = isDark ? "Light" : "Dark";
  return (
    <>
      <div className={`${computedMainBg} pb-2`}>
        <nav className={`container d-flex justify-content-center pt-4`}>
          <ul
            className={`d-flex justify-content-evenly gap-4 ${computedNavBg} ${isDark ? "" : "light"} py-3 px-5 rounded-pill list-unstyled mb-0 nav-pill-shadow col-md-8 col-lg-6`}
          >
            <li className="nav-item-custom position-relative d-flex justify-content-center">
              <House
                color={computedNavIconColor}
                size={28}
                className="nav-icon"
              />
              <span
                className={`nav-label position-absolute fw-bold ${computedTextClass}`}
              >
                Home
              </span>
            </li>
            <li className="nav-item-custom position-relative d-flex justify-content-center">
              <Info
                color={computedNavIconColor}
                size={28}
                className="nav-icon"
              />
              <span
                className={`nav-label position-absolute fw-bold ${computedTextClass}`}
              >
                About
              </span>
            </li>
            <li className="nav-item-custom position-relative d-flex justify-content-center">
              <Compass
                color={computedNavIconColor}
                size={28}
                className="nav-icon"
              />
              <span
                className={`nav-label position-absolute fw-bold ${computedTextClass}`}
              >
                Browse
              </span>
            </li>
            <li
              className="nav-item-custom position-relative d-flex justify-content-center"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search
                color={computedNavIconColor}
                size={28}
                className="nav-icon"
              />
              <span
                className={`nav-label position-absolute fw-bold ${computedTextClass}`}
              >
                Search
              </span>
            </li>
            <li className="nav-item-custom position-relative d-flex justify-content-center">
              <ShoppingCart
                color={computedNavIconColor}
                size={28}
                className="nav-icon"
              />
              <span
                className={`nav-label position-absolute fw-bold ${computedTextClass}`}
              >
                Cart
              </span>
            </li>
            <li
              className="nav-item-custom position-relative d-flex justify-content-center"
              onClick={toggleDarkTheme}
            >
              <Icon
                color={computedNavIconColor}
                size={28}
                className="nav-icon"
              />
              <span
                className={`nav-label position-absolute fw-bold ${computedTextClass}`}
              >
                {computedThemeName}
              </span>
            </li>
          </ul>
        </nav>
        <Collapse in={isSearchOpen}>
          <Container
            className={`p-4 rounded-4 shadow mt-3 col-md-4  mx-auto ${computedCollapseShadow}`}
          >
            <Row className="mb-3">
              <Col>
                <MyForm
                  limitBooks={limitBooks}
                  setLimitBooks={setLimitBooks}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </Col>
            </Row>
          </Container>
        </Collapse>
      </div>
    </>
  );
}

export default MyNav;
