import styled from "styled-components";

const StyledTechnologies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin: ${({ theme }) => theme.sizes.space_md} auto;
    width: max-content;
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 20px;
    width: 95%;

    .heading {
        background-image: ${({ theme }) =>
            theme.gradients.Primary_Secondary_Accent};
        padding: ${({ theme }) => theme.sizes.space_md};
        border-radius: 20px 20px 0 0;
        padding: ${({ theme }) => theme.sizes.space_md};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        color: ${({ theme }) => theme.text};
        font-weight: 600;
        font-size: ${({ theme }) => theme.sizes.font_md};
        color: ${({ theme }) => theme.colors.white};
    }

    .technologies-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: ${({ theme }) => theme.sizes.space_sm};
        max-width: 100%;
        border-radius: 0 0 20px 20px;

        .technologies-item {
            border-radius: 0 0 25px 25px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            width: 100%;

            img,
            h3 {
                padding: ${({ theme }) => theme.sizes.space_md};
            }
        }
    }

    @media all and (min-width: 600px) {
        width: 60%;
        margin: ${({ theme }) => theme.sizes.space_md} auto;
        .technologies-container {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;

export default StyledTechnologies;
