import "./styles.css";

function HeroImage({ url, title }) {
  return (
    <div className="heroContainer">
      <img src={url} className="heroImage" loading="eager" />
      <div className="heroTitle">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default HeroImage;
