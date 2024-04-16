import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { CardDummy } from "src/Dummy/Main/MainDummy";
import CardDummyImage from "src/assets/img/CardImage.svg";
import LeftIcon from "src/assets/img/LeftIcon.svg";
import RightIcon from "src/assets/img/RightIcon.svg";
import LikeIcon from "src/assets/img/LikeIcon.svg";
import "@splidejs/react-splide/css";
import "src/components/Common/Card/style.css";

const Card = () => {
  const Option = {
    width: "100%",
    height: "340px",
    padding: "23px",
    perPage: 3,
    gap: "30px",
    drag: false,
    pagination: false,
  };
  return (
    <Splide options={Option} hasTrack={false}>
      <SplideTrack>
        {CardDummy.map((data) => (
          <SplideSlide key={data.id}>
            <div className="PopularCoursesCard">
              <img
                className="PopularCoursesCardImage"
                src={CardDummyImage}
                alt="카드 이미지"></img>
              <div className="PopularCoursesCardInfo">
                <div className="PopularCoursesCardTitleWrap">
                  <span className="PopularCoursesCardTitle">{data.title}</span>
                </div>
                <div className="PopularCoursesCardContentWrap">
                  <p className="PopularCoursesCardContent">{data.content}</p>
                  <div className="PopularCoursesCardLikeWrap">
                    <img
                      className="PopularCoursesCardLikeIcon"
                      src={LikeIcon}
                      alt="좋아요 아이콘"></img>
                    <p className="PopularCoursesCardLike">Like</p>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="splide__arrows">
        <button className="CardArrow splide__arrow splide__arrow--prev">
          <img src={LeftIcon} alt=""></img>
        </button>
        <button className="CardArrow splide__arrow splide__arrow--next">
          <img src={RightIcon} alt=""></img>
        </button>
      </div>
    </Splide>
  );
};

export default Card;
