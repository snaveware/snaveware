import styled from "styled-components";

const StyledProjectsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  .projects-carousel-inner-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 10px;

    .prev-icon-container,
    .next-icon-container {
      font-size: ${({ theme }) => theme.sizes.font_lg};
      padding: ${({ theme }) => theme.sizes.font_sm};
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-2em);
    }

    .project-slides-outer-container {
      overflow: hidden;
      width: 100%;
      border-radius: 10px;
      .project-slides-inner-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }

  .projects-carousel-dots-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    .project-carousel-nav-dot {
      margin: ${({ theme }) => theme.sizes.space_md};
      padding: 8px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.background};
      border: 2px solid ${({ theme }) => theme.text};
    }

    .active-dot {
      background-color: ${({ theme }) => theme.text};
      padding: 11px !important;
    }
  }
`;

export default StyledProjectsCarousel;
