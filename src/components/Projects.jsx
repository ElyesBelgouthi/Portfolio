import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Carousel from "./ui/Carousel";

const ProjectsSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1.22"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div id="project">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: scaleProgress,
        }}
      >
        <div id="project-section">
          <h1 className="project-title">Projects</h1>
          <div className="carousel-container">
            <Carousel />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
