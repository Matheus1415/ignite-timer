import { HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
            <Timer/>
        </NavLink>
        <NavLink to="/history" title="History">
            <Scroll/>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
