import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { MyPageCardDummy } from "src/components/MyPage/DummyData/MyPageDummy";
import Topbar from "src/components/Topbar/Topbar";
import Sidebar from "src/components/Sidebar/Sidebar";
import CardDummyImage from "src/assets/img/CardImage.svg";
import LikeIcon from "src/assets/img/LikeIcon.svg";
import LeftIcon from "src/assets/img/LeftIcon.svg";
import RightIcon from "src/assets/img/RightIcon.svg";
import "src/components/MyPage/style/MyPage.style.css";
import "@splidejs/react-splide/css";
import "src/components/Main/style/Main.style.css";

const MyPage = () => {
  const Option = {
    width: "100%",
    height: "330px",
    padding: "23px",
    perPage: 3,
    gap: "40px",
    drag: false,
    pagination: false,
  };
  return (
    <div className="MyPagePage">
      <Topbar />
      <div className="MyPageWrap">
        <div className="MyPage">
          {/* Class in progress Card */}
          <div className="ClassInProgressWrap">
            <div className="ClassInProgressTitle">Class in progress</div>
            <Splide options={Option} hasTrack={false}>
              <SplideTrack>
                {MyPageCardDummy.map((data) => (
                  <SplideSlide key={data.id}>
                    <div className="ClassInProgressCard">
                      <img
                        className="ClassInProgressCardImage"
                        src={CardDummyImage}
                        alt="카드 이미지"></img>
                      <div className="ClassInProgressCardInfo">
                        <div className="ClassInProgressCardTitleWrap">
                          <span className="ClassInProgressCardTitle">
                            {data.title}
                          </span>
                        </div>
                        <div className="ClassInProgressCardContentWrap">
                          <p className="ClassInProgressCardContent">
                            {data.content}
                          </p>
                          <div className="ClassInProgressCardLikeWrap">
                            <img
                              className="ClassInProgressCardLikeIcon"
                              src={LikeIcon}
                              alt="좋아요 아이콘"></img>
                            <p className="ClassInProgressCardLike">Like</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>

              <div className="splide__arrows">
                <button className="MyPageCardArrow splide__arrow splide__arrow--prev">
                  <img src={LeftIcon} alt=""></img>
                </button>
                <button className="MyPageCardArrow splide__arrow splide__arrow--next">
                  <img src={RightIcon} alt=""></img>
                </button>
              </div>
            </Splide>
          </div>
          {/* Class in progress Card */}
          {/* Course completion Card */}
          <div className="CourseCompletionWrap">
            <div className="CourseCompletionTitle">Course completion</div>
            <Splide options={Option} hasTrack={false}>
              <SplideTrack>
                {MyPageCardDummy.map((data) => (
                  <SplideSlide key={data.id}>
                    <div className="CourseCompletionCard">
                      <img
                        className="CourseCompletionCardImage"
                        src={CardDummyImage}
                        alt="카드 이미지"></img>
                      <div className="CourseCompletionCardInfo">
                        <div className="CourseCompletionCardTitleWrap">
                          <span className="CourseCompletionCardTitle">
                            {data.title}
                          </span>
                        </div>
                        <div className="CourseCompletionCardContentWrap">
                          <p className="CourseCompletionCardContent">
                            {data.content}
                          </p>
                          <div className="CourseCompletionCardLikeWrap">
                            <img
                              className="CourseCompletionCardLikeIcon"
                              src={LikeIcon}
                              alt="좋아요 아이콘"></img>
                            <p className="CourseCompletionCardLike">Like</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>

              <div className="splide__arrows">
                <button className="MyPageCardArrow splide__arrow splide__arrow--prev">
                  <img src={LeftIcon} alt=""></img>
                </button>
                <button className="MyPageCardArrow splide__arrow splide__arrow--next">
                  <img src={RightIcon} alt=""></img>
                </button>
              </div>
            </Splide>
          </div>
          {/* Course completion Card */}
          {/* Saved Class Card */}
          <div className="SavedClassWrap">
            <div className="SavedClassTitle">Saved Class</div>
            <Splide options={Option} hasTrack={false}>
              <SplideTrack>
                {MyPageCardDummy.map((data) => (
                  <SplideSlide key={data.id}>
                    <div className="SavedClassCard">
                      <img
                        className="SavedClassCardImage"
                        src={CardDummyImage}
                        alt="카드 이미지"></img>
                      <div className="SavedClassCardInfo">
                        <div className="SavedClassCardTitleWrap">
                          <span className="SavedClassCardTitle">
                            {data.title}
                          </span>
                        </div>
                        <div className="SavedClassCardContentWrap">
                          <p className="SavedClassCardContent">
                            {data.content}
                          </p>
                          <div className="SavedClassCardLikeWrap">
                            <img
                              className="SavedClassCardLikeIcon"
                              src={LikeIcon}
                              alt="좋아요 아이콘"></img>
                            <p className="SavedClassCardLike">Like</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>

              <div className="splide__arrows">
                <button className="MyPageCardArrow splide__arrow splide__arrow--prev">
                  <img src={LeftIcon} alt=""></img>
                </button>
                <button className="MyPageCardArrow splide__arrow splide__arrow--next">
                  <img src={RightIcon} alt=""></img>
                </button>
              </div>
            </Splide>
          </div>
          {/* Saved Class Card */}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default MyPage;
