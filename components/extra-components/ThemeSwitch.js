import StyledSwitch from "../../styled-components/styled-extra-components/ThemeSwitch.styled";
import { ThemeContext } from "styled-components";
import { useContext, useState, useEffect } from "react";
import Themes from "../../Themes";

const ThemeSwitch = () => {
    const [themeName, setThemeName] = useState("default");

    const [flex, setFlex] = useState("flex-start");

    useEffect(() => {
        if (window.matchMedia) {
            // Check if the dark-mode Media-Query matches
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setThemeName("dark");
                setFlex("flex-end");
            }
        }
    }, []);

    const theme = useContext(ThemeContext);

    const onChangeTheme = () => {
        if (themeName == "dark") {
            theme.setTheme(Themes.light);
            setThemeName("light");
            setFlex("flex-start");
        } else {
            theme.setTheme(Themes.dark);
            setThemeName("dark");
            setFlex("flex-end");
        }
    };

    return (
        <StyledSwitch flex={flex} onClick={onChangeTheme}>
            <div className="switch-container">
                <p className="switch-dot-container">
                    <p className="switch-dot-inner"></p>
                </p>
            </div>
        </StyledSwitch>
    );
};

ThemeSwitch.defaultProps = {
    status: "off",
};

export default ThemeSwitch;
