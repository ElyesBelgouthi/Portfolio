import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import profile from "../assets/profile.png";
import resumeEn from "../assets/CV.pdf";
import resumeFr from "../assets/CVFr.pdf";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const firstChildVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const HomeSection = () => {
  const { t, i18n } = useTranslation();
  const resumeLink = i18n.language === "fr" ? resumeFr : resumeEn;
  const resumeName = i18n.language === "fr" ? "Cv" : "resume";

  return (
    <motion.section
      id="home-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="home-section">
        <div className="home--content">
          <motion.h4 variants={firstChildVariants}>
            {t("homeSection.h4")}
          </motion.h4>
          <motion.h1 variants={firstChildVariants}>Elyes Belgouthi</motion.h1>
          <motion.h2 variants={firstChildVariants}>
            {t("homeSection.h2")}
          </motion.h2>
          <a href={resumeLink} download={resumeName} target="_blank">
            <motion.button
              variants={firstChildVariants}
              className="home--button"
            >
              {t("homeSection.resume")} &nbsp;
              <FontAwesomeIcon icon={faDownload} />
            </motion.button>
          </a>
        </div>
        <div className="home--image">
          <img src={profile} alt="profile--image" />
        </div>
      </div>
      <motion.div variants={firstChildVariants} className="scroll-wrapper">
        <div className="scroll-box">
          <div className="scroll-circle"></div>
        </div>
        <div className="scroll-text">{t("homeSection.scrollDown")}</div>
      </motion.div>
    </motion.section>
  );
};

export default HomeSection;
