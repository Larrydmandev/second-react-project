import React from "react";

function Rating(params) {
    return(
        <section className="rat-sec ic-sec">
            <div className="rat-div">
                <div className="card" style={{width: '50rem', height: '17rem'}}>
                    <div className="card-body">
                        <div className="ic-pos">
                           <i class="fa-solid fa-bitcoin-sign ra-i" style={{position: 'relative', fontSize: '50px', color: 'white'}}></i>
                        </div>
                        <p className="card-text rat-p">
                        This is an extremely extensive template - the only limiting factor is your imagination - and - you don't get your themes featured on this site unless they are top notch. There are so many ways to put together a unique experience with this kit you'll be busy for days.
                        </p>
                        <div className="Name">
                           <h5 className="card-title ">JOHN BRADLEY</h5>
                           <h6 className="card-subtitle mb-2 text-muted">CLIENT, THEMEWAGON INC.</h6>
                            <div className="star-div">
                                <p className="star-p">(5 out of 5)</p>
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Rating