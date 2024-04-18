import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Menu from "./Menu";

const navElements = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
};

const hoverElements = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};

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
      <motion.header
        className="header"
        variants={navElements}
        initial="hidden"
        animate="visible"
      >
        <nav className="header--nav">
          <ul>
            <motion.li variants={hoverElements} whileHover="hover">
              <Link
                to="home-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {t("header.1")}
              </Link>
            </motion.li>
            <motion.li variants={hoverElements} whileHover="hover">
              <Link
                to="about-section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {t("header.2")}
              </Link>
            </motion.li>
            <motion.li variants={hoverElements} whileHover="hover">
              <a>{t("header.3")}</a>
            </motion.li>
            <motion.li variants={hoverElements} whileHover="hover">
              <a>{t("header.4")}</a>
            </motion.li>
            <motion.li variants={hoverElements} whileHover="hover">
              <a>{t("header.5")}</a>
            </motion.li>
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
      </motion.header>
      {isMenuOpen && <Menu onClick={setIsMenuOpen} />}
    </>
  );
};

export default Header;
