import WhoWeAreSection from "../components/about/WhoWeAreSection";
import ContactInfoSection from "../components/contact/ContactInfoSection";
import Landing from "../components/extra-components/Landing";
import Person from "../components/extra-components/Person";
import Stats from "../components/extra-components/Stats";
import WhateverYouNeedSection from "../components/services/WhateverYouNeedSection";
import Technologies from "../components/extra-components/Technologies";
import ProjectSlider from "../components/sliders/Projects/ProjectSlider";
import ProjectsData from "../data/ProjectsData";
import ProjectCarousel from "../components/sliders/Projects/ProjectCarousel";

const Home = () => {
    return (
        <>
            <Landing />
            <span
                id="services"
                style={{ position: "relative", top: -100 }}
            ></span>

            <WhateverYouNeedSection />

            <Stats />
            {/* <div className="slider-placeholder"></div> */}
            <span
                id="projects"
                style={{ position: "relative", top: -100 }}
            ></span>
            <div className="home-projects">
                <div className="home-mobile-projects-slider">
                    <ProjectSlider projects={ProjectsData} />
                </div>
                <div className="home-desktop-projects-slider">
                    <ProjectCarousel projects={ProjectsData} />
                </div>
            </div>

            <span id="about" style={{ position: "relative", top: -100 }}></span>
            <WhoWeAreSection />

            <span
                id="contact"
                style={{ position: "relative", top: -100 }}
            ></span>
            <ContactInfoSection />

            <Person />
            <Technologies />
        </>
    );
};

export default Home;
