import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import Menu from "./Menu";

const Header = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    i18next.changeLanguage(language);
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
              <a href="#home-section">{t("header.1")}</a>
            </li>
            <li>
              <a>{t("header.2")}</a>
            </li>
            <li>
              <a>{t("header.3")}</a>
            </li>
            <li>
              <a>{t("header.4")}</a>
            </li>
            <li>
              <a>{t("header.5")}</a>
            </li>
            <li>
              <a>{t("header.6")}</a>
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
