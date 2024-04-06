import Topbar from "src/components/Topbar/Topbar";
import Sidebar from "src/components/Sidebar/Sidebar";
import "src/components/MyPage/style/MyPage.style.css";
import "@splidejs/react-splide/css";
import "src/components/Main/style/Main.style.css";

const MyPage = () => {
  return (
    <div className="MyPagePage">
      <Topbar />
      <div className="MyPageWrap">
        <div className="MyPage">
          <div className="ClassInProgressWrap"></div>
          <div className="CourseCompletionWrap"></div>
          <div className="SavedClassWrap"></div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default MyPage;
