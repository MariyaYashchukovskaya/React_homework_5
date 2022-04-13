import React from "react"
import Card from "../Card/Card"
import { StyledCardList } from "./CardList.style"
import { CARDS } from "./consts"

export default function CardList() {
  return (
    <StyledCardList>
      {CARDS.map((card, i) => (
        <div className="card-wrapper">
          <Card key={i} {...card} />
        </div>
      ))}
    </StyledCardList>
  )
}
