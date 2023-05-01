import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import  manImg from "../assets/img/ie.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  const handleCarouselClick = (index) => {
    setActiveIndex(index);
    setShowDetails(true);
  };

  const handleDetailsClick = () => {
    setShowDetails(false);
  };

  
  const handleScroll = () => {
    if (showDetails) {
      const detailsRect = detailsRef.current.getBoundingClientRect();
      if (
        detailsRect.top < 0 ||
        detailsRect.bottom > window.innerHeight
      ) {
        setShowDetails(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showDetails]);

  const items = [
    {
      title: "Brian Osewe",
      image: manImg,
      details: "Details for Item 1",
    },
    {
      title: "Mercy Ngendo",
      image: manImg,
      details: "Details for Item 2",
    },
    {
      title: "Vivien Sawe",
      image: manImg,
      details: "Details for Item 3",
    },
    {
      title: "Michael Ndungu",
      image: manImg,
      details: "Details for Item 4",
    },
  ];

  

  const currentItem = items[activeIndex];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleBackgroundClick = () => {
    setShowDetails(false);
  };

  return (
    <section className="skill" id="skills" >
      <Container>
        <Row>
          <Col>
            <div className="skill-bx"
            >
              <h2>The Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim
              </p>
              <Carousel
                activeIndex={activeIndex}
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {items.map((item, index) => (
                  <div key={index} onClick={() => handleCarouselClick(index)}>
                    <img
                      className="d-block"
                      src={item.image}
                      alt={item.title}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="title">
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                ))}
              </Carousel>
              {showDetails && (
                <div
                  className="popup-tab"
                  ref={detailsRef}
                  onClick={handleBackgroundClick}
                >
                 <div className="popup" >

                  <h2>{currentItem.title}</h2>
                  <p>{currentItem.details}</p>
                  
                  <button className="bttn"   onClick={handleDetailsClick}>
                    <div className="bttn-content" >Close</div> </button>
                 
                 </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

