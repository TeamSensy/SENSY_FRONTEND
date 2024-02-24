import "src/style/Main.style/Main.style.css";
import MainImage from "src/assets/img/Main_Image.png";
import CardDummyImage from "src/assets/img/image container.png";
import LeftIcon from "src/assets/img/Left_Icon.png";
import RightIcon from "src/assets/img/Right_Icon.png";
import LikeIcon from "src/assets/img/LikeIcon.png";

const Main = () => {
  return (
    <div className="MainPage">
      <div className="Main">
        <img className="MainImage" src={MainImage} alt="메인 이미지"></img>
        <div className="PopularCoursesWrap">
          <div className="PopularCoursesLine">
            <div className="PopularCourses">
              <div className="PopularCoursesTop">
                <p className="PopularCoursesTitle">Popular Courses</p>
                <p className="PopularCoursesDescription">
                  Check out our best sellers
                </p>
                <div className="PopularCoursesButtonWrap">
                  <div className="PopularCoursesButton">
                    <button className="AddToCartButton">Add to Cart</button>
                    <button className="ViewAllButton">View All</button>
                  </div>
                </div>
              </div>
              <div className="PopularCoursesBottom">
                <img
                  className="PopularCoursesLeftIcon"
                  src={LeftIcon}
                  alt="왼쪽 아이콘"></img>
                {/* Card_Dummy */}
                <div className="PopularCoursesCard">
                  <img
                    className="PopularCoursesCardImage"
                    src={CardDummyImage}
                    alt="카드 이미지"></img>
                  <div className="PopularCoursesCardInfo">
                    <div className="PopularCoursesCardTitleWrap">
                      <span className="PopularCoursesCardTitle">Product 1</span>
                    </div>
                    <div className="PopularCoursesCardContentWrap">
                      <p className="PopularCoursesCardContent">
                        Product 1 data
                      </p>
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
                <div className="PopularCoursesCard">
                  <img
                    className="PopularCoursesCardImage"
                    src={CardDummyImage}
                    alt="카드 이미지"></img>
                  <div className="PopularCoursesCardInfo">
                    <div className="PopularCoursesCardTitleWrap">
                      <span className="PopularCoursesCardTitle">Product 1</span>
                    </div>
                    <div className="PopularCoursesCardContentWrap">
                      <p className="PopularCoursesCardContent">
                        Product 1 data
                      </p>
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
                <div className="PopularCoursesCard">
                  <img
                    className="PopularCoursesCardImage"
                    src={CardDummyImage}
                    alt="카드 이미지"></img>
                  <div className="PopularCoursesCardInfo">
                    <div className="PopularCoursesCardTitleWrap">
                      <span className="PopularCoursesCardTitle">Product 1</span>
                    </div>
                    <div className="PopularCoursesCardContentWrap">
                      <p className="PopularCoursesCardContent">
                        Product 1 data
                      </p>
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
                {/* Card_Dummy */}
                <img
                  className="PopularCoursesRightIcon"
                  src={RightIcon}
                  alt="오른쪽 아이콘"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
