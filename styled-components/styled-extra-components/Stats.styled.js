import styled from "styled-components";

const StyledStats = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: ${({ theme }) => theme.sizes.space_lg};

    .stats-item,
    .stats-value-container,
    .stats-value-container-inner {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }

    .stats-item {
        margin: ${({ theme }) => theme.sizes.space_md};
    }

    .stats-value-container {
        background-image: ${({ theme }) =>
            theme.gradients.Primary_Secondary_Accent};
        border-radius: 35%;
        width: 6em;
        height: 5em;
    }

    .stats-value-container-inner {
        background: ${({ theme }) => theme.background_muted};
        border-radius: 35%;
        width: 5em;
        height: 4em;
    }

    .stats-projects-container {
        .stats-value-container {
            width: 7em;
            height: 6em;
        }

        .stats-value-container-inner {
            width: 6em;
            height: 5em;
        }
    }

    .stats-label,
    .stats-value {
        width: 100%;
        text-align: center;
        color: ${({ theme }) => theme.text_muted};
        font-weight: 600;
    }

    .stats-label {
        font-size: ${({ theme }) => theme.sizes.font_md};
        margin: ${({ theme }) => theme.sizes.font_sm};
    }

    .stats-value {
        font-size: ${({ theme }) => theme.sizes.font_lg};
    }

    @media all and (min-width: 600px);
     {
        width: 50%;
        margin: auto;
    }

    @media all and (min-width: 795px) {
        width: 70%;
        margin: auto;
    }
`;

export default StyledStats;
