// import logo from './logo.svg';
import "./App.css"
import React from "react"
import Header from "../Header"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import CardList from "../CardList/CardList"

const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{ 
  background-color:rgb(48,49,53);  
}
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
  color: white;
`

function App() {
  return (
    <div className="App">
      <Global />
      <Container>
        <Header />
        <CardList />
      </Container>
    </div>
  )
}

export default App
