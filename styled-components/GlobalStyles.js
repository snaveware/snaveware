import { createGlobalStyle, ThemeConsumer } from "styled-components";

const globalStyles = createGlobalStyle`


    * {
        margin: 0;
        box-sizing: border-box;
        background: Transparent;
        padding: 0;
       
        
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        overflow-x: hidden;
        line-height: 1.8em;
    }

    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vh;
      }
      
     


    .text-muted {
        color: ${({ theme }) => theme.text_muted};
    }

    .keyword {
        color: ${({ theme }) => theme.colors.primary_muted};
    }

    .dropcap {
        font-size: ${({ theme }) => theme.sizes.font_lg};
    }

    .slider-placeholder {
        width: 90vw;
        min-height: 70vh;
        background-image: ${({ theme }) =>
            theme.gradients.Primary_Secondary_Accent};
        border-radius: 10px;
        margin: 1em auto;
    }

    p {
        font-size: ${({ theme }) => theme.sizes.font_md};
        color: ${({ theme }) => theme.sizes.font_muted};
        line-height: 1.3rem;
        
    }
    .transition-ok {
       transition: all 1s ease-in-out;
    }
    
    .transition-none {
        -webkit-transition-duration: 0s;
        -moz-transition-duration: 0s;
        -o-transition-duration: 0s;
        transition-duration: 0s;
    }
    .home-desktop-projects-slider {
        display: none;
    }

    .home-projects {
        padding: ${({ theme }) => theme.sizes.space_md} 0 ;
        
    }

    ::-webkit-scrollbar {
        width: 1.3em;
        height: 1.3em;
       
    }

    ::-webkit-scrollbar-track {
        background-image: ${({ theme }) => theme.gradients.Faded};
        margin-block: 0.5em;
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb {
        background-image: ${({ theme }) =>
            theme.gradients.Primary_Secondary_Accent};
        border-radius: 100vw;
    }

    @media screen and (max-width: 320px) {
        #__next {
          display: flex
        }
      }

    @media all and (min-width: 600px) {
        .home-mobile-projects-slider {
            display: none;
        }
        .home-desktop-projects-slider {
            display: block;
        }
        #__next {
            display: flex
          }
    }
`;

export default globalStyles;
