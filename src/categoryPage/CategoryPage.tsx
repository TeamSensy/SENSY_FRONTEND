import React from "react";
import "../categoryPage/Category.css";
import cardimage from "../img/Color Image.png";
import likeicon from "../img/Vector.png";
import Rhatn from "../img/Category page.png";

const CategoryPage: React.FC = () => {
  return (
    <div className="category-page">
      <div className="PopularCoursesSection">
        {/* 첫 번째 카드 */}
        <div className="PopularCoursesCard">
          <img
            className="PopularCoursesCardImage"
            src={cardimage}
            alt="카드 이미지"
          />
          <div className="CardInfo">
            <div className="CardTitleWrap">
              <span className="CardTitle">Product 1</span>
            </div>
            <div className="CardContentWrap">
              <p className="CardContent">Product 1 data</p>
              <div className="CardLikeWrap">
                <img
                  className="CardLikeIcon"
                  src={likeicon}
                  alt="좋아요 아이콘"
                />
                <p className="CardLike">Like</p>
              </div>
            </div>
          </div>
        </div>
        {/* 두 번째 카드 */}
        <div className="PopularCoursesCard">
          <img
            className="PopularCoursesCardImage"
            src={cardimage}
            alt="카드 이미지"
          />
          <div className="PopularCoursesCardInfo">
            <div className="PopularCoursesCardTitleWrap">
              <span className="PopularCoursesCardTitle">Product 2</span>
            </div>
            <div className="PopularCoursesCardContentWrap">
              <p className="PopularCoursesCardContent">Product 2 data</p>
              <div className="PopularCoursesCardLikeWrap">
                <img
                  className="PopularCoursesCardLikeIcon"
                  src={likeicon}
                  alt="좋아요 아이콘"
                />
                <p className="PopularCoursesCardLike">Like</p>
              </div>
            </div>
          </div>
        </div>
        {/* 세 번째 카드 */}
        <div className="PopularCoursesCard">
          <img
            className="PopularCoursesCardImage"
            src={cardimage}
            alt="카드 이미지"
          />
          <div className="PopularCoursesCardInfo">
            <div className="PopularCoursesCardTitleWrap">
              <span className="PopularCoursesCardTitle">Product 3</span>
            </div>
            <div className="PopularCoursesCardContentWrap">
              <p className="PopularCoursesCardContent">Product 3 data</p>
              <div className="PopularCoursesCardLikeWrap">
                <img
                  className="PopularCoursesCardLikeIcon"
                  src={likeicon}
                  alt="좋아요 아이콘"
                />
                <p className="PopularCoursesCardLike">Like</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
