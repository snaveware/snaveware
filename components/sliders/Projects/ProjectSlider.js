import ProjectSlide from "./ProjectSlide";
import {
    FaAcquisitionsIncorporated,
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa";
import StyledProjectsSlider from "../../../styled-components/styled-sliders/styled-projects-sliders/ProjectSlider.styled";
import { useEffect, useMemo, useRef, useState } from "react";

const ProjectSlider = ({ projects, showContent }) => {
    let slidesInnerContainer = useRef();
    let slidesOuterContainer = useRef();

    const [counter, setCounter] = useState(1);
    const [action, setAction] = useState("next");
    const [isCirculation, setIsCirculation] = useState(false);
    const [autoslide, setAutoSlide] = useState(true);

    const moveToNext = () => {
        if (counter > projects.length) {
            return;
        }
        // console.log("move to next", counter);
        setCounter(counter + 1);
        setAction("next");
    };

    const moveToPrevious = () => {
        if (counter <= 0) {
            return;
        }

        //console.log("move to previous", counter);
        setCounter(counter - 1);
        setAction("previous");
    };

    const onPrevIconClicked = () => {
        setAutoSlide(false);

        moveToPrevious();
    };

    const onNextIconClicked = () => {
        setAutoSlide(false);
        moveToNext();
    };

    useEffect(() => {
        slidesInnerContainer.current.style.transition = "all 1s ease-in-out";
        if (isCirculation) {
            slidesInnerContainer.current.style.transition = "none";
        }
        if (action == "next") {
            ///console.log("after next ", counter);
            slidesInnerContainer.current.style.transform = `translateX(-${
                slidesOuterContainer.current.offsetWidth * counter
            }px)`;
        } else {
            //console.log("after pervious ", counter);
            slidesInnerContainer.current.style.transform = `translateX(${
                -slidesOuterContainer.current.offsetWidth * counter
            }px)`;
        }

        // circulate();

        setIsCirculation(false);

        if (counter == 0) {
            setTimeout(() => {
                setIsCirculation(true);
                setCounter(projects.length);
            }, 1000);
        } else if (counter == projects.length + 1) {
            setTimeout(() => {
                setIsCirculation(true);
                setCounter(1);
            }, 1000);
        }

        if (autoslide) {
            setTimeout(() => {
                moveToNext();
            }, 5000);
        }
    }, [counter]);

    return (
        <StyledProjectsSlider
            adjustNavIcons={showContent ? "translateY(-2em)" : ""}
        >
            <div className="projects-slider-inner-container">
                <div
                    className="prev-icon-container"
                    onClick={onPrevIconClicked}
                >
                    <FaAngleLeft />
                </div>

                <div
                    className="project-slides-outer-container"
                    id="outer-container"
                    ref={slidesOuterContainer}
                >
                    <div
                        className="project-slides-inner-container"
                        ref={slidesInnerContainer}
                    >
                        <div className="project-slide-outer-container">
                            <ProjectSlide
                                showContent={showContent}
                                project={projects[projects.length - 1]}
                            />
                        </div>
                        {projects.map((project, index) => {
                            return (
                                <div
                                    className="project-slide-outer-container"
                                    key={index}
                                >
                                    <ProjectSlide
                                        project={project}
                                        showContent={showContent}
                                    />
                                </div>
                            );
                        })}
                        <div className="project-slide-outer-container">
                            <ProjectSlide
                                project={projects[0]}
                                showContent={showContent}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="next-icon-container"
                    onClick={onNextIconClicked}
                >
                    <FaAngleRight />
                </div>
            </div>
            <div className="projects-slider-dots-container">
                {projects.map((project, index) => {
                    return (
                        <p
                            className={`project-slider-nav-dot ${
                                counter == index + 1 ? "active-dot" : ""
                            }`}
                            key={index}
                        ></p>
                    );
                })}
            </div>
        </StyledProjectsSlider>
    );
};

ProjectSlider.defaultProps = {
    showContent: true,
};

export default ProjectSlider;
