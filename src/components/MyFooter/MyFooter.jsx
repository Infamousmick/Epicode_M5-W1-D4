import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ThemeContext } from "../../contexts/ThemeContext";
function MyFooter() {
  const {
    isDark,
    computedTextClass,
    computedSecondaryTextClass,
    computedFooterBg,
    computedMainBg,
  } = useContext(ThemeContext);
  return (
    <div className={computedMainBg}>
      <footer
        className={`container-md py-5 py-5 border-top ${computedFooterBg} bg-opacity-75 rounded-2 `}
      >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
              aria-label="Bootstrap"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                aria-hidden="true"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <p className={computedSecondaryTextClass}>© 2026</p>
          </div>
          <div className="col mb-3"></div>
          <div className="col mb-3">
            <h5 className={computedTextClass}>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className={computedTextClass}>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className={computedTextClass}>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="#"
                  className={`nav-link p-0 ${computedSecondaryTextClass}`}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyFooter;
