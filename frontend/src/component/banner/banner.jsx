import "./banner.css";

export default function Banner({ source, name }) {
  return (
    <div className="banner">
      <img src={source} alt={name} />
    </div>
  );
}
