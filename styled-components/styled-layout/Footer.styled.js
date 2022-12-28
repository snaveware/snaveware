import styled from "styled-components";

const StyledFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    aligh-items: center;
    background-image: ${({ theme }) =>
        theme.gradients.Primary_Secondary_Accent};
    padding: ${({ theme }) => theme.sizes.space_md};

    p {
        color: ${({ theme }) => theme.colors.white};
    }
`;

export default StyledFooter;
