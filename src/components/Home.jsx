import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/profile.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const HomeSection = () => {
  return (
    <section id="home-section">
      <div className="home-section">
        <div className="home--content">
          <h4>Hi! I am</h4>
          <h1>Elyes Belgouthi</h1>
          <h2>Software Engineering Student & FullStack Developer</h2>
          <button className="home--button">
            My Resume &nbsp;
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
        <div class="scroll-text">Scroll down</div>
      </div>
    </section>
  );
};

export default HomeSection;
