import React from "react";
import styled from "styled-components";

import LogoImage from "../../assets/Logo.png";
import colors from "../../lib/colors";
import { BiMenu } from "react-icons/bi";

function index() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={LogoImage.src} alt={"logo"} />
      </LogoContainer>
      <List>
        <li className="li">About</li>
        <li className="li">FAQs</li>
        <li className="li">Sign Up</li>
      </List>
      <MenuIcon>
        <BiMenu size={30} color={colors.white} />
      </MenuIcon>
    </HeaderContainer>
  );
}

export default index;

// header styles
const HeaderContainer = styled("header")`
  justify-content: space-between;
  background-color: ${colors.black};
  align-items: center;
  display: flex;
  width: 100%;
`;

const LogoContainer = styled("div")`
  justify-content: center;
  object-fit: contain;
  align-items: center;
  display: flex;
  height: 40px;
  width: 70px;
`;

const Logo = styled("img")`
  height: 100%;
  width: 100%;
`;

const List = styled("ul")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  width: 30%;
  @media (max-width: 750px) {
    display: none;
  }

  .li {
    color: ${colors.secondary};
    cursor: pointer;
  }
`;

const MenuIcon = styled("div")`
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`;
