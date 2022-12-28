import ProjectSlide from "./ProjectSlide";
import {
    FaAcquisitionsIncorporated,
    FaAngleLeft,
    FaAngleRight,
} from "react-icons/fa";
import StyledProjectsCarousel from "../../../styled-components/styled-sliders/styled-projects-sliders/ProjectCarousel.styled";
import { useEffect, useMemo, useRef, useState } from "react";

const ProjectCarousel = ({ projects }) => {
    let slidesInnerContainer = useRef();
    let slidesOuterContainer = useRef();

    const [counter, setCounter] = useState(2);
    const [action, setAction] = useState("next");
    const [isCirculation, setIsCirculation] = useState(false);
    const [autoslide, setAutoSlide] = useState(true);

    const moveToNext = () => {
        if (counter >= projects.length + 2) {
            return;
        }
        setCounter(counter + 1);
        setAction("next");
    };

    const moveToPrevious = () => {
        if (counter <= 1) {
            return;
        }
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
        //console.log(counter);
        slidesInnerContainer.current.style.transition = "all 1s ease-in-out";
        if (isCirculation) {
            slidesInnerContainer.current.style.transition = "none";
        }

        if (action == "next") {
            slidesInnerContainer.current.style.transform = `translateX(-${
                slidesOuterContainer.current.offsetWidth * 0.3 * (counter - 1)
            }px)`;
        } else if (action == "previous") {
            slidesInnerContainer.current.style.transform = `translateX(${
                -slidesOuterContainer.current.offsetWidth * 0.3 * (counter - 1)
            }px)`;
        }
        setIsCirculation(false);

        if (counter == 1) {
            setTimeout(() => {
                setIsCirculation(true);
                setCounter(projects.length + 1);
            }, 1000);
        } else if (counter == projects.length + 2) {
            setTimeout(() => {
                setIsCirculation(true);
                setCounter(2);
            }, 1000);
        }

        if (autoslide) {
            setTimeout(() => {
                moveToNext();
            }, 5000);
        }
    }, [counter]);

    return (
        <StyledProjectsCarousel>
            <div className="projects-carousel-inner-container">
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
                        <ProjectSlide
                            classes={
                                isCirculation
                                    ? "transition-none"
                                    : "transition-ok"
                            }
                            project={projects[projects.length - 2]}
                            showContent={counter == 0 ? true : false}
                            adjustWithTranslate={
                                counter != 0 ? "translateY(-3em)" : ""
                            }
                            width={counter == 0 ? "40%" : "30%"}
                        />
                        <ProjectSlide
                            classes={
                                isCirculation
                                    ? "transition-none"
                                    : "transition-ok"
                            }
                            project={projects[projects.length - 1]}
                            showContent={counter == 1 ? true : false}
                            adjustWithTranslate={
                                counter != 1 ? "translateY(-3em)" : ""
                            }
                            width={counter == 1 ? "40%" : "30%"}
                        />

                        {projects.map((project, index) => {
                            return (
                                <ProjectSlide
                                    classes={
                                        isCirculation
                                            ? "transition-none"
                                            : "transition-ok"
                                    }
                                    project={project}
                                    width={counter == index + 2 ? "40%" : "30%"}
                                    showContent={
                                        counter == index + 2 ? true : false
                                    }
                                    adjustWithTranslate={
                                        counter != index + 2
                                            ? "translateY(-3em)"
                                            : ""
                                    }
                                    key={index}
                                />
                            );
                        })}

                        <ProjectSlide
                            classes={
                                isCirculation
                                    ? "transition-none"
                                    : "transition-ok"
                            }
                            project={projects[0]}
                            showContent={
                                counter == projects.length + 2 ? true : false
                            }
                            width={
                                counter == projects.length + 2 ? "40%" : "30%"
                            }
                            adjustWithTranslate={
                                counter != projects.length + 2
                                    ? "translateY(-3em)"
                                    : ""
                            }
                        />
                        <ProjectSlide
                            classes={
                                isCirculation
                                    ? "transition-none"
                                    : "transition-ok"
                            }
                            project={projects[1]}
                            showContent={
                                counter == projects.length + 3 ? true : false
                            }
                            width={
                                counter == projects.length + 3 ? "40%" : "30%"
                            }
                            adjustWithTranslate={
                                counter != projects.length + 3
                                    ? "translateY(-3em)"
                                    : ""
                            }
                        />
                    </div>
                </div>
                <div
                    className="next-icon-container"
                    onClick={onNextIconClicked}
                >
                    <FaAngleRight />
                </div>
            </div>
            <div className="projects-carousel-dots-container">
                {projects.map((project, index) => {
                    return (
                        <p
                            className={`project-carousel-nav-dot ${
                                index == counter - 2 ? "active-dot" : ""
                            }`}
                            key={index}
                        ></p>
                    );
                })}
            </div>
        </StyledProjectsCarousel>
    );
};

export default ProjectCarousel;
