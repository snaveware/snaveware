import PrimaryButton from "../../components/extra-components/PrimaryButton";
import StyledLanding from "../../styled-components/styled-extra-components/Landing.styled";
import ProjectSlider from "../sliders/Projects/ProjectSlider";
import ProjectsData from "../../data/ProjectsData";
import { useEffect, useRef, useState } from "react";
import Services from "../../data/Services";
import { Link, animateScroll as scroll } from "react-scroll";

const Landing = () => {
    const typedTextElement = useRef();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let currentValue = "";
        for (let index = 0; index < Services[counter].name.length; index++) {
            setTimeout(() => {
                currentValue = currentValue + Services[counter].name[index];

                typedTextElement.current.innerText = currentValue;

                if (index == Services[counter].name.length - 1) {
                    setTimeout(() => {
                        if (counter == Services.length - 1) {
                            setCounter(0);
                        } else {
                            setCounter(counter + 1);
                        }
                    }, 1000);
                }
            }, 200 * index);
        }
    }, [counter]);

    return (
        <StyledLanding>
            <div className="landing-text">
                <h1 className="landing-heading">
                    Your Trusted Software Development Partner
                </h1>
                <p className="landing-typed-text" ref={typedTextElement}>
                    {" "}
                </p>
                <p className="landing-tagline">
                    Go digital with <span className="keyword">world-class</span>{" "}
                    solutions for your{" "}
                    <span className="keyword">
                        websites, mobile apps, and web-based system
                    </span>{" "}
                    needs. Get your own{" "}
                    <span className="keyword">Snaveware</span> today &#128521;
                    &#x1F609;
                </p>

                <div className="landing-btn-container">
                    <PrimaryButton
                        target={"_self"}
                        link={"contact"}
                        text={"Request A Quote"}
                    />
                </div>
            </div>

            <div className="landing-slider">
                <ProjectSlider projects={ProjectsData} showContent={false} />
            </div>
        </StyledLanding>
    );
};

export default Landing;
