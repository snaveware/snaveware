import styled from "styled-components";

const StyledHamburger = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    aligh-items: center;
    margin: 0 5px;
    .hamburger-line {
        width: 2.2em;
        height: 0.25em;
        margin: 0.2em;
        background-image: ${({ theme }) =>
            theme.gradients.Primary_Secondary_Accent};
    }

    @media all and (min-width: 600px) {
        display: none;
    }
`;

export default StyledHamburger;
