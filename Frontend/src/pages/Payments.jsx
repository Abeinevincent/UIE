import styled from "styled-components";
import { ArrowForwardIosOutlined, ArrowRight } from "@mui/icons-material";
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

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`

const CreditCard = styled.div`
  color: white;
  background: green;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const Paypal = styled.div`
  color: white;
  background: #009cde;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px; 
  padding: 10px;
  display: flex;
  jutify-content: center;
  align-items: center;
  &:hover{
    opacity: 0.8;
  }
`

const SpanText = styled.span``

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: "column"
  })}
`

const Left = styled.div`
  flex: 1;

`

const Right = styled.div`
  flex: 1;
  ${mobile({
    marginTop: "15px"
  })}
`

const UserInfoHeader = styled.h3`
  color: #009cde;
  // border-bottom: 2px solid orange;
`

const BillSpan = styled.span``

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  margin-left: 0;
  ${mobile({
    flexDirection: "column",
    textAlign: "left"
  })}
`

const BillingName = styled.div`
  flex: 1;
`

const Name = styled.div``

const BillingEmail = styled.div`
  flex: 1;
`

const NameInput = styled.input`
  padding: 5px;
  margin: 5px;
  margin-left: 0;
`

const SelectCountry = styled.select`
  padding: 5px;
  margin: 5px;
  margin-left: 0;
  ${mobile({
   textAlign: "left"
  })}
`

const Option = styled.option``

const Button = styled.button`
  padding: 10px;
  color: white;
  display: flex;
  background-color: green;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  width: 80%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;



const Payments = () => {
  return (
    <Container>
      <MainWrapper>
        <DirectionWrapper>
          <DText style={{ marginRight: "20px" }}>Home</DText>
          <ArrowForwardIosOutlined style={{ fontSize: "12px", marginRight: "20px" }} />
          <DText>Payment</DText>
        </DirectionWrapper>
        <PageHeader>
          <CreditCard>Credit Card</CreditCard>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Paypal><SpanText>Use Paypal</SpanText> <ArrowRight /></Paypal>
          </Link>
        </PageHeader>
        <ContentWrapper>
          <Left>
            <UserInfoHeader>
              <BillSpan style={{borderBottom: "2px solid orange"}}>Billing</BillSpan> Address
            </UserInfoHeader>
            <UserDetails>
              <BillingName>
                <Name>Full Name</Name>
                <NameInput placeholder="John Smith" />
              </BillingName>
              <BillingEmail>
                <Name>Email</Name>
                <NameInput placeholder="john@gmail.com" />
              </BillingEmail>
            </UserDetails>

            <UserDetails>
              <BillingName>
                <Name>Address</Name>
                <NameInput placeholder="122 Example St" />
              </BillingName>
              <BillingEmail>
                <Name>Select Country</Name>
                <SelectCountry>
                  <Option value="Uganda" selected>Select</Option>
                  <Option value="Uganda">Uganda</Option>
                  <Option value="Kenya">Kenya</Option>
                  <Option value="United Kingdom">United Kingdom</Option>
                  <Option value="United States">United States</Option>
                  <Option value="Burundi">Burundi</Option>
                  <Option value="Congo">Congo</Option>
                </SelectCountry>
              </BillingEmail>
            </UserDetails>

            <UserDetails>
              <BillingName>
                <Name>Town/City</Name>
                <NameInput placeholder="Las Vegas" />
              </BillingName>
              <BillingEmail>
                <Name>County/State/Province</Name>
                <NameInput placeholder="john@gmail.com" />
              </BillingEmail>

            </UserDetails>
            <UserDetails>
              <BillingName>
                <Name>Zip/Postal</Name>
                <NameInput placeholder="00000" />
              </BillingName>
            </UserDetails>

            <UserInfoHeader style={{marginTop: "20px"}}>
            <BillSpan style={{borderBottom: "2px solid orange"}}>Payme</BillSpan>nt Info
            </UserInfoHeader>
            <UserDetails>
              <BillingName>
                <Name>Credit Card Number</Name>
                <NameInput placeholder="0000 1111 0000 1111" />
              </BillingName>
              <BillingEmail>
                <Name>Billing Zip</Name>
                <NameInput placeholder="Enter Billing Zip Code" />
              </BillingEmail>
            </UserDetails>

            <UserDetails>
              <BillingName>
                <Name>Month & Year</Name>
                <NameInput type="month" />
              </BillingName>
              <BillingEmail>
                <Name>CVC</Name>
                <NameInput placeholder="123" />
              </BillingEmail>
            </UserDetails>

            <Button type="submit">Complete Checkout and Pay</Button>

          </Left>
          <Right>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 5000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 500.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -500.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 5000</SummaryItemPrice>
            </SummaryItem>
          </Summary>
          </Right>
        </ContentWrapper>
      </MainWrapper>
    </Container>
  )
}

export default Payments;
