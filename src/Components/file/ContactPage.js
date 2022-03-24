import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


function ContactPage(params) {
    return(
        <section>
            <Navbar/>
            <div className="form-div1">
               <h1>CONTACT PAGE</h1>
            </div>
            <div className="form-div">
                <div className="container">
                   <form className="m-auto mt-5">
                        <div className="mb-4">
                            <input type="email" placeholder="Email" className="form-control form-email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-4">
                            <input type="password" placeholder="password" className="form-control form-pass" id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-4">
                            <textarea name="" id="" cols="135" rows="10" placeholder="Message" className="form-textarea"></textarea>
                        </div>
                        <button type="submit" class="btn" id="sumbutton" style={{width:'100%', backgroundColor: 'yellowgreen', color: 'white'}} >Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </section>
    )
}

export default ContactPage