import styled from "styled-components";

const StyledPrimaryButton = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover .primary-btn-icon {
        font-size: font-size: ${({ theme }) => theme.sizes.font_lg};
    }

    .primary-btn-icon {
        color: ${({ theme }) => theme.colors.white};
        padding: ${({ theme }) => theme.sizes.space_md};
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        border-left: 1px solid ${({ theme }) => theme.colors.white_muted};
        font-size: ${({ theme }) => theme.sizes.font_md};
    }

    .primary-btn-icon:hover {
        font-size: font-size: ${({ theme }) => theme.sizes.font_lg};
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        padding: ${({ theme }) => theme.sizes.space_md};
        font-size: ${({ theme }) => theme.sizes.font_md};
    }
`;

export default StyledPrimaryButton;
