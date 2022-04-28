import styled from "styled-components";
import {
  Menu,
  PermIdentityOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
  ShoppingCartOutlined
} from '@mui/icons-material';
import LogoImageImport from "../assets/log.png"
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { useState } from "react";
import { Badge } from "@mui/material";
import {  mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 45px;
  background-color: blue;
  color: white;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const MenuWrapper = styled.div`
  margin-left: 40px;
`

const LogoImage = styled.img`
  width: 80px;
  height: 35px;
  margin-left: 20px;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const IconWrapper = styled.div`
  margin-left: 20px;
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = ({ menuOpen, setMenuOpen }) => {

  

  return (
    <Container>
      <Left>
        <MenuWrapper>
          <Menu
            style={{ cursor: "pointer" }}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </MenuWrapper>
        <Link to="/">
          <LogoImage src={LogoImageImport} />
        </Link>
      </Left>
      <Right style={{paddingRight: "20px"}}>
        <IconWrapper>
          <SearchOutlined />
        </IconWrapper>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <IconWrapper>
            <PermIdentityOutlined />
          </IconWrapper>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
          <IconWrapper>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </IconWrapper>
        </Link>
      </Right>
    </Container>
  )
}

export default Navbar;
