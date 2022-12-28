import styled from "styled-components";

const StyledTopbar = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    row-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.sizes.space_sm};
    padding-left: ${({ theme }) => theme.sizes.space_md};
    font-size: ${({ theme }) => theme.sizes.font_md};
    border-bottom: 1px ${({ theme }) => theme.background_muted} solid;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
    }

    .fa {
        font-size: 1.4rem;
        margin: ${({ theme }) => theme.sizes.space_sm};
    }

    .fa-facebook {
        color: #1b74e4;
    }

    .fa-linkedin {
        color: #0a66c2;
    }

    .fa-instagram {
        color: #f70262;
    }

    .fa-twitter {
        color: #1da1f2;
    }
`;

export default StyledTopbar;
