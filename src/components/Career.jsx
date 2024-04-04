const CareerSection = () => {
  return (
    <section id="career-section">
      <h1 className="career-title">Education & Experience</h1>
      <div class="career-container">
        <div class="timeline">
          <ul>
            <li>
              <div class="timeline-content">
                <h3 class="date">June 2021</h3>
                <h2> Pioneer High School of Ariana | Ariana, Tunisia </h2>
                <h1> Tunisian Baccalaureate in Technical Sciences</h1>

                <p>Achievements:</p>

                <p>Second Year: Ranked 8th out of 85 students.</p>
                <p>Freshman Year: Achieved a remarkable 6th out of 450.</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">Expected June 2026</h3>
                <h2>
                  {" "}
                  National Institute of Applied Sciences and Technology (INSAT)
                  | Tunis, Tunisia{" "}
                </h2>
                <h1>Bachelor of Software Engineering</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tempora ab laudantium voluptatibus aut eos placeat
                  laborum, quibusdam exercitationem labore.
                </p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">20th may, 2010</h3>
                <h1>Heading 3</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tempora ab laudantium voluptatibus aut eos placeat
                  laborum, quibusdam exercitationem labore.
                </p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">20th may, 2010</h3>
                <h1>Heading 4</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur tempora ab laudantium voluptatibus aut eos placeat
                  laborum, quibusdam exercitationem labore.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
