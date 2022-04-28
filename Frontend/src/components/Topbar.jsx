import { EmojiTransportationOutlined, Login, ShoppingBagOutlined, PermIdentityOutlined } from '@mui/icons-material'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  ${mobile({
  flexWrap: "wrap",
  justifyContent: "flex-start",
  padding: "10px",
  paddingLeft: "5px",
  marginBottom: "35px"
})}
`

const Left = styled.div`
${mobile({
  marginLeft: "5px"
})}
`

const Right = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${mobile({
  flexWrap: "wrap",
  padding: "10px",
  paddingLeft: 0,
  justifyContent: "flex-start"

})}
`

const Item = styled.div`
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  ${mobile({
  padding: "5px",
  paddingleft: 0,
  marginRight: 0
})}
  
`

const Span = styled.span``

const Topbar = () => {
  return (
    <Container>
      <Left>Welcome to Online Car Shop</Left>
      <Right>
        <Link to="/trackorder" style={{ textDecoration: "none", color: "black" }}>
          <Item>
            <EmojiTransportationOutlined style={{ fontSize: "16px" }} />
            <Span>Track Your Order</Span>
          </Item>
        </Link>
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <Item>
            <ShoppingBagOutlined />
            <Span>Shop</Span>
          </Item>
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <Item>
            <PermIdentityOutlined />
            <Span>My Account</Span>
          </Item>
        </Link>
        <Link to="/requestquote" style={{ textDecoration: "none", color: "black" }}>
          <Item>
            <Span>Request Quote</Span>
          </Item>
        </Link>
        <Link to="/payments" style={{ textDecoration: "none", color: "black" }}>
          <Item style={{ borderRight: "none" }}>
            <Span>Deposit Money</Span>
          </Item>
        </Link>
      </Right>
    </Container>
  )
}

export default Topbar;
