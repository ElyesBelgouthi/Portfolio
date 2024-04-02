import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="header--nav">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Expertise</a>
            </li>
            <li>
              <a>Career</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <div className="language-selector">
          <div
            className={`custom-dropdown ${isOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <div className="custom-dropdown-toggle">
              <FontAwesomeIcon icon={faGlobe} />
              {selectedLanguage === "en"
                ? "English"
                : selectedLanguage === "fr"
                ? "Français"
                : "Select Language"}
              <span className="arrow-icon">&#9660;</span>
            </div>
            <div className="custom-dropdown-menu">
              <div
                className="custom-dropdown-item"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </div>

              <div
                className="custom-dropdown-item"
                onClick={() => handleLanguageChange("fr")}
              >
                Français
              </div>
            </div>
          </div>
        </div>
        {!isMenuOpen && (
          <div className="Hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
      </header>
      {isMenuOpen && <Menu onClick={setIsMenuOpen} />}
    </>
  );
};

export default Header;
