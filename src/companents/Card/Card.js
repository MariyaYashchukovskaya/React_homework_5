import React from "react"
import { StyledCard } from "./Card.style"
import logo from "../../images/logo192.png"

export default function Card({ shortTitle, date, time, title, description }) {
  return (
    <StyledCard>
      <div className="header">
        <img src={logo} alt="" />
        <p className="short-title">{shortTitle}</p>
      </div>
      <div className="info">
        <div className="date-time">
          <span className="date">{date}</span>
          <span className="time">{time}</span>
        </div>
        <p className="title">{title}</p>
        <div className="description">{description}</div>
      </div>
    </StyledCard>
  )
}
