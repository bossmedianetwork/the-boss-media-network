import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 0rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 80%;
  max-width: 520px;
  margin: auto;

  @media only screen and (max-width: 1045px) {
    margin-top: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: #4E4E4E;
  height: 0.5rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    text-align: center;
    padding-top: 0.5rem;
  }
`;

export const Title = styled("h6")`
  font-size: clamp(1.5rem, 2.2vw, 22px);
  line-height: 1.2em;
  font-weight: bold;
  text-align: left;
  
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: calc(-1rem - 1.5vw);
    margin-bottom: 3rem;
  }
`;

export const Content = styled("p")`
  font-size: clamp(1rem, calc(1rem + 0.5vw), 1.5rem);
  line-height: 1.4em;
  color: #707070;
  height: 20em; 
  text-align: left;
  
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: calc(1rem + 1vw);
  }
`;

export const Container = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
  
  @media only screen and (max-width: 768px) {
    padding: 0 .2rem;
  }
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled("div")`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;
