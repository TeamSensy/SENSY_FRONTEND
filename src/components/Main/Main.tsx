import "src/style/Main.style/Main.style.css";
import MainImage from "src/assets/img/Main_Image.png";
import Header from "src/components/Header/Header";

const Main = () => {
  return (
    <div className="MainPage">
      <Header />
      <div className="Main">
        <img className="MainImage" src={MainImage} alt="메인 이미지"></img>
      </div>
    </div>
  );
};

export default Main;
