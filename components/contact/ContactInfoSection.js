import Config from "../../Config";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { BsPhoneVibrateFill } from "react-icons/bs";
import IconGradient from "../extra-components/IconGradient";
import StyledContactInfoSection from "../../styled-components/styled-contact/ContactInfoSection.styled";

const ContactInfoSection = () => {
    return (
        <StyledContactInfoSection>
            <IconGradient />
            <div className="contact-info-item-container">
                <FaEnvelope
                    className="contact-info-item-icon"
                    style={{ fill: "url(#primary-gradient)" }}
                />
                <a href={"mailto:" + Config.EMAIL}>{Config.EMAIL}</a>
            </div>
            <div className="contact-info-item-container">
                <BsPhoneVibrateFill
                    className="contact-info-item-icon"
                    style={{ fill: "url(#primary-gradient)" }}
                />
                <p>{Config.PHONENUMBER}</p>
            </div>
            <div className="contact-info-item-container">
                <FaGithub
                    className="contact-info-item-icon"
                    style={{ fill: "url(#primary-gradient)" }}
                />
                <a href={Config.GITHUB}> {Config.GITHUB}</a>
            </div>
        </StyledContactInfoSection>
    );
};

export default ContactInfoSection;
