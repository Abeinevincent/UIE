import styled from "styled-components";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

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


const Contact = () => {
    return (
        <Container>
            <MainWrapper>
                <DirectionWrapper>
                    <DText style={{ marginRight: "20px" }}>Home</DText>
                    <ArrowForwardIosOutlined style={{ fontSize: "12px", marginRight: "20px" }} />
                    <DText>Contact</DText>
                </DirectionWrapper>
                <PageHeader>Contact</PageHeader>
            </MainWrapper>
        </Container>
    )
}

export default Contact;
