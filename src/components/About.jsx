import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insat from "../assets/insat_logo.png";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1.22"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id="about">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scaleProgress,
        }}
      >
        <div id="about-section">
          <div className="about--content">
            <h1>{t("aboutSection.title")}</h1>
            <p>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote--icon" />
              {t("aboutSection.1")}
              <b>Elyes Belgouthi</b>
              {t("aboutSection.2")}
              <b>GL3</b>
              {t("aboutSection.3")}
              <b>INSAT</b>
              {t("aboutSection.4")}
              <b>{t("aboutSection.5")}</b> {t("aboutSection.6")}
              <b>{t("aboutSection.7")}</b>
              {t("aboutSection.8")}
            </p>
            <p>
              {t("aboutSection.9")} <b>React</b>
              {t("aboutSection.10")}
              <b>Framer Motion</b>
              {t("aboutSection.11")} <b>tsparticles</b>
              {t("aboutSection.12")}
              <b>i18next</b> {t("aboutSection.13")}{" "}
              <FontAwesomeIcon icon={faQuoteRight} className="quote--icon" />
            </p>
          </div>
          <div className="about--image">
            <img src={insat} alt="Insat--logo" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
