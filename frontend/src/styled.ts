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

    :hover p::after {
      transform: scale(1);
    }

    p {
      ::after {
        content: "";
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 2px;
        background-color: #80cef0;
        transform: scale(0);
        transition: transform 0.2s ease-in-out;
      }
    }
  }
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

export const Home = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  overflow-x: hidden;

  > div:nth-of-type(1) {
    display: flex;
    position: absolute;
    height: 100%;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100%;

      :hover svg {
        opacity: 1;
      }

      :hover {
        cursor: pointer;
      }
    }

    > div:nth-of-type(1) {
      :hover {
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(0, 0, 0, 0.0001) 100%
        );
      }
    }

    > div:nth-of-type(2) {
      margin-left: calc(100vw - 200px);
      :hover {
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.0001) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }

      svg {
        transform: rotate(180deg);
      }
    }
  }

  svg {
    stroke: white;
    fill: white;
    opacity: 0.7;
  }
`;

export const ImageHome = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;

  img {
    width: 100vw;
    max-height: 85vh;
    height: auto;
    overflow: hidden;
  }
`;
