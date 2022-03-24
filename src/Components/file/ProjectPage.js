import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

function ProjectPage(params) {
    return(
        <section className="next-sec1">
            <Navbar/>
            <div style={{marginBottom:'10%'}}>
                <div className="page-div">
                  <h1>PROJECT PAGE</h1>
                </div>
                <div className="next-div1">
                    <h4 className="next-h4">BUILD YOUR NEXT PROJECT WITH LARRYDEV</h4>
                    <p className="next-p">
                    Reign's different header variations and unique sections give you most flexibility to
                    focus your features, services and a lot more.  
                    </p>
                </div>
                <div className="row next-row">
                    <div className="col-6">
                        <img src="./images/one-page.png" className="next-img rounded" alt="" />
                        <p className="next-p1">ONE PAGE</p>
                    </div>
                    <div className="col-6">
                        <img src="./images/slider-header.png" className="next-img1 rounded" alt="" />
                        <p className="next-p1" >SLIDER HEADER</p>
                    </div>
                </div>
                <div className="row next-row">
                    <div className="col-6">
                        <img src="./images/text-left-header.png" className="next-img rounded" alt="" />
                        <p className="next-p1"> TEXT LEFT HEADER</p>
                    </div>
                    <div className="col-6">
                        <img src="./images/screenshot-bootstrap.png" className="next-img1 rounded" alt="" />
                        <p className="next-p1" >SLIDER CLASSIC</p>
                    </div>
                </div>
                <div className="row next-row">
                    <div className="col-6">
                        <img src="./images/typed-text-header.png" className="next-img rounded" alt="" />
                        <p className="next-p1"> TEXT LEFT HEADER</p>
                    </div>
                    <div className="col-6">
                        <img src="./images/screenshot 6.png" className="next-img1 rounded" alt="" />
                        <p className="next-p1" >SLIDER CLASSIC</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src="./images/video-background.png" className="next-img rounded" alt="" />
                        <p className="next-p1">VIDEO BACKGROUND</p>
                    </div>
                    <div className="col-6">
                        <img src="./images/screenshot 8.png" className="next-img1 rounded" alt="" />
                        <p className="next-p1" >E-COMMERCE</p>
                    </div>
                </div>
            </div>
            <Footer/>
      </section>
    )
}

export default ProjectPage