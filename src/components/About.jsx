import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import insat from "../assets/insat_logo.png";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <section id="about-section">
      <div className="about--content">
        <h1>About Me</h1>
        <p>
          <FontAwesomeIcon icon={faQuoteLeft} className="quote--icon" />
          Hello! I'm <b>Elyes Belgouthi</b>, a third-year software engineering
          student <b>GL3</b> at <b>INSAT</b> in Tunis, Tunisia. I'm passionate
          about technology and eager for opportunities like <b>internships</b>{" "}
          and <b>part-time</b> positions to apply my skills and contribute to
          meaningful projects.
        </p>
        <p>
          This website was crafted using cutting-edge technologies including{" "}
          <b>React</b> for the frontend, <b>Framer Motion</b> for animations,{" "}
          <b>tsparticles</b> for dynamic particle effects, and <b>i18next</b>{" "}
          for internationalization support.{" "}
          <FontAwesomeIcon icon={faQuoteRight} className="quote--icon" />
        </p>
        <h2>Let's connect and explore how we can innovate together!</h2>
      </div>
      <div className="about--image">
        <img src={insat} alt="Insat--logo" />
      </div>
    </section>
  );
};

export default AboutSection;
