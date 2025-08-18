import { useState } from "react";
import "./register.css";

export default function RegisterCompanyForm() {
  const [form, setForm] = useState({
    companyName: "",
    taxCode: "",
    legalRepresentative: "",
    phoneNumber: "",
    address: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Đang gửi...");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: "MY_SECRET_TOKEN",
          ...form,
        }),
      });

      const data = await res.json();
      if (data.status === "success") {
        setStatus("✅ Gửi thành công!");
        setForm({
          companyName: "",
          taxCode: "",
          legalRepresentative: "",
          phoneNumber: "",
          address: "",
          email: "",
        });
      } else {
        setStatus("❌ Lỗi: " + data.message);
      }
    } catch (err) {
      setStatus("⚠️ Có lỗi khi gửi dữ liệu!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2 className="form-name">Đăng ký thông tin doanh nghiệp</h2>
      <ol className="form-info">
        <li className="infor">
          <h3>Tên doanh nghiệp</h3>
          <input
            type="text"
            name="companyName"
            placeholder="Nhập tên doanh nghiệp"
            value={form.companyName}
            onChange={handleChange}
            required
          />
        </li>
        <li className="infor">
          <h3>Mã số thuế</h3>
          <input
            type="text"
            name="taxCode"
            placeholder="Nhập mã số thuế"
            value={form.taxCode}
            onChange={handleChange}
            required
          />
        </li>
        <li className="infor">
          <h3>Người đại diện pháp luật</h3>
          <input
            type="text"
            name="legalRepresentative"
            placeholder="Nhập họ và tên người đại diện pháp luật"
            value={form.legalRepresentative}
            onChange={handleChange}
            required
          />
        </li>
        <li className="infor">
          <h3>Số điện thoại</h3>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Nhập số điện thoại"
            value={form.phoneNumber}
            onChange={handleChange}
            required
          />
        </li>
        <li className="infor">
          <h3>Địa chỉ</h3>
          <input
            type="text"
            name="address"
            placeholder="Nhập địa chỉ"
            value={form.address}
            onChange={handleChange}
            required
          />
        </li>
        <li className="infor">
          <h3>Địa chỉ email</h3>
          <input
            type="email"
            name="email"
            placeholder="Nhập địa chỉ email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </li>
        <li className="infor">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Gửi thông tin
          </button>
          {status && <p className="text-center mt-2">{status}</p>}
        </li>
      </ol>
    </form>
  );
}
