import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ExpertiseSection = () => {
  const { t } = useTranslation();

  return (
    <motion.div>
      <section id="expertise-section">
        <h1 className="expertise-title">{t("expertiseSection.title")}</h1>
        <div className="expertise-categories">
          <div className="expertise-category">
            <h3>{t("expertiseSection.1")}</h3>
            <ul>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript"
                />
              </li>
              <li>
                <img
                  src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png"
                  alt="TypeScript"
                />
              </li>
              <li>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-java-2038875-1720088.png"
                  alt="Java"
                />
              </li>
              <li>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp"
                  alt="python"
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png"
                  alt="c++"
                />
              </li>
              <li>
                <img
                  src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png
                "
                  alt="c#"
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                  alt="php"
                />
              </li>
            </ul>
          </div>
          <div className="expertise-category">
            <h3>{t("expertiseSection.2")}</h3>
            <ul>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  alt="React"
                />
              </li>
              <li>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png"
                  alt="Angular"
                />
              </li>
              <li>
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/html5-logo-png-transparent.png"
                  alt="html"
                />
              </li>
              <li>
                <img
                  src="https://blog.lecacheur.com/wp-content/uploads/2019/09/CSS3_logo_and_wordmark.svg_.png"
                  alt="css"
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
                  alt="Tailwind css"
                />
              </li>
            </ul>
          </div>
          <div className="expertise-category">
            <h3>{t("expertiseSection.7")}</h3>
            <ul>
              <li>
                <img
                  src="https://storage.googleapis.com/cms-storage-bucket/683514c5660dbe52f5ba.png"
                  alt="Flutter"
                />
              </li>
            </ul>
          </div>
          <div className="expertise-category">
            <h3>{t("expertiseSection.3")}</h3>
            <ul>
              <li>
                <img
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png"
                  alt="NestJS"
                />
              </li>

              <li>
                <img
                  src="https://atomrace.com/blog/wp-content/uploads/2018/05/spring-boot-logo-300x158.png"
                  alt="Spring Boot"
                />
              </li>

              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png"
                  alt="ASP.Net Core"
                />
              </li>

              <li>
                <img
                  src="https://symfony.com/logos/symfony_white_03.png"
                  alt="Symfony"
                />
              </li>
            </ul>
          </div>

          <div className="expertise-category">
            <h3>{t("expertiseSection.4")}</h3>
            <ul>
              <li>
                <img
                  src="https://miro.medium.com/v2/resize:fit:440/1*J3G3akaMpUOLegw0p0qthA.png"
                  alt="Restful API"
                />
              </li>
              <li>
                <img
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/graphql_logo_icon_171045.png"
                  alt="GraphQL"
                />
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"
                  alt="mysql"
                />
              </li>
              <li>
                <img
                  src="https://static-00.iconduck.com/assets.00/postgresql-original-wordmark-icon-2048x2040-a724y7yq.png"
                  alt="postgresql"
                />
              </li>
              <li>
                <img
                  src="https://www.svgrepo.com/show/331488/mongodb.svg"
                  alt="MongoDB"
                />
              </li>
            </ul>
          </div>
          <div className="expertise-category">
            <h3>{t("expertiseSection.5")}</h3>
            <ul>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png"
                  alt="Git"
                />
              </li>
              <li>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                  alt="GitHub"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ExpertiseSection;
