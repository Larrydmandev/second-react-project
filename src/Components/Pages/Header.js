import React from "react";
import Navbar from "../Pages/Navbar";
import DefaultDemo from "../Pages/DefaultDemo";
import NextProject from "../Pages/NextProject";
import Rating from "../Pages/Rating";
import KeyFeautures from "../Pages/KeyFeautures";
import NewProject from "../Pages/NewProject";
import Footer from "../Pages/Footer";

function Header(params) {
   return(
       <section>
           <Navbar/>
            <div className="des-div">
                <h1 className="text-light des-h1">INTRODUCING REIGN</h1>
                <p className="text-muted des-p">ONE AND MULTIPURPOSE TEMPLATE</p>
           </div>
           <DefaultDemo/>
           <NextProject/>
           <Rating />
           <KeyFeautures/>
           <NewProject/>
           <Footer/>
       </section>
   )   
}

export default Header