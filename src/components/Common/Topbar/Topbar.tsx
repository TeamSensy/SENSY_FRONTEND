import Logo from "src/assets/img/SENSY_Logo.svg";
import "src/components/Common/Topbar/style.css"

const Topbar = () => {
  return (
    <div className="HeaderWrap">
      <div className="Header">
        <div className="HeaderLogoWrap">
          <div className="HeaderLogo">
            <img className="Logo" src={Logo} alt="Sensy 로고"></img>
            <span className="HeaderSensy">SENSY</span>
          </div>
        </div>
        <div className="HeaderInfoWrap">
          <div className="HeaderInfo">
            <input className="HeaderSearch" placeholder="Search"></input>
            <p className="HeaderHome">Home</p>
            <p className="HeaderLearn">Learn</p>
            <div className="HeaderBtnWrap">
              <button className="HeaderLogIn">Log in</button>
              <button className="HeaderSignUp">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;