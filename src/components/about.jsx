import React from "react";
import ExpCard from "./ExpCard";
import Paragraph from "./Paragraph";
import { Grid } from "@material-ui/core";
import Projects from "./Projects";

const About = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta"></span>
                    <h2 className="colorlib-heading">Little About Me</h2>
                    <Paragraph />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- section -------------------------------- */}
       <section className="colorlib-about">
        <div className="colorlib-narrow-content">
         {/* <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta"></span>
              <h2 className="colorlib-heading">Projects</h2>
            </div>
          </div>
          <>
            <Grid container spacing={4}>
              <Grid xs={12} md={6} lg={3}>
                <ExpCard
                  title="lilOnes"
                  para="Child Care Management System"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgw1YKZUW0mW3cXb9BgEw9X3t2A-ORDM7FfA&usqp=CAU"
                  link="https://github.com/ak0501/pequenoOnes"
                />
              </Grid>
              <Grid xs={12} md={6} lg={3}>
                <ExpCard
                  title="Planner"
                  para="Daily Planner to keep you on track"
                  image="https://www.clipartmax.com/png/middle/422-4223456_to-do-list-vector-todo-list-logos.png"
                  link="https://todo-quoyxk7no.vercel.app/"
                />
              </Grid>
              <Grid xs={12} md={6} lg={3}>
                <ExpCard
                  title="CarbTracker"
                  para="Track Carbs in your meal"
                  image="https://www.seasonalcravings.com/wp-content/uploads/2018/03/instantpotporktacos2.jpg"
                  link="https://appcarbtracker.herokuapp.com/"
                />
              </Grid>
              <Grid xs={12} md={6} lg={3}>
                <ExpCard
                  title="Weather"
                  para="Search Weather"
                  image="https://scx1.b-cdn.net/csz/news/800/2019/weatherforec.jpg"
                  link="https://ak0501.github.io/Weather-API/"
                />
              </Grid>
            </Grid>
          </>*/}
        </div>
         <Projects/>
      </section> 
     
    </div>
  );
};
export default About;
