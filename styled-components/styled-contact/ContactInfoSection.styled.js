import styled from "styled-components";

const StyledContactInfoSection = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${({ theme }) => theme.sizes.space_md};
    background-image: ${({ theme }) =>
        theme.gradients.Primary_Secondary_Accent};
    margin: ${({ theme }) => theme.sizes.space_md};
    border-radius: 10px;

    .contact-info-item-container {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: ${({ theme }) => theme.sizes.space_sm};
        background: ${({ theme }) => theme.background};
        width: 100%;
        height: 100%;

        .contact-info-item-icon {
            font-size: 4rem;
            padding: ${({ theme }) => theme.sizes.space_sm};
        }
    }

    .contact-info-item-container a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
    }

    @media all and (min-width: 600px) {
        flex-direction: row;
        width: 70%;
        margin: ${({ theme }) => theme.sizes.space_md} auto;
        background-image: none;
        justify-content: center;
        align-items: center;

        .contact-info-item-container {
            jutify-content: center;
        }
    }
`;

export default StyledContactInfoSection;
