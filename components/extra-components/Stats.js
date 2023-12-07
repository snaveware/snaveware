import { useEffect, useRef } from "react";
import StyledStats from "../../styled-components/styled-extra-components/Stats.styled";
import { useIsVisible } from "../../Hooks";

const Stats = () => {
  const containerRef = useRef();
  const clientsElement = useRef();
  const projectsElement = useRef();
  const yearsElement = useRef();

  const isVisible = useIsVisible(containerRef);

  useEffect(() => {
    for (let index = 1; index <= 15; index++) {
      setTimeout(() => {
        clientsElement.current.innerText = `${index}`;
      }, index * 200);
    }

    for (let index = 1; index <= 25; index++) {
      setTimeout(() => {
        projectsElement.current.innerText = `${index}`;
      }, index * 100);
    }

    for (let index = 1; index <= 4; index++) {
      setTimeout(() => {
        yearsElement.current.innerText = `${index}`;
      }, index * 200);
    }
  }, [isVisible]);

  return (
    <StyledStats ref={containerRef}>
      <div className="stats-item stats-clients-container">
        <div className="stats-value-container">
          <div className="stats-value-container-inner">
            <p>
              <span className="stats-value" ref={clientsElement}>
                15
              </span>
              <span className="stats-value">{" + "}</span>
            </p>
          </div>
        </div>

        <p className="stats-label">Happy Clients</p>
      </div>

      <div className="stats-item stats-projects-container">
        <div className="stats-value-container">
          <div className="stats-value-container-inner">
            <p>
              <span className="stats-value" ref={projectsElement}>
                25
              </span>
              <span className="stats-value">{" + "}</span>
            </p>
          </div>
        </div>

        <p className="stats-label">Competed Projects</p>
      </div>

      <div className="stats-item stats-years-container">
        <div className="stats-value-container">
          <div className="stats-value-container-inner">
            <p>
              <span className="stats-value" ref={yearsElement}>
                4
              </span>
              <span className="stats-value">{" + "}</span>
            </p>
          </div>
        </div>

        <p className="stats-label">Years of Excellence</p>
      </div>
    </StyledStats>
  );
};

export default Stats;
