import styled from "styled-components"

export const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;

  .card-wrapper {
    width: 32%;
    margin-top: 2%;

    &:nth-child(3n + 2) {
      margin: 2% 2% 0;
    }

    @media screen and (max-width: 1023px) {
      width: 49%;

      &:nth-child(3n + 2) {
        margin: 0;
      }

      &:nth-child(2n + 2) {
        margin: 2% 0 0 2%;
      }
    }

    @media screen and (max-width: 599px) {
      width: 100%;

      &:nth-child(2n + 2) {
        margin: 2% 0 0 0;
      }
    }
  }
`
