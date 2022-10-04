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
    :hover a::after {
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

    a {
      text-decoration: none;
      color: #000;

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

      a {
        color: #337ab7;
        font-weight: normal;
      }
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
  min-width: 100%;
  min-height: calc(100vh - 232px);
  overflow-x: hidden;
  background-color: #101010;

  > div:nth-of-type(1) {
    display: flex;
    position: absolute;
    height: 100%;

    /* Button to change image */

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
  width: 100vw;
  margin: 12px 0% 24px 0%;
  transition: transform 0.6s;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }

  img {
    max-height: 85vh;
    height: auto;
    width: auto;
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
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;

  /* White Block */

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
        cursor: pointer;
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
      z-index: 100;

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

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: 48px;
  box-sizing: border-box;

  svg {
    stroke: white;
    stroke-width: 3px;
    opacity: 1;
  }
`;

export const About = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 232px);
  width: 100%;
  font-size: 24px;
  color: #333;

  /* Block */
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 3px;

    > div {
      display: flex;
      margin-top: 12px;
      width: 100%;
      box-sizing: border-box;
      padding: 12px;

      /* button Link */

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px 12px;
        text-decoration: none;
        background-color: #337ab7;
        border-radius: 4px;
        border: 1px solid #2e6da4;
        color: white;
        font-size: 14px;
        margin-left: auto;

        :hover {
          background-color: #286090;
          border-color: #204d74;
        }

        ::before {
          content: "❯";
          margin-right: 6px;
          font-weight: bold;
        }
      }
    }
  }

  > div:nth-of-type(2) {
    margin-left: 5vw;
    margin-right: 5vw;
  }

  @media screen and (max-width: 930px) {
    flex-direction: column;
    > div {
      width: 80vw;
      margin-top: 24px;
    }

    > div:last-child {
      margin-bottom: 48px;
    }
  }
`;

export const Goal = styled.main`
  min-height: calc(100vh - 232px);
  padding: 24px 60px;
  box-sizing: border-box;

  /* Title */

  > div:nth-of-type(1) {
    display: flex;
    align-items: flex-end;
    margin-bottom: 24px;

    h2 {
      font-weight: normal;
      font-size: 36px;
      color: #333;
      margin-right: 12px;
    }

    h4 {
      font-weight: normal;
      font-size: 23px;
      color: #777;
    }
  }

  /* Text */

  > div:nth-of-type(2) {
    color: #333;
    font-size: 14px;
    line-height: 20px;

    p {
      margin-bottom: 12px;
    }
  }
`;

export const History = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 232px);
  width: 100%;
  box-sizing: border-box;
  padding: 24px 60px;

  > div {
    /* Block History */

    > div {
      overflow: hidden;
      /* Title */

      > div:nth-of-type(1) {
        width: 100%;
        background-color: #f5f5f5;
        box-sizing: border-box;
        padding: 10px 15px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ddd;
        color: #23527c;
        font-size: 11px;
        line-height: 17px;
        color: #337ab7;
        cursor: pointer;

        :hover {
          color: #23527c;
          text-decoration: underline;
        }

        strong {
          font-size: 14px;
          line-height: 20px;
        }
      }

      /* Content */

      > div:nth-of-type(2) {
        border: 1px solid #ddd;
        border-top: none;
        margin-bottom: 6px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        font-size: 14px;
        line-height: 20px;
        color: #333;
        transition: max-height 0.6s;
        overflow: hidden;
      }
    }
  }
`;

export const Contact = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 232px);
  width: 100%;

  h2 {
    text-align: center;
    font-size: 34px;
    margin-top: 30px;
    color: #333;
  }

  > p {
    width: 50%;
    margin: 30px auto 0;
    line-height: 150%;
    font-size: 12px;
    text-align: center;
    color: #555555;
  }

  /* Contact block */

  > div {
    display: flex;
    margin: 24px auto;
    width: 50%;

    /* Other way to contact */

    > div:nth-of-type(1) {
      width: 50%;
      h4 {
        color: #333;
        font-size: 18px;
        margin-bottom: 12px;
      }

      > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 24px;

        a {
          margin-bottom: 6px;
        }
      }
      > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 24px;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #444;
          margin-bottom: 12px;
        }

        svg {
          margin-left: 12px;

          :hover {
            fill: #7cc4c5;
            transform: rotate(20deg) scale(1.2);
          }
        }
      }
    }

    /* send email */

    > div:nth-of-type(2) {
      margin-left: 20%;
      width: 100%;
      height: max-content;

      > form {
        border: 1px solid #555555;
        width: 100%;
        height: max-content;
        input {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          border: none;
          border-bottom: 1px solid #555555;
          color: #555555;
          padding: 18px;
          font-size: 14px;
          height: 48px;
          outline: none;
        }

        /* content */

        textarea {
          box-sizing: border-box;
          border: none;
          width: 100%;
          padding: 18px;
          outline: none;
          overflow-wrap: break-word;
          resize: vertical;
          height: 130px;
        }
      }

      > input {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        box-sizing: border-box;
        margin-top: 24px;
        border: 1px solid #555555;
        height: 50px;
        width: 75%;
        color: #555555;
        background-color: transparent;
        transition: all 0.4s;

        :hover {
          color: #000;
          background-color: #7cc4c5;
        }
      }
    }
  }

  @media screen and (max-width: 930px) {
    > div {
      flex-direction: column;
      width: 80%;

      > div:nth-of-type(1) {
        width: 100%;
      }
      > div:nth-of-type(2) {
        margin-left: 0;

        > input {
          background-color: #7cc4c5;
        }
      }
    }
  }
`;

export const Team = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 232px);
  width: 100%;
  padding: 24px 60px;
  box-sizing: border-box;

  > div {
    overflow: hidden;
    width: 85%;
    margin-bottom: 6px;

    /* Title */

    > div:nth-of-type(1) {
      width: 100%;
      background-color: #f5f5f5;
      padding: 10px 15px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border: 1px solid #ddd;
      color: #23527c;
      font-size: 13px;
      line-height: 20px;
      color: #337ab7;
      cursor: pointer;

      :hover {
        color: #23527c;
        text-decoration: underline;
      }
    }

    /* content */

    > div:nth-of-type(2) {
      border: 1px solid #ddd;
      border-top: none;
      margin-bottom: 3px;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      font-size: 14px;
      line-height: 20px;
      color: #333;
      transition: max-height 0.6s;
      overflow: hidden;

      /* Person Block */

      > div {
        border: 1px solid #ddd;
        border-radius: 3px;
        margin: 12px;
        padding: 12px;

        /* name */

        > p {
          font-size: 10px;
          font-weight: bold;
          color: #f5f5f5;
          width: fit-content;
          margin: 0 auto 18px;
          padding: 0px 6px;
          background-color: #5bc0de;
          border-radius: 3px;
        }

        /* Image */

        > div:nth-of-type(1) {
          margin: 0 auto;
          width: fit-content;
        }

        /* Information */

        > div:nth-of-type(2) {
          margin-top: 12px;
        }
      }
    }
  }
`;
