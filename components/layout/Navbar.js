// import Link from "next/link";
import Switch from "../extra-components/ThemeSwitch";
import Logo from "../extra-components/Logo";

import StyledNavbar from "../../styled-components/styled-layout/Navbar.styled";
import Hamburger from "../extra-components/Hamburger";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [shouldDisplayNav, setShouldDisplayNav] = useState(false);

    return (
        <StyledNavbar shouldDisplayNav={shouldDisplayNav}>
            <div className="logo-container">
                <a href="" className="logo-a-tag">
                    <Logo />
                </a>
            </div>
            <div className="nav">
                <Link smooth="10" to={"services"}>
                    Services
                </Link>
                <Link smooth="10" to={"projects"}>
                    Projects
                </Link>
                <Link smooth="10" to={"about"}>
                    About
                </Link>
                <Link smooth="10" to={"contact"}>
                    Contact
                </Link>
            </div>
            <div className="hamburger-switch-container">
                <Switch />
                <Hamburger
                    shouldDisplayNav={shouldDisplayNav}
                    onToggleNavbar={() =>
                        setShouldDisplayNav((shouldDisplayNav) => {
                            return !shouldDisplayNav;
                        })
                    }
                />
            </div>
        </StyledNavbar>
    );
};

export default Navbar;
