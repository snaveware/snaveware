import styled from "styled-components";

const StyledNavbar = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    padding: ${({ theme }) => theme.sizes.space_sm}
        ${({ theme }) => theme.sizes.space_md};
    font-size: ${({ theme }) => theme.sizes.font_md};
    box-shadow: ${({ theme }) => theme.shadow};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    flex-direction: row;
    row-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    .logo-a-tag {
        display: flex;
        flex-direction: row;
        row-wrap: nowrap;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        max-width: 80%;
    }

    .hamburger-switch-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        aligh-items: center;
    }

    .nav {
        display: ${({ shouldDisplayNav }) =>
            shouldDisplayNav ? "flex" : "none"};
        position: absolute;
        right: 0;
        top: 10vh;
        margin-right: 5px;
        z-index: 100;
        border-radius: 10px;
        background: ${({ theme }) => theme.background};

        color: ${({ theme }) => theme.text};
        width: 50%;
        height: 60vh;
        flex-direction: column;
        flex-wrap: nowrap;
        box-shadow: ${({ theme }) => theme.shadow};

        a {
            text-decoration: none;
            padding: ${({ theme }) => theme.sizes.space_md};
            color: ${({ theme }) => theme.text_muted};
            font-size: ${({ theme }) => theme.sizes.font_md};
            font-weight: 600;
            display: block;
            width: 100%;
        }

        a:hover {
            background: ${({ theme }) => theme.colors.text};
        }
    }

    @media all and (min-width: 600px) {
        display: flex;
        flex-direction: row;
        row-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        padding-left: ${({ theme }) => theme.sizes.space_lg};

        .logo-container {
            padding-left: ${({ theme }) => theme.sizes.space_md};
        }
        .nav {
            display: block;
            width: max-content;
            position: static;
            z-index: 0;
            background: transprent;
            border: none;
            height: max-content;
            box-shadow: none;
            margin-right: 0px;

            a {
                display: inline;
                cursor: pointer;
                background: transparent;
            }
            a:hover {
                opacity: 0.8;
                background: transparent;
            }
        }
    }
`;

export default StyledNavbar;
