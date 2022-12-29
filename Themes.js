const ThemeStyles = {
    colors: {
        primary: "#B00AEA",
        // primary: "#1200ff",
        primary_muted: "#D08BFA",
        //primary_muted: "#00e5ff",
        secondary: "#FF202A",
        accent: "#F2B125",
        black: "#20061A",
        black_muted: "#4A0940",
        white: "#FFFFFF",
        white_muted: "#F6F6F6",
    },
    gradients: {
        Primary_Secondary_Accent:
            "linear-gradient(45deg, rgba(176,10,234,1) 0%, rgba(255,32,42,1) 70%, rgba(242,177,37,1) 100%)",
        Primary:
            "linear-gradient(45deg, rgba(176,10,234,1) 0%, rgba(208,139,250,1) 70%)",
        Faded: "linear-gradient(45deg, rgba(176,10,234,0.10410101540616246) 0%, rgba(255,32,42,0.09849877450980393) 70%)",
    },

    sizes: {
        space_lg: "2em",
        space_md: "0.8em",
        space_sm: "0.3em",

        font_lg: "1.8rem",
        font_md: "1.1rem",
        font_sm: "0.8rem",
    },
};

ThemeStyles.shadow = `0 0.1px 5px ${ThemeStyles.colors.primary_muted}`;

const Themes = {
    light: {
        ...ThemeStyles,
        background: ThemeStyles.colors.white,
        background_inverted: ThemeStyles.colors.black,
        background_muted: ThemeStyles.colors.white_muted,
        background_muted_inverted: ThemeStyles.colors.black_muted,
        text: ThemeStyles.colors.black,
        text_muted: ThemeStyles.colors.black_muted,
    },

    dark: {
        ...ThemeStyles,
        background: ThemeStyles.colors.black,
        background_inverted: ThemeStyles.colors.white,
        background_muted: ThemeStyles.colors.black,
        background_muted_inverted: ThemeStyles.colors.white_muted,
        text: ThemeStyles.colors.white,
        text_muted: ThemeStyles.colors.white_muted,
    },
};

Themes.default = Themes.light;

export default Themes;
