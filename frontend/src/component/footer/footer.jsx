import "./footer.css";
import zalo_contact from "../../assets/zalo_contact.png";

export default function Footer() {
  return (
    <footer>
      <div className="information">
        <h1>CỔNG DỊCH VỤ NGÂN HÀNG</h1>
        <p>
          Trung tâm dịch vụ chăm sóc khách hàng
          <br />
          HOTLINE: 0961 987 487 - MS.SORA
        </p>
        <p>Hỗ trợ dịch vụ khu vực Hồ Chí Minh</p>
      </div>
      <div className="zalo-contact">
        <h1>KẾT BẠN ZALO NHẬN TƯ VẤN</h1>
        <img src={zalo_contact} alt="zalo-contact" />
      </div>
    </footer>
  );
}
