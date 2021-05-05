export default function Project({ imgSrc, name, makeby }) {
  return (
    <a href="#" className="item col-md-6">
      <div className="wrap">
        <div className="cover">
          <img src={imgSrc} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="makeby">{makeby}</div>
        </div>
      </div>
    </a>
  );
}
