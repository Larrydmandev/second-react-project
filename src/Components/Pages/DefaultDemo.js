import React from "react";

function DefaultDemo(params) {
    return(
        <section className="def-sec">
            <div className="row">
                <div className="col-6">
                    <div>
                        <h4 className="def-h4">DEFAULT DEMO</h4>
                        <p className="def-p">
                        Reign is a multi-demo Bootstrap 5 Template that comes packed with  endless number of UI component and plugin options. It’s perfectly  crafted and optimized with exceptional design and advanced layout features best suited for any small business and agency website.
                        </p>
                    </div>
                    <div className="btn-div">
                        <button className="btn btn-outline-dark def-btn">hello</button>
                        <button className="btn btn-outline-secondary def-btn1">hello</button>
                    </div>
                </div>
                <div className="col-6">
                    <img src="./images/defaultdemo.png" className="rounded def-img" alt="" />     
                </div>
            </div>
        </section>
    )
}

export default DefaultDemo