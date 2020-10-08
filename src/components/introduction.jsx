import React from "react";
const Introduction = () => {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: "url(images/me.jpg)" }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <div></div>
                        <h1>
                          Hi! <br />
                          I'm Abinash
                        </h1>
                        <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://docs.google.com/document/d/1wu-tTyMNPF_LM6Cjyha18FZzCQJwOoar3MZtP_6rKCI/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View CV
                            <i className="icon-download4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: "url(images/pok.jpg)" }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>
                          I love building
                          <br /> THINGS !!
                        </h1>
                        {/* <p>
                          <a
                            className="btn btn-primary btn-learn"
                            href="https://github.com/ak0501"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website <i className="icon-website3" />
                          </a>
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <p><a className="btn btn-primary btn-learn" href="" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Introduction;
