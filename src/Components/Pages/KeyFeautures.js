import react from 'react';

function KeyFeautures(params) {
    return(
       <section className="key-sec">
           <div className="row">
               <div className="col-6">
                   <div className="img-div">
                        <img src="./images/key-features.png" className='key-img' alt="" />
                   </div>
               </div>
               <div className="col-6">
                       <h3>KEY FEAUTURES</h3>
                   <div className="">
                     <p style={{color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}>Built With<span style={{fontWeight: 'bold'}}> Bootstrap 5.x</span> </span></p>
                     <p style={{color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}>One page template</span></p>
                     <p style={{fontWeight: 'bold', color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}>40+ unique sections</span></p>
                     <p style={{color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}>13+ headers design</span></p>
                     <p style={{color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}>20+ different pages</span></p>
                     <p style={{color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}><span style={{fontWeight: 'bold'}}>Gulp, Npm, SASS</span> environment</span></p>
                     <p style={{color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}><span style={{fontWeight: 'bold'}}>RTL</span> Support</span></p>
                     <p style={{color: 'gray'}}><i class="fa-solid fa-check"></i> <span style={{paddingLeft: '1%'}}>Re Usable component system</span></p>
                     <button className="btn btn-outline-dark">DOCUMENTATION</button>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default KeyFeautures