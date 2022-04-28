import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import styled from "styled-components";

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

const About = () => {
  return (
    <Container>
      <Topbar />
      <Navbar />
      <MainWrapper>
        <DirectionWrapper>
          <DText style={{ marginRight: "20px" }}>Home</DText>
          <ArrowForwardIosOutlined style={{ fontSize: "12px", marginRight: "20px" }} />
          <DText>About Us</DText>
        </DirectionWrapper>
        <PageHeader>About Us</PageHeader>
      </MainWrapper>
      <Footer />
    </Container>
  )
}

export default About;
