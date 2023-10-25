import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Title = styled("h6")`
  font-size: 2.7em;  // Adjust size as needed
  font-weight: bold;  // Bold font for a sleek look
  background: -webkit-linear-gradient(right, #ffffff, #ffffff);  // White background
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow:
    0 0 5px #ffffff, 
    0 0 10px #fe0b04, 
    0 0 15px #ff416c, 
    0 0 18px #fe0b04, 
    0 0 20px #fe0b04;  // Neon glow effect
    0 0 22px #ffffff,
  text-align: center;  // Centered text
  margin: 0 auto;  // Centered block
`;


export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
