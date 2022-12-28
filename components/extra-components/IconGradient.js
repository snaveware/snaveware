import { useTheme } from "styled-components";

const IconGradient = ({ id, firstColor, secondColor }) => {
    const theme = useTheme();

    if (!id) {
        id = "primary-gradient";
    }

    if (!firstColor) {
        firstColor = theme.colors.primary_muted;
    }

    if (!secondColor) {
        secondColor = theme.colors.primary;
    }

    return (
        <svg width="0" height="0">
            <linearGradient
                id={id}
                x1="70%"
                y1="70%"
                x2="0%"
                y2="0%"
                gradientTransform="rotate(45)"
            >
                <stop stopColor={firstColor} offset="0%" />
                <stop stopColor={secondColor} offset="70%" />
            </linearGradient>
        </svg>
    );
};

export default IconGradient;
