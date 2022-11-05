import "./Movies.css";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";

const Movies = (props) => {
  const style = {
    backgroundImage: `linear-gradient(to right, #0D0D0C,#0D0D0C,rgba(0, 0, 0, 0)) , url(${props.backgroundImage})`,
    backgroundSize: "100% 100%",
    boxShadow: `10px 10px 30px ${props.backgroundShadow}, -10px -10px 70px ${props.backgroundShadow}`,
  };

  return (
    <div style={style} className="main">
      <div className="nav">
        <div className="left">
          <img alt="poster" className="image" src={props.poster}></img>
        </div>
        <div className="right">
          <h1 className="title">{props.title}</h1>
          <h3 className="year">
            {props.Year}, {props.director}
          </h3>
          <div className="rightd">
            <h4 className="duration">{props.duration}</h4>
            <h4 className="g genre">{props.genre}</h4>
          </div>
        </div>
      </div>
      <div className="down">
        <h4 className="g">{props.description}</h4>
        <div className="footer-icons">
          <span className="icons">
            <FaShare style={{ color: "grey" }} />
          </span>
          <span className="icons">
            <FaHeart style={{ color: "grey" }} />
          </span>
          <span className="icons">
            <FaComment style={{ color: "grey" }} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Movies;
