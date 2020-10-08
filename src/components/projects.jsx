import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "./Card";
import { ProjectItems } from "./ProjectItems";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(4),
  },
}));
const Projects = () => {
  return (
    <div>
      <Grid container className={useStyles.root} spacing={2}>
        <Grid item sm={12}>
          <Grid container justify="center" spacing={10}>
            {ProjectItems.map((item, index) => (
              <Grid key={index} item>
                <Paper className={useStyles.paper} />
                <Card key={index}
                  title={item.Title}
                  avatar={item.id}
                  
                  
                
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* <div className="row">
          
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/lilOnes.jpg)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="https://github.com/ak0501/pequenoOnes">
                        lilOnes
                      </a>
                      pequenoOnes
                    </h3>
                    <span></span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye" /> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart" /> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInTop"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/weather.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="https://ak0501.github.io/Weather-API/">
                        Weather
                      </a>
                    </h3>
                    <span></span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye" /> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart" /> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 animate-box"
              data-animate-effect="fadeInBottom"
            >
              <div
                className="project"
                style={{ backgroundImage: "url(images/carbTracker.png)" }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="https://appcarbtracker.herokuapp.com/">
                        CarbTracker
                      </a>
                    </h3>
                    <span></span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye" /> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart" /> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
    </div>
  );
};
export default Projects;
