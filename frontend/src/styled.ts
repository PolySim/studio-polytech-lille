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
    font-size: 11px;
    margin-bottom: 2px;
  }

  a {
    text-decoration: none;
    font-size: 11px;
    color: white;

    :hover {
      text-decoration: underline;
    }
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
  min-height: calc(100vh - 180px);
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

  > a {
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
  position: fixed;
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
        outline: none;
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

      div {
        display: flex;
        align-items: center;
      }

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
  min-height: calc(100vh - 180px);
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
  min-height: calc(100vh - 180px);
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

  @media screen and (max-width: 930px) {
    width: 100%;
    padding: 24px 24px;
  }
`;

export const History = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 180px);
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

  @media screen and (max-width: 930px) {
    width: 100%;
    padding: 24px 12px;
    > div {
      width: 95%;
    }
  }
`;

export const Contact = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 180px);
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
  min-height: calc(100vh - 180px);
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
      box-sizing: border-box;
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
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
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
        width: 200px;

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
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: fit-content;

          img {
            max-width: 100%;
            cursor: zoom-in;
            width: 200px;
            height: 200px;
            object-fit: cover;
          }
        }

        /* Information */

        > div:nth-of-type(2) {
          margin-top: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 930px) {
    width: 100%;
    padding: 24px 12px;
    > div {
      width: 95%;
    }
  }
`;

export const ImageTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: zoom-out;
  animation: animOpacity 0.8s forwards;
`;

export const Album = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 180px);
  height: 100%;

  /* NavBar */
  > div:nth-of-type(1) {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    height: fit-content;
    border-bottom: 1px solid #ccc;
    margin-top: 24px;
    margin-bottom: 24px;

    /* Year */
    div {
      padding: 10px 15px;
      font-size: 14px;
      color: #337ab7;
      cursor: pointer;

      :hover {
        background-color: #eee;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid #ddd;
        color: #23527c;
      }
    }
  }

  /* List Album */
  > div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    margin-bottom: 24px;

    /* Album */
    > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 120px;
      height: fit-content;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 12px;
      padding: 6px;
      transition: border 0.2s;
      cursor: pointer;
      text-decoration: none;
      color: #000;

      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
      }

      p {
        margin: 10px 0;
        text-align: center;
        font-size: 14px;
        color: #337ab7;
        transition: color 0.2s;
      }

      :hover {
        border: 1px solid #23527c;
        text-decoration: underline;
      }

      :hover p {
        color: #23527c;
      }
    }
  }
`;

export const AlbumSelect = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:nth-of-type(1) {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding-left: 12px;
    width: 85%;
    margin-top: 12px;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid #7cc4c5;

    > div:nth-of-type(1) {
      font-size: 36px;
      color: #333;
      margin-right: 12px;
    }
    > div:nth-of-type(2) {
      height: 100%;
      font-size: 19px;
      color: #999;
    }
  }
`;

export const ListImage = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 85%;

  > div {
    padding: 3px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 20px 12px;
    cursor: pointer;
    transition: border 0.2s;

    :hover {
      border: 1px solid #23527c;
    }

    > img {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
  }
`;

export const BigImage = styled.div`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: transform 0.6s;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;

    img {
      max-width: 100vw;
      max-height: 100vh;
    }
  }
`;

export const Cross = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 24px;
  width: 100%;
  padding-right: 24px;
  z-index: 1000;

  div {
    cursor: pointer;

    :hover svg {
      color: #fff;
      fill: #fff;
    }
  }
`;

export const Arrow = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 100vw;

  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    height: 100vh;
    width: 50vw;
    :focus {
      outline: none;
    }

    > div {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 100%;
      z-index: 100;
    }
  }

  button:nth-of-type(2) {
    justify-content: right;
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    color: #ddd;
    fill: #ddd;

    :hover {
      color: #fff;
      fill: #fff;
    }
  }
`;

export const PAF = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:nth-of-type(1) {
    margin-top: 24px;
    width: 85%;
    font-size: 14px;
    color: #333;
    padding-bottom: 12px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 24px;

    p {
      margin-bottom: 12px;
      line-height: 135%;
    }
  }

  > div:nth-of-type(2) {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 24px;

    > a {
      padding: 3px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 20px 12px;
      width: fit-content;
      height: fit-content;
      cursor: pointer;
      transition: border 0.2s;
      text-decoration: none;

      :hover {
        border: 1px solid #23527c;

        div {
          text-decoration: underline;
          p:nth-of-type(1) {
            color: #23527c;
          }
        }
      }

      img {
        width: 240px;
        height: auto;
      }

      div {
        display: flex;
        align-items: flex-end;

        p:nth-of-type(1) {
          font-size: 12px;
          margin-right: 6px;
          color: #337ab7;
          transition: color 0.2s;
        }
        p:nth-of-type(2) {
          font-size: 9px;
          color: #777;
        }
      }
    }
  }
`;

export const PAFArticle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 48px;

  > div {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding-left: 12px;
    width: 85%;
    margin-top: 12px;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid #7cc4c5;

    > div:nth-of-type(1) {
      font-size: 36px;
      color: #333;
      margin-right: 12px;
    }
    > div:nth-of-type(2) {
      height: 100%;
      font-size: 19px;
      color: #999;
    }
  }

  iframe {
    height: 90vh;
    width: 85vw;
  }
`;

export const ListVideo = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 180px);

  /* Categories and Years */
  > div:nth-of-type(1) {
    display: flex;
    width: 85%;
    margin: 12px 0;

    > div:nth-of-type(1) {
      display: flex;
      flex-wrap: wrap;
      margin-right: 12px;

      div {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 42px;
        padding: 10px 15px;
        font-size: 14px;
        color: #337ab7;
        border-bottom: 1px solid #ccc;
        cursor: pointer;

        :hover {
          background-color: #ddd;
          border-radius: 4px 4px 0 0;
          color: #23527c;
        }
      }
    }

    > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      margin-left: auto;

      select {
        background-color: #ddd;
        border-radius: 4px;
        padding: 6px;
      }
    }
  }

  /* List */
  > div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 85%;
    margin-top: 24px;

    > a {
      padding: 3px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: fit-content;
      width: min-content;
      margin-right: 24px;
      transition: border-color 0.2s;
      margin-bottom: 24px;
      cursor: pointer;
      text-decoration: none;

      :hover {
        border-color: #23527c;
      }

      :hover div {
        color: #23527c;
      }
      > img {
        width: 200px;
      }

      > div {
        margin-top: 12px;
        margin-bottom: 6px;
        text-align: center;
        word-wrap: normal;
        font-weight: bold;
        font-size: 14px;
        color: #337ab7;
        transition: color 0.2s;
      }
    }
  }
`;

export const Video = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 48px;
  min-height: calc(100vh - 228px);

  > div:nth-of-type(1) {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding-left: 12px;
    width: 85%;
    margin-top: 12px;
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid #7cc4c5;

    > div:nth-of-type(1) {
      font-size: 36px;
      color: #333;
      margin-right: 12px;
    }
    > div:nth-of-type(2) {
      height: 100%;
      font-size: 19px;
      color: #999;
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;

    iframe {
      width: 85vw;
      height: 48vw;
    }
  }
`;

export const News = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 48px;
  min-height: calc(100vh - 280px);

  > div {
    margin-top: 24px;
    width: 85%;
    margin-bottom: 24px;

    > div:nth-of-type(1) {
      display: flex;
      margin-bottom: 24px;

      > div {
        display: flex;
        align-items: center;
        height: 120px;
        margin-left: 24px;
        font-size: 36px;
        color: #333;
      }

      img {
        width: 120px;
        height: 120px;
        object-fit: cover;
      }
    }
    > div:nth-of-type(2) {
      font-size: 14px;
      color: #333;
      padding-left: 48px;
      margin-bottom: 12px;
    }

    > a {
      margin-left: 48px;
      font-size: 14px;
      color: #337ab7;
      transition: color 0.2s;
      text-decoration: none;

      :hover {
        color: #23527c;
        text-decoration: underline;
      }
    }
  }
`;

export const Legal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 232px);

  h2 {
    width: 85%;
    margin-top: 36px;
    font-size: 36px;
    color: #333;
  }

  h3 {
    margin-top: 36px;
    margin-bottom: 12px;
    font-size: 30px;
    color: #333;
  }

  > div {
    width: 85%;
    font-size: 14px;
    color: #333;

    > div {
      > div {
        a {
          color: #337ab7;
          transition: color 0.2s;
          text-decoration: none;

          :hover {
            color: #23527c;
            text-decoration: underline;
          }
        }
      }

      p {
        margin-bottom: 12px;
      }

      > div:nth-of-type(1),
      > div:nth-of-type(2),
      > div:nth-of-type(3) {
        margin-left: 12px;
        display: flex;
        align-items: center;
        margin-bottom: 3px;

        a {
          font-weight: bold;
          margin-right: 3px;
        }

        a:nth-of-type(2) {
          font-weight: normal;
          margin-right: 0px;
        }

        ::before {
          content: "";
          min-width: 6px;
          min-height: 6px;
          background-color: #333;
          border-radius: 50%;
          margin-right: 6px;
        }
      }

      > div:nth-of-type(4),
      > div:nth-of-type(5) {
        margin-top: 12px;
      }
    }
    > div:nth-of-type(2) {
      margin-bottom: 6px;
    }
    > div:nth-of-type(3) {
      display: flex;
      flex-direction: column;
      ::after {
        content: "";
        margin-top: 24px;
        height: 1px;
        width: 100%;
        background-color: #ddd;
      }
    }
    > div:nth-of-type(4) {
      margin-top: 24px;
      margin-bottom: 24px;
      font-weight: bold;
    }
  }
`;

export const Admin = styled.main`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 232px);
  height: auto;

  /* Nav Bar */
  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    width: 240px;
    min-height: 100%;
    background-color: #222;
    padding-left: 24px;
    padding-top: 24px;

    div,
    a {
      color: #ccc;
      margin-bottom: 24px;
      text-decoration: none;
    }
  }

  /* View */
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 36px;
    width: calc(100% - 240px);
    background-color: #eee;

    /* Welcome Message */
    > div:nth-of-type(1) {
      width: 90%;

      /* Welcome */
      > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        width: calc(100% - 2px);
        background-color: #ddd;
        font-weight: bold;
        border: 1px solid #bbb;
        border-radius: 4px 4px 0 0;

        /* Icon home */
        > div:nth-of-type(1) {
          padding: 12px;
          border-right: 1px solid #bbb;
        }

        /* Message */
        > div:nth-of-type(2) {
          font-size: 16px;
          padding-left: 12px;
        }
      }

      /* Message information */
      > div:nth-of-type(2) {
        padding: 20px 15px;
        border: 1px solid #bbb;
        border-top: none;
        border-radius: 0 0 4px 4px;
        background-color: #fff;

        > div:nth-of-type(1) {
          margin-bottom: 12px;
          font-size: 24px;
        }
        > div:nth-of-type(2) {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }

    /* Main */
    > div:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
      width: 90%;

      > div {
        width: 45%;
        margin-bottom: 24px;

        /* Welcome */
        > div:nth-of-type(1) {
          display: flex;
          align-items: center;
          width: calc(100% - 2px);
          background-color: #ddd;
          font-weight: bold;
          border: 1px solid #bbb;
          border-radius: 4px 4px 0 0;

          /* Icon home */
          > div:nth-of-type(1) {
            padding: 12px;
            border-right: 1px solid #bbb;
          }

          /* Message */
          > div:nth-of-type(2) {
            font-size: 16px;
            padding-left: 12px;
          }
        }
      }

      /* Link */
      > div:nth-of-type(1) {
        > div:nth-of-type(2) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 24px 0;
          background-color: #fff;
          border: 1px solid #ccc;
          border-top: none;
          border-radius: 0 0 4px 4px;
          > a {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 120px;
            background-color: #ddd;
            margin: 12px;
            padding: 12px;
            border: 1px solid #bbb;
            border-radius: 4px;
            text-align: center;
            text-decoration: none;
            color: #000;
            > div:nth-of-type(1) {
              margin-bottom: 12px;
            }
          }
        }
      }

      /* Stats */
      > div:nth-of-type(2) {
        > div:nth-of-type(2) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 24px 15px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-top: none;
          border-radius: 0 0 4px 4px;
        }
      }
    }
  }
`;

export const EditAlbum = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 204px);
  width: 100%;
  margin-top: 24px;

  > div:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin-bottom: 24px;

    /* Create or Modify Album */
    > div:nth-of-type(1) {
      width: 45%;
      height: fit-content;
      border: 1px solid #aaa;
      border-radius: 4px;

      /* Title */
      > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #ccc;
        border-bottom: 1px solid #aaa;

        /* SVG */
        > div:nth-of-type(1) {
          padding: 6px;
          border-right: 1px solid #aaa;
        }
        /* Text */
        > div:nth-of-type(2) {
          margin-left: 12px;
        }
      }
      /* Content */
      > div:nth-of-type(2) {
        padding: 15px 10px;

        /* Album photos */
        > div:nth-of-type(1) {
          font-size: 32px;
          padding-bottom: 6px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 12px;
        }

        /* Title */
        > div:nth-of-type(2) {
          margin-bottom: 12px;

          div {
            font-size: 18px;
            margin-bottom: 6px;
          }

          input {
            font-size: 16px;
            padding: 6px;
            width: 90%;
            outline: none;
          }
        }

        /* Date */
        > div:nth-of-type(3) {
          margin-bottom: 12px;

          div {
            font-size: 18px;
            margin-bottom: 6px;
          }

          input {
            font-size: 16px;
            padding: 6px;
            width: 90%;
            outline: none;
          }
        }

        /* Button */
        > div:nth-of-type(4) {
          display: flex;

          > div {
            font-size: 18px;
            padding: 12px;
            border-radius: 4px;
            cursor: pointer;
          }

          > div:nth-of-type(1) {
            background-color: rgb(124, 196, 197);
            border: 1px solid #337ab7;
          }
          > div:nth-of-type(2) {
            border: 1px solid #ccc;
            margin-left: 12px;
          }
        }
      }
    }

    > div:nth-of-type(2) {
      width: 45%;
      height: fit-content;
      border: 1px solid #aaa;
      border-radius: 4px;

      /* Title */
      > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #ccc;
        border-bottom: 1px solid #aaa;

        /* SVG */
        > div:nth-of-type(1) {
          padding: 6px;
          border-right: 1px solid #aaa;
        }
        /* Text */
        > div:nth-of-type(2) {
          margin-left: 12px;
        }
      }

      /* Content */
      > div:nth-of-type(2) {
        padding: 15px 10px;

        > div {
          margin-bottom: 24px;
          font-size: 18px;
          font-weight: bold;

          > div {
            margin-top: 12px;
            padding-left: 12px;
            font-size: 14px;
            font-weight: normal;

            > div {
              padding-left: 24px;
              margin-top: 12px;
            }
          }
        }
      }
    }
  }

  /* List Photo */
  > div:nth-of-type(2) {
    width: 85%;
    margin-bottom: 24px;
    border: 1px solid #aaa;
    border-radius: 4px;

    /* Title */
    > div:nth-of-type(1) {
      display: flex;
      align-items: center;
      width: 100%;
      background-color: #ccc;
      border-bottom: 1px solid #aaa;

      /* SVG */
      > div:nth-of-type(1) {
        padding: 6px;
        border-right: 1px solid #aaa;
      }
      /* Text */
      > div:nth-of-type(2) {
        padding-left: 12px;
      }
    }

    /* Content */
    > div:nth-of-type(2) {
      padding: 15px 10px;

      > div:nth-of-type(1) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        > div {
          margin: 12px 24px;
          padding: 6px;
          border: 1px solid #ccc;
          border-radius: 4px;

          > img {
            width: 160px;
            height: 160px;
            object-fit: cover;
          }

          /* Button */
          > div {
            display: flex;
            justify-content: center;
            margin-top: 12px;

            > div {
              cursor: pointer;
            }

            > div:nth-of-type(1) {
              padding: 6px 10px;
              margin-right: 12px;
              background-color: #bf1a2f;
              border-radius: 4px;
            }
            > div:nth-of-type(2) {
              padding: 6px 10px;
              margin-right: 12px;
              background-color: #f6ae2d;
              border-radius: 4px;
            }
            > div:nth-of-type(3) {
              padding: 6px 10px;
              border-radius: 4px;
            }
          }
        }
      }

      > div:nth-of-type(2) {
        margin-top: 24px;
        padding-left: 24px;

        > div {
          margin-left: 6px;
        }

        input {
          padding: 6px;
        }
      }
    }
  }
`;
