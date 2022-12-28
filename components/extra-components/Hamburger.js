import StyledHamburger from "../../styled-components/styled-extra-components/Hamburger.styled";

const Hamburger = ({ onToggleNavbar, shouldDisplayNav }) => {
    const toggleNav = () => {
        onToggleNavbar();
    };
    return (
        <StyledHamburger>
            <div
                onClick={toggleNav}
                className={`hamburger-container ${
                    shouldDisplayNav ? "show-x" : "show-hamburger"
                }`}
            >
                <p className="hamburger-line"></p>
                <p className="hamburger-line"></p>
                <p className="hamburger-line"></p>
            </div>
        </StyledHamburger>
    );
};

export default Hamburger;
