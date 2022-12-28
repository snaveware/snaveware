import StyledWhoWeAreSection from "../../styled-components/styled-about/WhoWeAreSection.styled";

const WhoWeAreSection = () => {
    return (
        <StyledWhoWeAreSection>
            <div className="who-top">
                <h2>Who We Are</h2>
                <p>About</p>
            </div>
            <img
                alt=""
                src={"/FadedAngles.png"}
                className="faded-angles faded-angles-left"
            />

            <article className="about-description">
                <span className="dropcap">S</span>naveware Technologies is a{" "}
                <span className="keyword">Software Service Agency</span> based
                in Nairobi, Kenya. It was conceived as a brainchild of Evans, A
                software developer with a wealth of knowledge in website design,
                system development and mobile app development accross various
                technology suites. Our <span className="keyword">goal</span> is
                to{" "}
                <span className="keyword">
                    build mutually beneficial relationships
                </span>{" "}
                that offer immense business value to our customers while helping
                us build our craft. To learn more, please{" "}
                <span className="keyword">get in touch</span> with us.
            </article>
            <img
                alt=""
                src={"/FadedAngles.png"}
                className="faded-angles faded-angles-right"
            />
        </StyledWhoWeAreSection>
    );
};

export default WhoWeAreSection;
