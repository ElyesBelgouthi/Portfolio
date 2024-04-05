import { useTranslation } from "react-i18next";

const CareerSection = () => {
  const { t } = useTranslation();

  return (
    <section id="career-section">
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
    </section>
  );
};

export default CareerSection;
