import styled from "styled-components";

const StyledWhoWeAreSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.sizes.space_lg} 0;
    position: relative;

    .who-top {
        h2,
        p {
            text-align: center;
        }
        h2 {
            font-size: ${({ theme }) => theme.sizes.font_lg};
            color: ${({ theme }) => theme.colors.primary};
        }

        p {
            font-size: ${({ theme }) => theme.sizes.font_sm};
            color: ${({ theme }) => theme.colors.primary_muted};
        }
    }

    .about-description {
        font-size: ${({ theme }) => theme.sizes.font_md};
        text-align: left;
        padding: ${({ theme }) => theme.sizes.space_sm}
            ${({ theme }) => theme.sizes.space_lg};
    }

    .faded-angles {
        position: absolute;
        z-index: -10;
    }

    .faded-angles-left {
        left: 0;
        transform: translateX(-50%);
    }

    .faded-angles-right {
        right: 0;
        transform: translateX(50%);
    }

    @media all and (min-width: 600px) {
        width: 80%;
        margin: auto;
    }

    @media all and (min-width: 795px) {
        width: 70%;
        margin: auto;
    }
`;

export default StyledWhoWeAreSection;
