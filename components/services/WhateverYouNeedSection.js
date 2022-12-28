import { GrWordpress } from "react-icons/gr";
import { FaLaptopCode, FaServer } from "react-icons/fa";
import { BsTerminalFill, BsFillPhoneFill } from "react-icons/bs";
import { GiLightningSpanner } from "react-icons/gi";
import StyledWhateverYouNeedSection from "../../styled-components/styled-services/WhateverYouNeedSection.styled";
import IconGradient from "../extra-components/IconGradient";

const WhateverYouNeedSection = () => {
    return (
        <StyledWhateverYouNeedSection>
            <div className="whatever-top">
                <h2>Whatever You Need</h2>
                <p>Services</p>
            </div>
            <div className="service-items-container">
                <div className="service-item">
                    <IconGradient />
                    <div className="service-icon-container">
                        <GrWordpress
                            style={{ fill: "url(#primary-gradient)" }}
                        />
                    </div>

                    <div className="service-content-container">
                        <h3>Wordpress Websites</h3>
                        <p>
                            We design beautiful, and responsive Wordpress
                            websites that are meant to quickly give you an
                            online presence that drive new revenue streams at
                            little cost{" "}
                        </p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon-container">
                        <FaLaptopCode
                            style={{ fill: "url(#primary-gradient)" }}
                        />
                    </div>

                    <div className="service-content-container">
                        <h3>Custom Websites</h3>
                        <p>
                            We develop feature-rich, custom websites built to
                            not only meet your business goals but also provide
                            unique functionality that meets your business needs{" "}
                        </p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon-container">
                        <BsTerminalFill
                            style={{ fill: "url(#primary-gradient)" }}
                        />
                    </div>

                    <div className="service-content-container">
                        <h3>Web Systems</h3>
                        <p>
                            We develop fully-fledged systems directly accessible
                            through the browser and that fully serve unique
                            organizational needs, and can be scaled to increase
                            functionality{" "}
                        </p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon-container">
                        <BsFillPhoneFill
                            style={{ fill: "url(#primary-gradient)" }}
                        />
                    </div>

                    <div className="service-content-container">
                        <h3>Mobile Apps</h3>
                        <p>
                            We help businesses provide services and improve
                            customer experience with cross-platform mobile
                            applications that are both unique and integrate with
                            existing systems{" "}
                        </p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon-container">
                        <GiLightningSpanner
                            style={{ fill: "url(#primary-gradient)" }}
                        />
                    </div>

                    <div className="service-content-container">
                        <h3>Website Maintenance</h3>
                        <p>
                            We help businesses keep up with trends and avoid
                            unexpected problems by lifting the burden of
                            software maintenance and ensuring regular backups
                            and updates{" "}
                        </p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-icon-container">
                        <FaServer style={{ fill: "url(#primary-gradient)" }} />
                    </div>

                    <div className="service-content-container">
                        <h3>Hosting and Domain</h3>
                        <p>
                            Snaveware helps individuals, businesses, and
                            organizations with the hefty process of purchasing
                            domain names, hosting, and server configurations{" "}
                        </p>
                    </div>
                </div>
            </div>
        </StyledWhateverYouNeedSection>
    );
};

export default WhateverYouNeedSection;
