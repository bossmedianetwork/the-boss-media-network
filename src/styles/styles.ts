import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Motiva Sans Light', sans-serif;
        color: #FFFFFF;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #1C1C1C;
        overflow-x: hidden;
    }

    a:hover {
        color: #B8860B;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 1px solid #B8860B;
        background: #4E4E4E;
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;
        color: #FFFFFF;

        :focus-within {
            background: none;
            box-shadow: #FF0000 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Motiva Sans Bold', serif;
        color: #B8860B;  // Set heading color to gold
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #B0B0B0;  // Set paragraph color to light gray
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #8B0000;  // Set link color to blood red

        :hover {
            color: #B8860B;  // Set hover color to gold
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

        .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .image-container img {
        width: 100%;
        height: auto;
    }
`;
