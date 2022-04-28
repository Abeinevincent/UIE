import styled from "styled-components";
import SliderComp from "../components/slider/SliderComp";
import Products from "../components/Products";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductListItems from "../components/ProductListItems";
import { featuredItems, onsaleItems, topRatedItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  overflow-x: hidden!important;
`;

const MainWrapper = styled.div`
  margin: 30px;
`;

const CatHeader = styled.div`
  width: 100%;
  height: auto;
  background-color: #eee;
  display flex;
  align-items: center;
  jutify-content: flex-end;
  margin-top: 20px;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;  
  margin-top: 10px;
  
`

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    justifyContent: "flex-start",
    marginLeft: "20px"
  })}
`

const List = styled.ul`
  margin: 10px;
  list-style: none;
  padding: 0;
  display: flex;
  border-bottom: 1px solid #ddd;
  width: 50%;
  align-items: center;
  justify-content: center;
`

const ListItem = styled.li`
  padding: 7px;
  font-size: 16px;
  margin-right: 5px;
  cursor: pointer;
  border-bottom: ${props => props.active ? "2px solid blue" : "none"};
  font-weight: ${props => props.active ? 600 : 500};
`

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px;
  ${mobile({
    padding: "5px",
    flexDirection: "column",   
  })}
`

const Item = styled.div`
  background: white;
  margin: 5px;
  width: 30%;
  padding: 10px;
  ${mobile({
    width: "90%",   
  })}
`

const CarMake = styled.p`
  color: gray;
  font-size: 12px;
  margin-bottom: 5px;
`

const CarModel = styled.p`
  color: blue;
  font-size: 15px;
`

const CarImageWrappper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CarImage = styled.img`
  width: 80%;
`

const CarPrice = styled.div``

const OldPrice = styled.p`
  color: gray;
  font-size: 12px;
  margin-bottom: 5px;
  text-decoration: line-through;
`

const NewPrice = styled.p`
  color: red;
  font-size: 15px;
`






const Home = () => {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredItems)
        break;
      case "onsale":
        setData(onsaleItems)
        break;
      case "toprated":
        setData(topRatedItems)
        break;
      default:
        setData(featuredItems)
    }
  }, [selected])

  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "onsale",
      title: "On Sale"
    },
    {
      id: "toprated",
      title: "Top Rated"
    }
  ]



  return (
    <Container>
      <SliderComp />
      <MainWrapper>
        <Products />
        <ListWrapper>
          <List>
            {list.map(item => (
              <ProductListItems
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                selected={selected}
                id={item.id}
              />
            ))}
          </List>
        </ListWrapper>
        <CatHeader>
          <Right>
            <ItemContainer>
              {data.map(d => (
                <Item>
                  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <CarMake>{d.carMake}</CarMake>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <CarModel>{d.carModel}</CarModel>
                  </Link>
                  <CarImageWrappper>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                      <CarImage
                        src={d.img}
                        alt=""
                      />
                    </Link>
                  </CarImageWrappper>
                  <CarPrice>
                    <OldPrice>{d.oldPrice}</OldPrice>
                    <NewPrice>{d.newPrice}</NewPrice>
                  </CarPrice>
                </Item>
              ))}

            </ItemContainer>
          </Right>
        </CatHeader>
      </MainWrapper>
    </Container>
  )
}

export default Home;
