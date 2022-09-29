import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100px;
    font-weight: bold;
    font-size: 14px;

    :hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    }

    ::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 90%;
      height: 2px;
      background-color: #80cef0;
      transform: scale(0);
      transition: transform 0.2s ease-in-out;
    }

    :hover::after {
      transform: scale(1);
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 180px);
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 80px;
  background-color: #004977;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: auto 0;
  }

  p {
    color: white;
    font-size: 11px;
  }
`;
