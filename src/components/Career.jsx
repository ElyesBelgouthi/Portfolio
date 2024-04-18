import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CareerSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1.22"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id="career-section">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scaleProgress,
        }}
        id="career"
      >
        <div className="career-subsection">
          <h1 className="career-title">{t("professionalSection.title")}</h1>
          <div className="career-container">
            <div className="timeline">
              <ul className="time-line-list">
                <li className="time-line-list-element">
                  <div className="timeline-content">
                    <h3 className="date">{t("professionalSection.1")}</h3>
                    <h2>{t("professionalSection.2")}</h2>
                    <h1>{t("professionalSection.3")}</h1>

                    <ul>
                      <li>{t("professionalSection.4")}</li>
                      <li>{t("professionalSection.5")}</li>
                      <li>{t("professionalSection.6")}</li>
                    </ul>
                  </div>
                </li>
                <li className="time-line-list-element">
                  <div className="timeline-content">
                    <h3 className="date">{t("professionalSection.7")}</h3>
                    <h2>{t("professionalSection.8")}</h2>
                    <h1>{t("professionalSection.9")}</h1>

                    <ul>
                      <li>{t("professionalSection.10")}</li>
                      <li>{t("professionalSection.11")}</li>
                      <li>{t("professionalSection.12")}</li>
                      <li>{t("professionalSection.13")}</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CareerSection;
