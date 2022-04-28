import styled from "styled-components";
import { ArrowForwardIosOutlined, Email, Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import pdctImage from "../assets/car.png";
import { Link } from "react-router-dom";


const Container = styled.div``

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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`

const BackBtn = styled.button`
  background: #eee;
  border-radius: 50px;
  padding: 15px 20px;
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







const RequestQuote = () => {
  return (
    <Container>
      <MainWrapper>
        <DirectionWrapper>
          <DText style={{ marginRight: "20px" }}>Home</DText>
          <ArrowForwardIosOutlined style={{ fontSize: "12px", marginRight: "20px" }} />
          <DText>Request Quote</DText>
        </DirectionWrapper>
        <PageHeader>Request Quote</PageHeader>
        <InitialText>
          Your list is empty, add products to the list to send a request
        </InitialText>
        <ButtonWrapper>
          <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
            <BackBtn>Return to Shop</BackBtn>
          </Link>
        </ButtonWrapper>
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
          <ProductImg src={pdctImage} />
          <ProductContent>
            <PdctText>Mercedes Benz</PdctText>
            <PdctPrice><MainPrice>$45,000</MainPrice> <Span>$57,500</Span></PdctPrice>
          </ProductContent>
        </ProductWrapper>
      </MainWrapper>
    </Container >
  )
}

export default RequestQuote;