import styled from "styled-components"

export const StyledCard = styled.div`
  border-radius: 15px;
  background-color: #3b3b3b;
  box-shadow: 0 2px 2px #000;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    padding: 20px;

    img {
      display: block;
      width: 100%;
      max-width: 100px;
      margin-right: 10px;
    }

    .short-title {
      font: italic 700 18px/1.25 Arial;

      @media screen and (max-width: 1023px) {
        font-size: 16px;
      }

      @media screen and (max-width: 599px) {
        font-size: 14px;
      }
    }
  }

  .info {
    padding: 20px;
    background-color: #2d1337;
    min-height: 209px;
  }

  .date-time {
    margin-bottom: 10px;
    font-size: 12px;
    color: #ccc;
  }

  .date:before {
    content: "🌌";
    margin-right: 5px;
  }

  .time:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin: 0px 5px 2px 5px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #fff;
  }

  .time:after {
    content: "🤓";
    margin-left: 5px;
  }

  .title {
    margin-bottom: 10px;
    font: 700 16px/1.25 Arial;
  }

  .description {
    color: #ccc;
  }
`
