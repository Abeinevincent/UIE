import styled from "styled-components";
import pdctImage from "../assets/car.png";
import { ArrowForwardIosOutlined, Email, Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";


const Container = styled.div`
  
`;

const MainWrapper = styled.div`
  margin: 40px;
`

const DirectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
`

const DText = styled.p`
  font-size: 15px;
`

const PageHeader = styled.h1`
  text-align: center;
  margin: 30px;
`

const InitialText = styled.p`
  color: gray;
`

const OrderId = styled.div``

const Text = styled.div`
  margin-bottom: 10px;
`

const Input = styled.input`
  margin-bottom: 20px;
  width: 50%;
  border-radius: 25px;
  outline: none;
  border: 1px solid gray;
  &:hover, &:focus{
    border: 1px solid blue;
  }
  padding: 10px;
  ${mobile({
    width: "70%"
  })}
`

const TrackBtn = styled.button`
  background: #eee;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  &:hover {
    background-color: black;
    color: white;
  }
  `

const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  padding: 10px;
`

const FbWrapper = styled.div`
  margin-right: 15px;
  border-radius: 10px;
`

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const ProductHeader = styled.div`
`

const Heading = styled.h2`
  border-bottom: 1px solid #ddd;
  width: 50%;
  margin-bottom: 15px;
`

const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 30px;
`

const ProductContent = styled.div``

const PdctText = styled.p`
  margin-bottom: 20px;
`

const PdctPrice = styled.p`
 
`

const Span = styled.span`
  text-decoration: line-through;
`

const MainPrice = styled.span`
  color: red;
`



const OderTracker = () => {
  return (
    <Container>
      <MainWrapper>
        <DirectionWrapper>
          <DText style={{ marginRight: "20px" }}>Home</DText>
          <ArrowForwardIosOutlined style={{ fontSize: "12px", marginRight: "20px" }} />
          <DText>Track Your Order</DText>
        </DirectionWrapper>
        <PageHeader>Track Your Order</PageHeader>
        <InitialText>
          Tracking your order provides insight about the status of your order
          on our end before and during shipment. Get Information and
          Peace of Mind when you're receiving goods from Online Hardware
        </InitialText>
        <OrderId>
          <Text>Order ID</Text>
          <Input placeholder="Found in your order confirmation email" />
        </OrderId>
        <OrderId>
          <Text>Biling Email</Text>
          <Input placeholder="Email you used during checkout" />
        </OrderId>
        <TrackBtn>Track</TrackBtn>

        <SocialIconWrapper>
          <FbWrapper>
            <Link to="/">
              <Facebook
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px"
                }} />
            </Link>
          </FbWrapper>
          <FbWrapper>
            <Link to="/">
              <Twitter
                style={{
                  backgroundColor: "#00acee",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px"
                }} />
            </Link>
          </FbWrapper>
          <FbWrapper>
            <Link to="/">
              <Email
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px"
                }} />
            </Link>
          </FbWrapper>
          <FbWrapper>
            <Link to="/">
              <Pinterest
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px"
                }} />
            </Link>
          </FbWrapper>
          <FbWrapper>
            <Link to="/">
              <Instagram
                style={{
                  backgroundColor: "#833AB4",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px"
                }} />
            </Link>
          </FbWrapper>
        </SocialIconWrapper>
        <ProductHeader>
          <Heading>Products</Heading>
        </ProductHeader>
        <ProductWrapper>
          <Link to="/product/438745">
            <ProductImg src={pdctImage} />
          </Link>
          <ProductContent>
          <Link to="/products/438745" style={{textDecoration: "none", fontWeight: 600, color: "blue" }}>
            <PdctText>Mercedes Benz</PdctText>
          </Link>
            <PdctPrice><MainPrice>$45,000</MainPrice> <Span>$57,500</Span></PdctPrice>
          </ProductContent>
        </ProductWrapper>
      </MainWrapper>
    </Container>
  )
}

export default OderTracker;
