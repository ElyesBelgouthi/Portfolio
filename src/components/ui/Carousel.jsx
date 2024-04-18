import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import CarouselItem from "./CarouselItem";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const Carousel = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Save Palestine (2024)",
      icon: project2,
      linkToFront: "https://github.com/ElyesBelgouthi/SavePalestine-FrontEnd",
      linkToBack: "https://github.com/ElyesBelgouthi/SavePalestine-BackEnd",
    },

    {
      title: "Meuble FH (2023)",

      icon: project1,
      linkToFront: "https://github.com/ElyesBelgouthi/Meuble-FH",
      linkToBack: "https://github.com/ElyesBelgouthi/Meuble-FH-backend",
    },
    {
      title: " Horizon Data Academy ERP (2023)",

      icon: project3,
      linkToFront: "https://github.com/ElyesBelgouthi/Training-Center-front",
      linkToBack: "https://github.com/ElyesBelgouthi/Training-Center-back",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return (
            <CarouselItem
              item={item}
              description={t(`projectsSection.${index}.description`)}
              width={"100%"}
              key={index}
            />
          );
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                key={index}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
