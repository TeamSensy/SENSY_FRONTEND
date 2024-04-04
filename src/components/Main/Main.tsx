import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { CardDummy, ReviewsDummy } from "src/components/Main/MainDummy";
import Topbar from "src/components/Topbar/Topbar";
import BottomBar from "src/components/BottomBar/BottomBar";
import MainImage from "src/assets/img/MainImage.svg";
import CardDummyImage from "src/assets/img/CardImage.svg";
import LeftIcon from "src/assets/img/LeftIcon.svg";
import RightIcon from "src/assets/img/RightIcon.svg";
import LikeIcon from "src/assets/img/LikeIcon.svg";
import ExampleProfile from "src/assets/img/ProfileImage.svg";
import ExampleRate from "src/assets/img/Rate.svg";
import ExampleVanner from "src/assets/img/BannerImage.svg";
import "@splidejs/react-splide/css";
import "src/components/Main/style/Main.style.css";

const Main = () => {
  const CouresesOption = {
    width: "100%",
    height: "340px",
    padding: "23px",
    perPage: 3,
    gap: "30px",
    drag: false,
    pagination: false,
  };
  const BannerOption = {
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
    <div className="MainPage">
      <Topbar />
      <div className="Main">
        <img className="MainImage" src={MainImage} alt="메인 이미지"></img>
        <div className="PopularCoursesWrap">
          <div className="PopularCourses">
            <div className="PopularCoursesTop">
              <p className="PopularCoursesTitle">Popular Courses</p>
              <p className="PopularCoursesDescription">Check out our best sellers</p>
              <div className="PopularCoursesButtonWrap">
                <div className="PopularCoursesButton">
                  <button className="AddToCartButton">Add to Cart</button>
                  <button className="ViewAllButton">View All</button>
                </div>
              </div>
            </div>
            <div className="PopularCoursesBottom">
              {/* Card_Dummy */}
              <Splide options={CouresesOption} hasTrack={false}>
                <SplideTrack>
                  {CardDummy.map((data) => (
                    <SplideSlide key={data.id}>
                      <div className="PopularCoursesCard">
                        <img className="PopularCoursesCardImage" src={CardDummyImage} alt="카드 이미지"></img>
                        <div className="PopularCoursesCardInfo">
                          <div className="PopularCoursesCardTitleWrap">
                            <span className="PopularCoursesCardTitle">{data.title}</span>
                          </div>
                          <div className="PopularCoursesCardContentWrap">
                            <p className="PopularCoursesCardContent">{data.content}</p>
                            <div className="PopularCoursesCardLikeWrap">
                              <img className="PopularCoursesCardLikeIcon" src={LikeIcon} alt="좋아요 아이콘"></img>
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
              {/* Card_Dummy */}
            </div>
          </div>
        </div>
        <div className="StudentReviewsWrap">
          <div className="StudentReviewsBox">
            <div className="StudentReviews">
              <div className="StudentReviewsTitle">Student Reviews</div>
              {/* Reviews_Dummy */}
              {ReviewsDummy.map((data) => (
                <div className="StudentReviewsCard" key={data.id}>
                  <div className="StudentReviewsCardInfoWrap">
                    <div className="StudentReviewsCardInfoLeft">
                      <img className="StudentReviewsCardProfile" src={ExampleProfile} alt="프로필"></img>
                      <p className="StudentReviewsCardName">{data.name}</p>
                    </div>
                    <div className="StudentReviewsCardInfoRight">
                      <img className="StudentReviewsCardRate" src={ExampleRate} alt="별점"></img>
                    </div>
                  </div>
                  <div className="StudentReviewsCardContentWrap">
                    <p className="StudentReviewsCardContent">{data.content}</p>
                  </div>
                </div>
              ))}
              {/* Reviews_Dummy */}
            </div>
          </div>
        </div>
        <div className="BannerWrap">
          <Splide options={BannerOption}>
            <SplideSlide>
              <img className="BannerImage" src={ExampleVanner} alt="배너 이미지 1"/>
            </SplideSlide>
            <SplideSlide>
              <img className="BannerImage" src={ExampleVanner}alt="배너 이미지 2"/>
            </SplideSlide>
            <SplideSlide>
              <img className="BannerImage" src={ExampleVanner} alt="배너 이미지 3"/>
            </SplideSlide>
            <SplideSlide>
              <img className="BannerImage" src={ExampleVanner} alt="배너 이미지 4"/>
            </SplideSlide>
          </Splide>
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default Main;
