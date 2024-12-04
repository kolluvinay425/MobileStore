import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "../styles.css"; // Import your stylesheet
import { slideData } from "../static/helper";
import {
  ImageContainer,
  Image,
  CarousalContainer,
  CarousalDataContainer,
  ButtonContainer,
  Button,
  Title,
  Description,
  StyledButton,
  NextPrevButtonContainer,
  CarousalWrapper,
  CarousalContent,
} from "./styles/CauroselStyles";
import useHandleNavigation from "../hooks/useHandleNavigation";
import useSticky from "../hooks/useSticky";
import useParallaxEffect from "../hooks/useParallax";

function HomeCarousal() {
  const handleButtonClick = useHandleNavigation();
  const offset = useParallaxEffect();
  const [showCarousalButtons, setShowCarousalButtons] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoverState, setHoverState] = useState({ next: false, prev: false });
  const [showData, setShowData] = useState(true); // New state to control data display

  const sliderRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const hoverTimeoutRef = useRef({ next: null, prev: null });
  const dataTimeoutRef = useRef(null); // Ref to keep track of the timeout

  const isSticky = useSticky();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    waitForAnimate: false,
    beforeChange: (current, next) => {
      setActiveSlide(next);
      setShowData(false); // Hide data immediately on slide change
    },
  };

  const renderSlides = () => {
    return slideData.map((slide, index) => (
      <div key={index}>
        <CarousalContainer>
          {showData &&
            activeSlide === index && ( // Conditionally render data
              <>
                <ImageContainer>
                  <Image offset={offset} src={slide.image} className="active" />
                </ImageContainer>
                <CarousalDataContainer className="active">
                  <Description offset={offset}>{slide.description}</Description>
                  <Title offset={offset}>{slide.title}</Title>
                  <StyledButton
                    offset={offset}
                    onClick={() => handleButtonClick(slide.brand, slide.title)}
                  >
                    {slide.link}
                  </StyledButton>
                </CarousalDataContainer>
              </>
            )}
        </CarousalContainer>
      </div>
    ));
  };

  const nextSlideTitle = slideData[(activeSlide + 1) % slideData.length].title;
  const prevSlideTitle =
    slideData[(activeSlide - 1 + slideData.length) % slideData.length].title;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current);
    setShowCarousalButtons(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowCarousalButtons(false);
    }, 1000);
  };

  useEffect(() => {
    dataTimeoutRef.current = setTimeout(() => {
      setShowData(true);
    }, 500); // 0.5 seconds delay

    return () => {
      clearTimeout(dataTimeoutRef.current); // Clear timeout on cleanup
    };
  }, [activeSlide]); // Effect runs on activeSlide change

  const handleButtonMouseEnter = (buttonType) => {
    clearTimeout(hoverTimeoutRef.current[buttonType]);
    hoverTimeoutRef.current[buttonType] = setTimeout(() => {
      setHoverState((prevState) => ({ ...prevState, [buttonType]: true }));
    }, 200); // Delay for 0.15 second before showing the title
  };

  const handleButtonMouseLeave = (buttonType) => {
    clearTimeout(hoverTimeoutRef.current[buttonType]);
    setHoverState((prevState) => ({ ...prevState, [buttonType]: false }));
  };

  return (
    <CarousalWrapper
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isSticky={isSticky}
      offset={offset}
    >
      <Slider ref={sliderRef} {...settings}>
        {renderSlides()}
      </Slider>
      <NextPrevButtonContainer isVisible={showCarousalButtons}>
        <ButtonContainer>
          <Button
            onClick={previous}
            onMouseEnter={() => handleButtonMouseEnter("prev")}
            onMouseLeave={() => handleButtonMouseLeave("prev")}
          >
            {hoverState.prev ? prevSlideTitle : "Previous"}
          </Button>
          <Button
            onClick={next}
            onMouseEnter={() => handleButtonMouseEnter("next")}
            onMouseLeave={() => handleButtonMouseLeave("next")}
          >
            {hoverState.next ? nextSlideTitle : "Next"}
          </Button>
        </ButtonContainer>
      </NextPrevButtonContainer>
    </CarousalWrapper>
  );
}

export default HomeCarousal;
