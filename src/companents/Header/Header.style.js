import styled, { css } from "styled-components"

export const StyledHeaderTop = styled.div`
  background: rgb(104, 44, 140);
  background: linear-gradient(
    10deg,
    rgba(104, 44, 140, 1) 30%,
    rgba(144, 40, 133, 1) 50%,
    rgba(196, 34, 127, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  // background-color: ${(props) =>
    props.background || props.theme.colors.primary};
  // ${(props) =>
    props.qqq &&
    css`
      // background-color: blue;
      // color:white;
      //
    `}
`

export const StyledHeader = styled.header`
  border-radius: 15px;
  overflow: hidden;
`

export const StyledHeaderBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  background: #3b3b3b;
`

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 15px;
`
