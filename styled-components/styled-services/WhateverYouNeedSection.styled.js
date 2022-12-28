import styled from "styled-components";

const StyledWhateverYouNeedSection = styled.div`
    padding: ${({ theme }) => theme.sizes.space_lg} ${({ theme }) =>
    theme.sizes.space_md};
    width: 100%;
    background: ${({ theme }) => theme.background_muted};
    

    .whatever-top {
        h2,
        p {
            text-align: center;
        }
        h2 {
            font-size: ${({ theme }) => theme.sizes.font_lg};
            color: ${({ theme }) => theme.colors.primary};
        }

        p {
            font-size: ${({ theme }) => theme.sizes.font_sm};
            color: ${({ theme }) => theme.colors.primary_muted};
            
        }
    }



    .service-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap
        justify-content: center;
        align-items: center;



        .service-icon-container {
            font-size: 3.5em;
            padding: ${({ theme }) => theme.sizes.space_sm};
            margin: ${({ theme }) => theme.sizes.space_sm};
            color: ${({ theme }) => theme.text};
            
            border-radius: 5px;
            width: 2em;
            height: 1.5em;
            display: flex;
            justify-content: center;
            align-items: center;


     
        }

        .service-content-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap
            justify-content: center;
            align-items: center;
            padding: ${({ theme }) => theme.sizes.space_sm} 0px;


            p,h3 {
                width: 100%;
                text-align: left;
                padding: ${({ theme }) => theme.sizes.space_sm} 0px;
                line-height: 1.8em;
            }
    
            
        }
    }



    @media all and (min-width: 600px) {
        
        .service-items-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: ${({ theme }) => theme.sizes.space_lg};
            margin: auto;
        }

        .service-item,
        .service-content-container,
        .service-icon-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;

        }

        .service-content-container {

            h3,p {
                width: 100% !important;
                text-align: center !important;
            }
        }
    }

    @media all and (min-width: 795px) {

        .service-items-container {
            grid-template-columns: 1fr 1fr 1fr;
            padding: 0 5em;
        }
       
        
    }
`;

export default StyledWhateverYouNeedSection;
