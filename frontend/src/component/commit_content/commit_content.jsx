import "./commit_content.css";
import commit_image from "../../assets/commit_content/commit_image.png";
import commit_header from "../../assets/commit_content/commit_header.png";
import icon_check from "../../assets/commit_content/check.png";

export default function Commit_Content() {
  return (
    <div className="commit-content">
      <img src={commit_image} alt="commit_image" className="commit-banner" />
      <div className="commit-infor">
        <div className="commit-header">
          <img
            src={commit_header}
            alt="commit_header"
            className="header-text"
          />
          <img src={icon_check} alt="icon-check" className="header-icon" />
        </div>
        <ul>
          <li>Không phí đăng ký</li>
          <li>Nhân viên ngân hàng hỗ trợ TẬN NƠI</li>
          <li>TẶNG TÀI KHOẢN SỐ ĐẸP: Tứ quý, thần tài, tự chọn, ...</li>
          <li>Hỗ trợ vay vốn doanh nghiệp</li>
        </ul>
      </div>
    </div>
  );
}
