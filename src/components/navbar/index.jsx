import React from "react";
import { Nav, NavLink, Bars, NavMenu, Logo } from "./style";


const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <Logo />
        <h6 className="logotext">ribbon</h6>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" exact activeStyle>
          Home
        </NavLink>
        <NavLink to="/activity" activeStyle>
          Activity
        </NavLink>
        <NavLink to="/wallet" activeStyle>
          Wallet
        </NavLink>
        <NavLink to="/market" activeStyle>
          Market
        </NavLink>
        <NavLink to="/earn" activeStyle>
          Earn
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
