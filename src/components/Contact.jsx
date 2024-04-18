import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  return (
    <footer id="contact-section">
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/elyes-belgouthi-16450b226/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/ElyesBelgouthi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a href="mailto:belgouthi.elyes.2002@gmail.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </div>
    </footer>
  );
};

export default ContactSection;
