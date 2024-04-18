import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

const navElements = {
  hidden: {
    x: 1000,
  },
  visible: {
    x: 0,
    transition: {
      type: "easeInOut",
      stiffness: 120,
    },
  },
  exit: {
    x: 1000,
    transition: {
      duration: 0.6,
      type: "easeInOut",
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

const Menu = (props) => {
  const { t } = useTranslation();

  const closeMenu = () => {
    props.onClick(false);
  };

  return (
    <motion.div
      className="menu"
      variants={navElements}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="Hamburger" onClick={closeMenu}>
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul>
        <motion.li variants={hoverElements} whileHover="hover">
          <Link
            to="home-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            {t("header.1")}
          </Link>
        </motion.li>
        <motion.li variants={hoverElements} whileHover="hover">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            {t("header.2")}
          </Link>
        </motion.li>
        <motion.li variants={hoverElements} whileHover="hover">
          <Link
            onClick={closeMenu}
            to="expertise-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {t("header.3")}
          </Link>
        </motion.li>
        <motion.li variants={hoverElements} whileHover="hover">
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            {t("header.6")}
          </Link>
        </motion.li>
        <motion.li variants={hoverElements} whileHover="hover">
          <Link
            to="career-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            {t("header.4")}
          </Link>
        </motion.li>
        <motion.li variants={hoverElements} whileHover="hover">
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            {t("header.5")}
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Menu;
