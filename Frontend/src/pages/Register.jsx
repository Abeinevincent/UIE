import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/row-of-cars-in-parking-picture-id1158838160?k=20&m=1158838160&s=612x612&w=0&h=keQPVnRmf03-eDfHrxO77V1vR0TL4n3hn4ly6Fo1J9k=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  border-radius: 5px;
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const Span = styled.span``

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          <LoginWrapper>
            <Span>Already have an account?</Span>
            <Link to="/login" style={{ marginLeft: "5px", textDecoration: "none", color: "blue" }}> LOGIN</Link>
          </LoginWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
