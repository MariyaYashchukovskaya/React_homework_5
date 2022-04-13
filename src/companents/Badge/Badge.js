import React from "react"
import { StyledBadge } from "./Badge.style"

export default function Badge({ icon, children }) {
  return (
    <StyledBadge>
      {icon && <img src={icon} alt="" />}
      {children}
    </StyledBadge>
  )
}
