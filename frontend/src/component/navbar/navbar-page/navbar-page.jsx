import "./navbar-page.css";
import Icon from "/icon.png";

export default function Navbar_Page() {
  return (
    <nav className="navbar-page">
      <ul>
        <li>
          <img src={Icon} alt="icon" />
          CỔNG DỊCH VỤ NGÂN HÀNG
        </li>
        <li>TRANG CHỦ</li>
        <li>DỊCH VỤ</li>
        <li>LIÊN HỆ</li>
      </ul>
    </nav>
  );
}
