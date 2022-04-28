import styled from "styled-components";
import ProductsList from "../components/ProductsList";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
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

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


const Products = () => {
  return (
    <Container>
      <MainWrapper>
        <DirectionWrapper>
          <DText style={{ marginRight: "20px" }}>Home</DText>
          <ArrowForwardIosOutlined style={{ fontSize: "12px", marginRight: "20px" }} />
          <DText>Products</DText>
        </DirectionWrapper>
        <Title>Toyota Cars</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductsList />
      </MainWrapper>
    </Container>
  )
}

export default Products;
