import React from "react";

function Footer(params) {
    return(
        <section className="foot-sec">
           <div className="row">
               <div className="col-3">
                   <h4 className="text-light foot-h4">OUR MISSION</h4>
                   <div className="miss-div">
                       <p className="text-muted">
                            Our mission is to deliver optimal solutions with quality and services at reasonable prices. For us customer satisfaction is given top place. We are very friendly in our dealings to the customers and it helps us retain existing clients and expand customer circle. We always try to improve the quality of our products by exploring innovative ideas and our service.
                       </p>
                   </div>
               </div>
               <div className="col-3">
                   <h4 className="text-light foot-h41">COMPANY</h4>
                   <div className="link-div">
                       <p><a href="#top" className="foot-a">About</a></p>
                       <p><a href="#top" className="foot-a">Contact</a></p>
                       <p><a href="#top" className="foot-a">Blog</a></p>
                       <p><a href="#top" className="foot-a">Gallery</a></p>
                       <p><a href="#top" className="foot-a">Privacy</a></p>
                       <p><a href="#top" className="foot-a">Careers</a></p>
                   </div>
               </div>
               <div className="col-3">
                   <h4 className="text-light foot-h42">PRODUCT</h4>
                   <div className="link-div1">
                       <p><a href="#top" className="foot-a">Work</a></p>
                       <p><a href="#top" className="foot-a">Services</a></p>
                       <p><a href="#top" className="foot-a">Pricing</a></p>
                       <p><a href="#top" className="foot-a">Features</a></p>
                       <p><a href="#top" className="foot-a">Docs</a></p>
                       <p><a href="#top" className="foot-a">Agencies</a></p>
                   </div>
               </div>
               <div className="col-3">
                   <h4 className="text-light foot-h43">FROM THE BLOG</h4>
                   <div className="blog-div">
                        <div>
                            <p className="text-muted" style={{width: '90%'}}><a href="#top" className="foot-a">Testing Working Robots at the Canadian Agency.</a></p>
                            <p className="text-muted">Jan 15, 2022</p>
                        </div>
                        <div>
                            <p className="text-muted" style={{width: '90%'}}><a href="#top" className="foot-a">How to start your new business with limited budget?</a></p>
                            <p className="text-muted">Jan 15, 2022</p>
                        </div>
                        <div>
                            <p className="text-muted" style={{width: '90%'}}><a href="#top" className="foot-a">Do we need more Javascript Framework?</a></p>
                            <p className="text-muted">Jan 15, 2022</p>
                        </div>
                   </div>
               </div>
           </div>
        </section>
    )
}

export default Footer