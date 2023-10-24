import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  padding: 2.5rem 1rem;
  @media screen and (max-width: 414px) {
    padding: 2rem 0.5rem;
  }
`;

export const Title = styled("h4")`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  text-transform: capitalize;
  color: #B8860B;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: #FFFFFF;

  &:hover,
  &:active,
  &:focus {
    color: #B8860B;
  }

  @media screen and (max-width: 414px) {
    padding-top: 10px;
  }
`;

export const Extra = styled("section")`
  background: #1C1C1C;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
  width: auto;
  padding-left: auto;
`;

export const Para = styled("div")`
  color: #FFFFFF;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: #B8860B;
    text-underline-position: under;
    text-decoration: #B8860B wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #FFFFFF;
  max-width: fit-content;
  border-bottom: 1px solid #FFFFFF;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #B8860B;
    color: #B8860B;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  text-align: center;
  transition: all 0.1s ease-in-out;
  margin-top: -68px;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 414px) {
    justify-content: flex-end;
    max-width: 100%;
    padding-top: 10px;

    a {
      display: block;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: #B8860B;
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #B8860B;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #B8860B;
  display: block;
  margin-bottom: 2rem;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1rem 0;
    margin-bottom: 1rem;
  }
`;

export const SocialLink = styled.a`
  margin-right: 20px;
  @media screen and (max-width: 414px) {
    margin-right: 10px;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
  @media screen and (max-width: 414px) {
    width: auto;
  }
`;