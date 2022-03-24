import react from 'react';


function Navbar(params) {
    return(
        <section>
            <div className="background-div">
                <nav className="navbar navbar-expand sticky-top lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand main-a" href="#">RE!GN</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav-div" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active nav-a" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-a" href="/ProjectPage">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-a" href="/AboutPage">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-a" href="/ContactPage">Contact</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle nav-a" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Docs
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr style={{width: '100%', position:'relative', bottom: '5%' , color: 'white'}}/>
               
            </div>
        </section>
    )
}

export default Navbar