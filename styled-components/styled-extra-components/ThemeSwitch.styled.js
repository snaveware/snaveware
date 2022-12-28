import styled from "styled-components";

const StyledThemeSwitch = styled.div`
    padding: 3px;
    background-image: ${({ theme }) =>
        theme.gradients.Primary_Secondary_Accent};
    border-radius: 30px;
    margin: 10px;

    .switch-container {
        padding: 0 3px;
        border-radius: 30px;
        justify-content: ${({ flex }) => flex};
        align-items: center;
        width: 2.5em;
        height: 1.5em;
        display: flex;
        background: ${({ theme }) => theme.background};
    }

    .switch-dot-container {
        width: 1.1em;
        height: 1.1em;
        border-radius: 50%;
        background-image: ${({ theme }) =>
            theme.gradients.Primary_Secondary_Accent};
        justify-content: center;
        align-items: center;
        display: flex;

        .switch-dot-inner {
            width: 0.7em;
            height: 0.7em;
            border-radius: 50%;
            background: ${({ theme }) => theme.background};
        }

        .show-x {
        }

        .show-hamburger {
        }
    }

    @media all and (min-width: 600px) {
        margin: 0;
    }
`;

export default StyledThemeSwitch;
