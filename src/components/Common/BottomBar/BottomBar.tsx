import "src/components/Common/BottomBar/style.css";

const BottomBar = () => {
  return (
    <div className="FooterWrap">
      <div className="Footer">
        <button className="AboutUs">About Us</button>
        <button className="ContactUs">Contact Us</button>
        <button className="TermsAndConditions">Terms and Conditions</button>
      </div>
    </div>
  );
};

export default BottomBar;
