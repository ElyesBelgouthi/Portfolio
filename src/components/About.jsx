import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insat from "../assets/insat_logo.png";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about-section">
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
        <h2>{t("aboutSection.14")}</h2>
      </div>
      <div className="about--image">
        <img src={insat} alt="Insat--logo" />
      </div>
    </section>
  );
};

export default AboutSection;
