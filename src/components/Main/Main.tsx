import { ReviewsDummy } from "src/Dummy/ReviewsDummy";
import Topbar from "src/components/Common/Topbar/Topbar";
import Card from "src/components/Common/Card/Card";
import Banner from "src/components/Common/Banner/Banner";
import BottomBar from "src/components/Common/BottomBar/BottomBar";
import MainImage from "src/assets/img/MainImage.svg";
import ExampleProfile from "src/assets/img/ProfileImage.svg";
import ExampleRate from "src/assets/img/Rate.svg";
import "src/components/Main/style.css";

const Main = () => {
  return (
    <div className="MainPage">
      <Topbar />
      <div className="Main">
        <img className="MainImage" src={MainImage} alt="메인 이미지"></img>
        <div className="PopularCoursesWrap">
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
              <Card />
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
                      <img
                        className="StudentReviewsCardProfile"
                        src={ExampleProfile}
                        alt="프로필"
                      ></img>
                      <p className="StudentReviewsCardName">{data.name}</p>
                    </div>
                    <div className="StudentReviewsCardInfoRight">
                      <img
                        className="StudentReviewsCardRate"
                        src={ExampleRate}
                        alt="별점"
                      ></img>
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
        <Banner />
        <BottomBar />
      </div>
    </div>
  );
};

export default Main;
