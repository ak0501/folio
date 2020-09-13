import React from 'react';
import ExpCard from './ExpCard';
import Paragraph from './Paragraph';
const About=()=> {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta"></span>
                    <h2 className="colorlib-heading">Little About Me</h2>
                    <Paragraph/>
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
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta"></span>
                <h2 className="colorlib-heading">Projects I worked On</h2>
            </div>
            </div>
            <div className="row row-pt-md">
           
           <ExpCard />
           

            </div>
        </div>
        </section>
      </div>
     ) };
     export default About;
