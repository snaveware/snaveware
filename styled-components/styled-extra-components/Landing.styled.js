import styled from "styled-components";

const StyledLanding = styled.div`
    padding: ${({ theme }) => theme.sizes.space_md}
        ${({ theme }) => theme.sizes.space_sm};

    @keyframes bg-animation {
        0% {
            background-position: left;
        }
        50% {
            background-position: right;
        }
        100% {
            background-position: left;
        }
    }

    .landing-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: ${({ theme }) => theme.sizes.space_sm};
        margin-left: ${({ theme }) => theme.sizes.space_lg};
        .landing-heading,
        .landing-typed-text,
        .landing-tagline {
            text-align: left;
            padding: ${({ theme }) => theme.sizes.space_md} 0px;
        }

        .landing-heading {
            background: ${({ theme }) =>
                theme.gradients.Primary_Secondary_Accent};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
            font-size: 3rem;
            padding: ${({ theme }) => theme.sizes.space_sm} 0px;
            line-height: 1.3em;
            background-clip: text;
            color: transparent;
            background-size: 200%;
            transition: background-position 1s;
            animation: bg-animation 5s infinite alternate;
        }

        .landing-typed-text {
            color: ${({ theme }) => theme.colors.text};
            font-size: 1.3rem;
            font-weight: 600;
            white-space: nowrap;
            &::before {
                content: "";
                padding: 0 3px;
                margin: 0 5px;
                height: 100%;
                background-color: ${({ theme }) => theme.colors.accent};
            }

            &::after {
                content: "";
                padding: 0 1.5px;
                margin: 0 3px;
                height: 100%;
                background-color: ${({ theme }) => theme.colors.primary_muted};
            }
        }

        .landing-tagline {
            font-size: ${({ theme }) => theme.sizes.font_md};
            tex-align: left;
            width: 80%;
            line-height: 2em;
        }
        .landing-btn-container {
            padding: ${({ theme }) => theme.sizes.space_lg} 0px;
        }
    }

    .landing-slider {
        display: none;
    }

    @media all and (min-width: 600px) {
        min-height: 70vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: ${({ theme }) => theme.sizes.space_lg};
        width: 95%;
        margin: auto;
        padding: ${({ theme }) => theme.sizes.space_sm} 0px;

        .landing-text {
            align-items: flex-start;
            text-align: left;
            margin: ${({ theme }) => theme.sizes.space_sm} 0px;
            padding-left: ${({ theme }) => theme.sizes.space_md};

            .landing-heading,
            .landing-typed-text,
            .landing-tagline {
                text-align: left;
            }
            .landing-heading {
                font-size: 3.5rem;
            }
        }

        .landing-slider {
            display: block;
            width: 100%;
            min-width: 30em;
            min-height: 18em;
            border-radius: 10px;
            margin: ${({ theme }) => theme.sizes.space_lg} 0px;
        }
    }
`;

export default StyledLanding;
