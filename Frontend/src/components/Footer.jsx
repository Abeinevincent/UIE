import {
  FacebookOutlined,
  HeadsetMicOutlined,
  RssFeedOutlined,
  Send,
  WhatsappOutlined
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImageImport from "../assets/log.png";
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 50px;
  ${mobile({
  marginTop: "30px"
})}
`

const NewsLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: blue;
  color: white;
  height: 80px;
  margin-right: 0;
  padding-right: 0;
  margin-top: 15px;
  ${mobile({
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
})}
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  color: white;
  padding: 15px;
  ${mobile({
    padding: "10px",
  })}
`

const TextInput = styled.input`
  width: 50%;
  border: none;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  &:focus {
    outline: none;
    text-decoration: none;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: black;
  border: none;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
  transition: all 0.3s ease-in-out;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeftText = styled.p`
  margin-left: 20px;
`

const RightText = styled.p`
  text-align: center;
`

const FooterMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px;
  margin-right: 0;
  padding-right: 0;
  margin-top: 20px;
  ${mobile({
  flexDirection: "column"
})}
`

const FLeft = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const LogoImage = styled.img`
  width: 200px;
  height: 90px;
  margin-bottom: 25px;
`


const LeftContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const LRContent = styled.div`
  margin-left: 15px;
`

const PText = styled.p``

const HText = styled.h3`
  font-weight: 500;
`


const ContactInfo = styled.div`
display: flex;
justify-content: flex-end;
  flex-direction: column;
  margin-top: 40px;
  `

const Heading = styled.h4`
  text-align:  left!important;
  margin-bottom: 10px;
  ${mobile({
    marginTop: "25px"
  })}
`

const CText = styled.p`
  opacity: 0.7;
`

const Icons = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 40px;
`

const FCenter = styled.div`
  flex: 1;
`

const FCLHeading = styled.h4`
  margin-bottom: 30px;
  ${mobile({
    marginBottom: "15px",
    marginTop: "20px"
  })}
`

const FCLText = styled.p`
  margin-bottom: 15px;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
`

const FRight = styled.div`
  flex: 1;
`

const CopyRight = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  
`

const PaymentImage = styled.img`
  width: 90%;
  height: 30px;
`






const Footer = () => {
  return (
    <Container>
      <NewsLetter>
        <Left>
          <Send style={{ transform: "rotate(-45deg)" }} />
          <LeftText>Signup to our NewsLetter</LeftText>
        </Left>
        <Right>
          <RightText>... and receive $20 for first shopping</RightText>
        </Right>
      </NewsLetter>
      <InputWrapper>
        <TextInput placeholder="Enter your email address" />
        <Button>Sign Up</Button>
      </InputWrapper>

      <FooterMain>
        <FLeft>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoImage src={logoImageImport} />
          </Link>
          <LeftContent>
            <HeadsetMicOutlined style={{ fontSize: "35px" }} />
            <LRContent>
              <PText>Got Questions ? Call us 24/7!</PText>
              <a href="tel: +4478405272951" style={{ textDecoration: "none", color: "black" }}>
                <HText>+44 78 405 272 951</HText>
              </a>
            </LRContent>
          </LeftContent>
          <ContactInfo>
            <Heading>Contact Info</Heading>
            <CText>
              Avix Business Centre 42 to 43,
              Hangley Rd
              BIRMINGHAM
              B16 8PE
            </CText>
            <Icons>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <FacebookOutlined style={{ marginRight: "15px" }} />
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <WhatsappOutlined style={{ marginRight: "15px" }} />
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <WhatsappOutlined style={{ marginRight: "15px" }} />
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <RssFeedOutlined style={{ marginRight: "15px" }} />
              </Link>
            </Icons>
          </ContactInfo>
        </FLeft>

        <FCenter>
          <FCLHeading>NAVIGATION</FCLHeading>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>About Us</FCLText>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Contact Us</FCLText>
          </Link>
          <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Shop</FCLText>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Cart</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Store Directory</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>News</FCLText></Link>
        </FCenter>
        <FCenter>
          <FCLHeading>CATEGORIES</FCLHeading>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Volkswagen Products</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Sino Truck</FCLText></Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Mercedes Products</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Toyota Products</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Heavy Vehicles</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Luxury Cars</FCLText>
          </Link>
        </FCenter>
        <FRight>
          <FCLHeading>CUSTOMER CARE</FCLHeading>

          <Link to="/myaccount" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>My Account</FCLText>
          </Link>
          <Link to="/trackorder" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Track Your Order</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Customer Service</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>FAQS</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>How it Works</FCLText>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <FCLText>Terms and Condtions</FCLText>
          </Link>
          <Link to="/payments" style={{ textDecoration: "none", color: "black" }}>
            <PaymentImage
              src={"https://www.onlinehardware.co/wp-content/uploads/2017/02/patment-icon.png"}
            />
          </Link>
        </FRight>
      </FooterMain>
      <CopyRight>
        © Universal Imports & Exports (UK) Ltd - All Rights Reserved
      </CopyRight>
    </Container>
  )
}

export default Footer;
