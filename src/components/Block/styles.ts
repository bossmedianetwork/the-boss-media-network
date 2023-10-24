import styled from "styled-components";

export const Title = styled("h6")`
  font-size: 2.9em;
  line-height: 1em;
  font-weight: bold;
  height: auto;
  width: auto;
  padding-top: 0rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-top: -5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Content = styled("p")`
  font-size: 1.5em;
  line-height: 1.6em;
  color: #707070;
  height: auto;
  margin-top: 0rem;
  text-align: left;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 5rem;
  }
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    padding: 0 0rem;
  }
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 600px;
  margin: 0 auto;
`;
