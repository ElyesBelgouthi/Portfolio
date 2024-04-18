import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Menu = (props) => {
  const { t } = useTranslation();

  const closeMenu = () => {
    props.onClick(false);
  };

  return (
    <div className="menu">
      <div className="Hamburger" onClick={closeMenu}>
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul>
        <li>
          <a href="#home-section" onClick={closeMenu}>
            {t("header.1")}
          </a>
        </li>
        <li>
          <a onClick={closeMenu}>{t("header.2")}</a>
        </li>
        <li>
          <a onClick={closeMenu}>{t("header.3")}</a>
        </li>
        <li>
          <a onClick={closeMenu}> {t("header.4")}</a>
        </li>
        <li>
          <a onClick={closeMenu}>{t("header.5")}</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
