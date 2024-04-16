import ProfileImg from "src/assets/img/ProfileImage.svg";
import EditProfileNameImg from "src/assets/img/EditProfileName.svg";
import EditProfileInfoImg from "src/assets/img/EditProfileInfo.svg";
import "src/components/Common/Sidebar/style.css";

const Sidebar = () => {
  return (
    <div className="SidebarWrap">
      <div className="ProfileWrap">
        <div className="Profile">
          <img className="ProfileImage" src={ProfileImg} alt="프로필 사진" />
          <div className="ProfileNameWrap">
            <p className="ProfileName">Gil Dong Hong</p>
            <img className="ProfileNameImage" src={EditProfileNameImg} alt="이름 변경"/>
          </div>
          <div className="ProfileInfoWrap">
            <p className="ProfileInfo">Student · South Korea · 2007</p>
            <img className="ProfileInfoImage" src={EditProfileInfoImg} alt="내 정보 수정"/>
          </div>
        </div>
      </div>
      <div className="UserInfoWrap">
        <div className="UserInfo">
          <div className="AccountWrap">
            <p className="AccountTitle">account</p>
            <span className="AccountOption">my account information</span>
            <span className="AccountOption">Change Password</span>
          </div>
          <div className="PostManagementWrap">
            <p className="PostManagementTitle">Post management</p>
            <span className="PostManagementOption">Post written by me</span>
            <span className="PostManagementOption">Comments written by me</span>
            <span className="PostManagementOption">Saved Class</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
