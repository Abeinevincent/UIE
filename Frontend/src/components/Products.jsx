import styled from "styled-components";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import CarImg from "../assets/car.png";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  overflow-x: hidden;
  margin-top: 15px;
`;

const HomePdctsWrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const Pdct = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #eee!important;
  width: 50%;
  ${mobile({
    width: "100%"
  })}
  margin-right: 10px;
`

const Left = styled.div`
  background-color: white;
  margin: 10px;
  width: 50%;
  display: flex;
  jutify-content: flex-start;
  align-items: center;
`

const Right = styled.div`
  padding: 15px;
  background-color: inherit!important;
  width: 50%;
`

const PdctImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`

const PdctDesc = styled.div``

const ShopBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`

const Span = styled.span`
  font-weight: 600;
`

const Break = styled.br``

const Products = () => {
  return (
    <Container>
      <HomePdctsWrapper>

        <Pdct>
          <Left>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctImage src="https://png.pngitem.com/pimgs/s/35-354913_car-car-png-hd-transparent-png.png" />
            </Link>
          </Left>
          <Right>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctDesc>
                CATCH BIG <Break /> DEALS ON THE <Break /> CAR PRODUCTS
              </PdctDesc>
            </Link>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ShopBtn>
                <Span>Shop Now</Span>
                <ArrowCircleRightOutlined tyle={{ color: "white", backgroundColor: "orange" }} />
              </ShopBtn>
            </Link>
          </Right>
        </Pdct>

        <Pdct>
          <Left>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctImage src="https://png.pngitem.com/pimgs/s/35-354913_car-car-png-hd-transparent-png.png" />
            </Link>
          </Left>
          <Right>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctDesc>
                CATCH BIG <Break /> DEALS ON THE <Break /> CAR PRODUCTS
              </PdctDesc>
            </Link>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ShopBtn>
                <Span>Shop Now</Span>
                <ArrowCircleRightOutlined tyle={{ color: "white", backgroundColor: "orange" }} />
              </ShopBtn>
            </Link>
          </Right>
        </Pdct>

        <Pdct>
          <Left>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctImage src="https://png.pngitem.com/pimgs/s/35-354913_car-car-png-hd-transparent-png.png" />
            </Link>
          </Left>
          <Right>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctDesc>
                CATCH BIG <Break /> DEALS ON THE <Break /> CAR PRODUCTS
              </PdctDesc>
            </Link>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ShopBtn>
                <Span>Shop Now</Span>
                <ArrowCircleRightOutlined tyle={{ color: "white", backgroundColor: "orange" }} />
              </ShopBtn>
            </Link>
          </Right>
        </Pdct>

        <Pdct>
          <Left>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctImage src="https://png.pngitem.com/pimgs/s/35-354913_car-car-png-hd-transparent-png.png" />
            </Link>
          </Left>
          <Right>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctDesc>
                CATCH BIG <Break /> DEALS ON THE <Break /> CAR PRODUCTS
              </PdctDesc>
            </Link>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ShopBtn>
                <Span>Shop Now</Span>
                <ArrowCircleRightOutlined tyle={{ color: "white", backgroundColor: "orange" }} />
              </ShopBtn>
            </Link>
          </Right>
        </Pdct>

        <Pdct>
          <Left>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctImage src="https://png.pngitem.com/pimgs/s/35-354913_car-car-png-hd-transparent-png.png" />
            </Link>
          </Left>
          <Right>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <PdctDesc>
                CATCH BIG <Break /> DEALS ON THE <Break /> CAR PRODUCTS
              </PdctDesc>
            </Link>
            <Link to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <ShopBtn>
                <Span>Shop Now</Span>
                <ArrowCircleRightOutlined tyle={{ color: "white", backgroundColor: "orange" }} />
              </ShopBtn>
            </Link>
          </Right>
        </Pdct>

      </HomePdctsWrapper>
    </Container>
  )
}

export default Products;
