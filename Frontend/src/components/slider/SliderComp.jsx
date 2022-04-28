import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./slider-styles.css";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  `;

const SliderComp = () => {

  const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://www.indiacarnews.com/wp-content/uploads/2022/01/Toyota-Veloz-MPV.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://img203.yun300.cn/img/sss.jpg?tenantId=277965&viewType=1&k=1648866010000",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://4.bp.blogspot.com/-fqCtP9qWJkI/XN6A3fWDjAI/AAAAAAAA8rw/SdL_Ra2PPu8H5ItJpxCoj949bwUHIzheACLcBGAs/s1600/foton_bpi.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
  ];

  return (
    <Container>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link to="/products" style={{color: "inherit", textDecoration: "none"}}>
                <button>{item.button}</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </Container >
  )
}

export default SliderComp;
