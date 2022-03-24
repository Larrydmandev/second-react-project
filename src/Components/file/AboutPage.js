import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

function AboutPage(params) {
    return(
        <section>
           <Navbar/>
           <div style={{marginBottom: '10%'}}>
               <div className="abt-div">
                    <h1>ABOUT PAGE</h1>
                </div>

                <div style={{marginTop: '10%'}}>
                    <h3 style={{textAlign: 'center', fontSize: '100px'}}>ABOUT US</h3>
                </div>

                <div style={{marginBottom: '10%'}}>
                    <p style={{textAlign: 'center'}}>
                        THIS IS A TEMPLATE FOR ANY BEGINNER A TEMPLATE TO USE WHILE STARTING
                    </p>
                </div>


               <div style={{marginBottom: '10%'}}>
                    <h3 style={{textAlign: 'center'}}>ABOUT OUR WORKERS</h3>
                </div>

               <div className="row">
                    <div className="col-4">
                        <div className="card main-card" style={{width: '18rem', marginLeft: '10%'}}>
                            <div className="card-body">
                            <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                                <img src="../images/larrydev.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
                            </div>
                            <h5 className="card-title" style={{textAlign: 'center'}}>Larry Dev</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>CEO</h6>
                            <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{width: '18rem', marginLeft: '10%'}}>
                            <div className="card-body">
                            <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                                <img src="../images/markdasher.jpg" alt="" className="rounded-circle" style={{width: '40%', height: '40%'}}/>
                            </div>
                            <h5 className="card-title" style={{textAlign: 'center'}}>Mark Dasher</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>COO</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-body">
                            <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                                <img src="../images/samroberto.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
                            </div>
                            <h5 className="card-title" style={{textAlign: 'center'}}>Sam Roberto</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>CFO</h6>
                            </div>
                        </div>
                    </div>
              </div>

               <div className="row" style={{marginTop: '5%'}}>
                    <div className="col-4">
                        <div className="card main-card" style={{width: '18rem', marginLeft: '10%'}}>
                            <div className="card-body">
                            <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                                <img src="../images/leo.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
                            </div>
                            <h5 className="card-title" style={{textAlign: 'center'}}>Leo Mclaren</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>UI/UX Designer</h6>
                            <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card main-card" style={{width: '18rem', marginLeft: '10%'}}>
                            <div className="card-body">
                            <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                                <img src="../images/griffinWooldridge.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
                            </div>
                            <h5 className="card-title" style={{textAlign: 'center'}}>Griffin Wolldridge</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>Frontend Developer</h6>
                            <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card main-card" style={{width: '18rem'}}>
                            <div className="card-body">
                            <div style={{position: 'relative', left: '29%', marginBottom: '5%'}}>
                                <img src="../images/sazadaryan.jpg" alt="" className="rounded-circle" style={{width: '39%', height: '39%'}}/>
                            </div>
                            <h5 className="card-title" style={{textAlign: 'center'}}>Sazad Aryan</h5>
                            <h6 className="card-subtitle mb-2 text-muted" style={{textAlign: 'center'}}>Backend Developer</h6>
                            <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>


            <Footer/>
        </section>
    )
}

export default AboutPage