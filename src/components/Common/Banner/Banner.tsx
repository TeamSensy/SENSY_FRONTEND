import { Splide, SplideSlide } from "@splidejs/react-splide";
import ExampleVanner from "src/assets/img/BannerImage.svg";
import "@splidejs/react-splide/css";
import "src/components/Common/Banner/style.css"

const Banner = () => {
  const Option = {
    type: "loop",
    width: "70vw",
    height: 300,
    perPage: 1,
    arrows: false,
    interval: 5000,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div className="BannerWrap">
      <Splide options={Option}>
        <SplideSlide>
          <img
            className="BannerImage"
            src={ExampleVanner}
            alt="배너 이미지 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="BannerImage"
            src={ExampleVanner}
            alt="배너 이미지 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="BannerImage"
            src={ExampleVanner}
            alt="배너 이미지 3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="BannerImage"
            src={ExampleVanner}
            alt="배너 이미지 4"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Banner;
