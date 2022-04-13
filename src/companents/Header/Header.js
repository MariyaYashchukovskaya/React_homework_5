import Badge from "../Badge/Badge"
import { BADGES } from "./consts"
import {
  StyledHeader,
  StyledHeaderBottom,
  StyledHeaderTop,
  Title,
} from "./Header.style"

function Header(props) {
  return (
    <StyledHeader>
      <StyledHeaderTop {...props}>
        <Title>Fronted stuff</Title>
        <p>Различные руководства и знания по веб-разработке</p>
      </StyledHeaderTop>
      <StyledHeaderBottom>
        {BADGES.map(({ icon, text }) => (
          <Badge icon={icon} key={text}>
            {text}
          </Badge>
        ))}
      </StyledHeaderBottom>
    </StyledHeader>
  )
}

export default Header
