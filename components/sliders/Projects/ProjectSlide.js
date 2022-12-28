import Link from "next/link";
import StyledProjectSlide from "../../../styled-components/styled-sliders/styled-projects-sliders/ProjectSlide.styled";
import PrimaryButton from "../../extra-components/PrimaryButton";

const ProjectSlide = ({
    project,
    showContent,
    width,
    adjustWithTranslate,
    classes,
}) => {
    return (
        <StyledProjectSlide
            className={classes}
            width={width}
            adjustWithTranslate={adjustWithTranslate}
        >
            <picture className="project-image">
                <source srcSet={project.imageUrl.webp} />
                <source srcSet={project.imageUrl.other} />
                <img alt={project.description} />
            </picture>

            {showContent && (
                <>
                    <div className="project-details">
                        <h3 className="project-name">{project.name}</h3>
                        <span className="pipe-separator">|</span>
                        <p className="project-description">
                            {project.description}
                        </p>
                    </div>
                    {project.btnLink && (
                        <PrimaryButton
                            text={project.btnText}
                            link={project.btnLink}
                        />
                    )}
                </>
            )}
        </StyledProjectSlide>
    );
};

const projectExample = {
    name: "Global",
    imageUrl: {
        webp: "/projects/global.webp",
        other: "/projects/global.jpg",
    },
    description: "A Shipping Management System",
    btnText: "Live System",
    btnLink: "http://global.snaveware.com",
    showContent: true,
};

ProjectSlide.defaultProps = {
    project: projectExample,
    showContent: true,
    width: "100%",
    adjustWithTranslate: " ",
    classes: "",
};

export default ProjectSlide;
