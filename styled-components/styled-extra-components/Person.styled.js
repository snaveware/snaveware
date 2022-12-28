import styled from "styled-components";

const StyledPerson = styled.div`
    background-image: ${({ theme }) =>
        theme.gradients.Primary_Secondary_Accent};
    padding: ${({ theme }) => theme.sizes.space_sm};
    border-radius: 10px;
    margin: ${({ theme }) => theme.sizes.space_md};

    .person-inner-container {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.background};
        padding: ${({ theme }) => theme.sizes.space_md};
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        border-radius: 10px;
        min-height: 8em;

        .profile-image {
            width: 6em;
            height: 6em;
            min-width: 6em;
            min-height: 6em;
            max-width: 6em;
            max-height: 6em;
            margin: ${({ theme }) => theme.sizes.space_md};
            padding: 1px;
            border: 1px dashed ${({ theme }) => theme.colors.accent};
            border-radius: 50%;
        }

        .person-content {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;
            padding: ${({ theme }) => theme.sizes.space_md};

            h3,
            p {
                text-align: left;
                width: 100%;
                padding: ${({ theme }) => theme.sizes.space_sm} 0px;
            }

            h3 {
                color: ${({ theme }) => theme.text};
                font-weight: 600;
                font-size: ${({ theme }) => theme.sizes.font_md};
            }

            p {
                color: ${({ theme }) => theme.colors.primary};
                font-size: ${({ theme }) => theme.sizes.font_md};
                font-weight: 400;
            }
        }
    }

    @media all and (min-width: 600px) {
        width: 60%;
        margin: ${({ theme }) => theme.sizes.space_md} auto;
    }
`;

export default StyledPerson;
