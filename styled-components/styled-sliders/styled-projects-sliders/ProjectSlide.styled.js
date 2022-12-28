import styled from "styled-components";

const StyledProjectSlide = styled.div`
    min-width: ${({ width }) => width};
    max-width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    transform: ${({ adjustWithTranslate }) => adjustWithTranslate};

    .project-image {
        padding: ${({ theme }) => theme.sizes.space_lg}
            ${({ theme }) => theme.sizes.space_md};
        margin: ${({ theme }) => theme.sizes.space_sm};
        border-radius: 10px;
        box-shadow: ${({ theme }) => theme.shadow};
        background-image: ${({ theme }) => theme.gradients.Faded};

        img {
            width: 100%;
            height: 100%;
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
            max-height: 100%;
            border-radius: 2px;
        }
    }

    .project-details {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        padding: ${({ theme }) => theme.sizes.space_md} 0;

        .project-name {
            color: ${({ theme }) => theme.colors.primary} !important;
            font-size: ${({ theme }) => theme.sizes.font_md};
            padding-left: ${({ theme }) => theme.sizes.space_md} !important;
        }

        .pipe-separator {
            color: ${({ theme }) => theme.colors.accent};
            font-size: ${({ theme }) => theme.sizes.font_lg};
            padding: ${({ theme }) => theme.sizes.space_sm};
        }

        .project-description {
            color: ${({ theme }) => theme.colors.font_muted};
            font-size: ${({ theme }) => theme.sizes.font_md};
        }
    }
`;

export default StyledProjectSlide;
