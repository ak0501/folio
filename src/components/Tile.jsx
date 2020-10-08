import React from "react";
const Tile = (props) => {
  return (
    <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
      <div
        className="project"
        style={{ backgroundImage: "url(images/todo.png)" }}
      >
        <div className="desc">
          <div className="con">
            <h3>
              <a href={props.link}>{props.title}</a>
            </h3>
            <span></span>
            <p className="icon">
              <span>
                <a href="na">
                  <i className="icon-share3" />
                </a>
              </span>
              <span>
                <a href="na">
                  <i className="icon-eye" /> {props.countEye}
                </a>
              </span>
              <span>
                <a href="na">
                  <i className="icon-heart" /> {props.countHeart}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tile;
