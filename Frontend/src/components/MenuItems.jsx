import styled from "styled-components";
import { ArrowForwardIosOutlined, KeyboardArrowDown } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Container = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  jutify-content: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: ${props => props.active ? 0 : "-300px"};
  z-index: 99999;
  overflow: auto;
`;

const List = styled.ul`
    list-style: none;
    width: 100%;
`

const ListItem = styled.li`
    margin-bottom: 5px;
    border-top: 1px solid #ddd;
    font-size: 15px;
    padding-right: 15px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0.7;
    &:hover{
        opacity: 1;
    }
`



const MenuItems = ({ menuOpen, setMenuOpen }) => {

    const elementRef = useRef();

    useEffect(() => {
        const divElement = elementRef.current;
       
        window.onclick = (e) => {
            if(e.target === divElement){
                setMenuOpen(false)
            }
        }
    }, [])

    return (
        <Container active={menuOpen} ref={elementRef}>
            <List>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/products">
                    <ListItem onClick={() => setMenuOpen(false)}>
                        Toyota Products
                        <KeyboardArrowDown />
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/products">
                    <ListItem onClick={() => setMenuOpen(false)}>
                        Volkswagen Products
                        <KeyboardArrowDown />
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/products">
                    <ListItem onClick={() => setMenuOpen(false)}>
                        Benz Products
                        <KeyboardArrowDown />
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/products">
                    <ListItem onClick={() => setMenuOpen(false)}>
                        Subaru Products
                        <KeyboardArrowDown />
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/products">
                    <ListItem onClick={() => setMenuOpen(false)}>
                        Sinotruck Products
                        <KeyboardArrowDown />
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: "none", color: "inherit" }} to="/products">
                    <ListItem onClick={() => setMenuOpen(false)}>
                        Bismakan Products
                        <KeyboardArrowDown />
                    </ListItem>
                </Link>
            </List>
        </Container >
    )
}

export default MenuItems;
