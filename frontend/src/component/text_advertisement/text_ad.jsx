import "./text_ad.css";
import Logo_Mb from "../../assets/Logo_mb.png";
export default function Text_Ad() {
  return (
    <p className="text-ad">
      NHẬN NGAY TÀI KHOẢN SỐ ĐẸP SỐ ĐUÔI <span className="highlight">9999</span>{" "}
      6868
      <span className="highlight">7979</span> 8686 TỰ CHỌN
      <br />
      Khi đăng ký tài khoản ngân hàng <img
        src={Logo_Mb}
        alt="logo-mb-bank"
      />{" "}
      tại đây!
    </p>
  );
}
