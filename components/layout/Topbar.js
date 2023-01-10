import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitterSquare,
} from "react-icons/fa";
import Config from "../../Config";
import StyledTopbar from "../../styled-components/styled-layout/Topbar.styled";

const Topbar = () => {
    return (
        <StyledTopbar>
            <a className="topbar-email" href={"mailto:" + Config.EMAIL}>
                {Config.EMAIL}
            </a>

            <div>
                {/* <a href={Config.FACEBOOK} target="_blank">
                    <FaFacebook className="fa fa-facebook" />
                </a> */}
                <a href={Config.INSTAGRAM} target="_blank">
                    <FaInstagram className="fa fa-instagram" />
                </a>
                <a href={Config.LINKEDIN} target="_blank">
                    <FaLinkedin className="fa fa-linkedin" />
                </a>
                <a href={Config.TWITTER} target="_blank">
                    <FaTwitterSquare className="fa fa-twitter" />
                </a>
            </div>
        </StyledTopbar>
    );
};

export default Topbar;
