import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EducationSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1.22"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scaleProgress,
      }}
    >
      <div className="career-subsection">
        <h1 className="career-title">{t("educationSection.title")}</h1>
        <div className="career-container">
          <div className="timeline">
            <ul className="time-line-list">
              <li className="time-line-list-element">
                <div className="timeline-content">
                  <h3 className="date">{t("educationSection.1")}</h3>
                  <h2>{t("educationSection.2")}</h2>
                  <h1>{t("educationSection.3")}</h1>
                  <ul>
                    <p>{t("educationSection.4")}</p>

                    <li>
                      {t("educationSection.5")}
                      <b>19.29/20</b>
                      {t("educationSection.6")}
                      <b>{t("educationSection.66")}</b>
                      {t("educationSection.666")}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="time-line-list-element">
                <div className="timeline-content">
                  <h3 className="date">{t("educationSection.7")}</h3>
                  <h2> {t("educationSection.8")} </h2>
                  <h1>{t("educationSection.9")}</h1>

                  <ul>
                    <p>{t("educationSection.10")}</p>
                    <li>{t("educationSection.11")}</li>
                    <li>{t("educationSection.12")}</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
