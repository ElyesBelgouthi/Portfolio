const CareerSection = () => {
  return (
    <section id="career-section">
      <div className="career-subsection">
        <h1 className="career-title">Education</h1>
        <div class="career-container">
          <div class="timeline">
            <ul className="time-line-list">
              <li className="time-line-list-element">
                <div class="timeline-content">
                  <h3 class="date">June 2021</h3>
                  <h2> Pioneer High School of Ariana | Ariana, Tunisia </h2>
                  <h1> Tunisian Baccalaureate in Technical Sciences</h1>
                  <ul>
                    <p>Achievements:</p>

                    <li>
                      Grade: <b>19.29/20</b> (Ranked <b>8th</b> in National
                      Examination)
                    </li>
                  </ul>
                </div>
              </li>
              <li className="time-line-list-element">
                <div class="timeline-content">
                  <h3 class="date">Expected June 2026</h3>
                  <h2>
                    {" "}
                    National Institute of Applied Sciences and Technology
                    (INSAT) | Tunis, Tunisia{" "}
                  </h2>
                  <h1>Bachelor of Software Engineering</h1>

                  <ul>
                    <p>Achievements: </p>
                    <li>Second Year: Ranked 8th out of 85 students.</li>
                    <li>
                      Freshman Year: Achieved a remarkable 6th out of 450.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="career-subsection">
        <h1 className="career-title">Professional Experience</h1>
        <div class="career-container">
          <div class="timeline">
            <ul className="time-line-list">
              <li className="time-line-list-element">
                <div class="timeline-content">
                  <h3 class="date"> July 2022 - August 2022</h3>
                  <h2> Tunisie Autoroutes | Tunis, Tunisia </h2>
                  <h1> Seasonal IT Technician</h1>

                  <ul>
                    <li>
                      Resolved Network Issues using tools like Putty, ensuring
                      connectivity.
                    </li>
                    <li>
                      Provided technical support to end-users, addressing their
                      IT-related queries.
                    </li>
                    <li>
                      Resolved motorway toll payment system related errors using
                      MS SQL.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="time-line-list-element">
                <div class="timeline-content">
                  <h3 class="date">July 2023 - August 2023</h3>
                  <h2> Horizon Data | Tunis, Tunisia </h2>
                  <h1> Intern / Full-Stack Developer</h1>

                  <ul>
                    <li>
                      Developed an ERP system for a Learning Management System
                      (LMS).
                    </li>
                    <li>
                      Utilized Angular to create a user-friendly and responsive
                      interface.
                    </li>{" "}
                    <li>
                      Implemented the back-end using NestJS to ensure API
                      development and data management.
                    </li>
                    <li>
                      Designed and maintained the database using PostgreSQL.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
