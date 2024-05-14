import Topbar from "src/components/Common/Topbar/Topbar";
import Sidebar from "src/components/Common/Sidebar/Sidebar";
import Card from "src/components/Common/Card/Card";
import "src/components/MyPage/style.css";
import "@splidejs/react-splide/css";

const MyPage = () => {
  return (
    <div className="MyPagePage">
      <Topbar />
      <div className="MyPageWrap">
        <div className="MyPage">
          <div className="ClassInProgressWrap">
            <div className="ClassInProgressTitle">Class in progress</div>
            <Card />
          </div>
          <div className="CourseCompletionWrap">
            <div className="CourseCompletionTitle">Course completion</div>
            <Card />
          </div>
          <div className="SavedClassWrap">
            <div className="SavedClassTitle">Saved Class</div>
            <Card />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default MyPage;
