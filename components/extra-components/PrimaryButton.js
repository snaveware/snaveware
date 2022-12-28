import Config from "../../Config";
import StyledPrimaryButton from "../../styled-components/styled-extra-components/PrimaryButton.style";

// import { FaAngleRight } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const PrimaryButton = ({ text, link, target }) => {
    return (
        <StyledPrimaryButton>
            {target == "_blank" && (
                <a href={link} target={target}>
                    {text}
                </a>
            )}

            {target == "_self" && (
                <Link smooth="10" to={link}>
                    {text}
                </Link>
            )}
            {/* <div className="primary-btn-icon">
                <FaAngleRight />
            </div> */}
        </StyledPrimaryButton>
    );
};

PrimaryButton.defaultProps = {
    link: Config.HOMEURL,
    text: "Button",
    target: "_blank",
};

export default PrimaryButton;
