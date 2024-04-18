import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselItem = ({ item, description, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div className="carousel-img">
        <img src={item.icon} />
      </div>

      <div className="carousel-item-text">
        <h2>{item.title}</h2>
        <p>{description}</p>
        <h3 className="carousel-item-links">
          Github Repositories:{" "}
          <a href={item.linkToFront} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Frontend
          </a>{" "}
          |{" "}
          <a href={item.linkToBack} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Backend
          </a>
        </h3>
      </div>
    </div>
  );
};
export default CarouselItem;
