import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/profile.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section id="home-section">
      <div className="home-section">
        <div className="home--content">
          <h4>{t("homeSection.h4")}</h4>
          <h1>Elyes Belgouthi</h1>
          <h2>{t("homeSection.h2")}</h2>
          <button className="home--button">
            {t("homeSection.resume")} &nbsp;
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
        <div className="home--image">
          <img src={profile} alt="profile--image" />
        </div>
      </div>
      <div class="scroll-wrapper">
        <div class="scroll-box">
          <div class="scroll-circle"></div>
        </div>
        <div class="scroll-text">{t("homeSection.scrollDown")}</div>
      </div>
    </section>
  );
};

export default HomeSection;
