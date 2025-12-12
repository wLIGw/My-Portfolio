import './style.scss';

const TechTag = ({ name, type = "tech" }) => {
  return (
    <span className={`techTag ${type === "real" ? "techTag--real" : ""}`}>
      {name}
    </span>
  );
};

export default TechTag;
