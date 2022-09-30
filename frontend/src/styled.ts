import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

  @media screen and (max-width: 930px) {
    color: #337ab7;

    > div {
      width: fit-content;
      height: fit-content;
      margin-right: 24px;
    }

    p {
      font-weight: normal;
      ::after {
        display: none;
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
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  a {
    text-decoration: none;
    font-size: 10px;
    font-weight: bold;
    color: white;
  }

  @media screen and (max-width: 930px) {
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 24px;
    padding-top: 12px;

    > div {
      margin-bottom: 12px;
    }
  }
`;

export const Home = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 76vh;
  overflow-x: hidden;
  background-color: #101010;

  > div:nth-of-type(1) {
    display: flex;
    position: absolute;
    height: 100%;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
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
  margin: 12px 0% 24px 0%;
  transition: transform 0.6s;

  img {
    width: 100vw;
    max-height: 85vh;
    height: auto;
    overflow: hidden;
  }
`;

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  background-color: #0f1218;
  box-sizing: border-box;
  border: 1px solid black;

  div:nth-of-type(1) {
    display: flex;
    align-items: center;
    margin-left: 24px;
    height: 100%;
  }

  div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 24px 0 auto;
    width: fit-content;
    height: 100%;
    color: #9d9d9d;
    font-size: 14px;

    :hover {
      color: white;
      cursor: pointer;
    }
  }

  a {
    display: flex;
    align-items: center;
    margin-right: 24px;
    text-decoration: none;
    color: #9d9d9d;
    font-size: 14px;

    ::before {
      content: "❯";
      font-size: 10px;
      margin-right: 6px;
    }

    :hover {
      color: white;
    }
  }
`;

export const Connection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;

  > div {
    position: relative;
    top: 36px;
    left: 50%;
    height: 330px;
    width: min(90%, 600px);
    background-color: white;
    animation: connection 0.5s forwards;
    border-radius: 6px;

    /* First line for presentation */

    > div:nth-of-type(1) {
      display: flex;
      align-items: center;
      height: 56px;
      border-bottom: 1px solid #e5e5e5;
      padding: 0 15px;
      color: #333;

      h4 {
        font-size: 18px;
        font-weight: 500;
      }

      button {
        background-color: none;
        border: none;
        margin-left: auto;
      }
    }

    /* Second line for User's information */

    > div:nth-of-type(2) {
      height: 208px;
      width: 100%;
      border-bottom: 1px solid #e5e5e5;

      form {
        display: flex;
        flex-direction: column;
        padding: 0 15px;

        div {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 6px;
          font-weight: bold;
          font-size: 14px;
          color: #333;
        }

        input {
          height: 34px;
          padding-left: 12px;
          border-radius: 3px;
          border: 1px solid #ccc;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          background-color: #e8f0fe;

          :focus {
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
              0 0 8px rgba(102, 175, 233, 0.6);
            outline: none;
            border-color: #66afe9;
          }
        }

        label input {
          height: auto;
          margin: 12px 6px 0 0;
        }
      }
    }

    /* 3eme line for submit */

    > div:nth-of-type(3) {
      display: flex;
      justify-content: flex-end;
      padding: 15px;

      /* Info Button */

      div:nth-of-type(1) {
        height: 20px;
        padding: 6px 12px;
        background-color: #5bc0de;
        font-size: 14px;
        color: white;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid transparent;

        :hover {
          background-color: #31b0d5;
          border-color: #269abc;
        }
      }

      /* Cancel Button */

      div:nth-of-type(2) {
        height: 20px;
        padding: 6px 12px;
        font-size: 14px;
        color: #333;
        margin-left: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;

        :hover {
          background-color: #e6e6e6;
          border-color: #adadad;
        }
      }

      /* Connection Button */

      div:nth-of-type(3) {
        height: 20px;
        padding: 6px 12px;
        font-size: 14px;
        color: white;
        margin-left: 10px;
        cursor: pointer;
        background-color: #337ab7;
        border: 1px solid #2e6da4;
        border-radius: 4px;

        :hover {
          background-color: #286090;
          border-color: #204d74;
        }
      }
    }
  }
`;
