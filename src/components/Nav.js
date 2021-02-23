import React from 'react';


const Nav = () => {

return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container headerPic">
        <a className="navbar-brand text-dark" href="index.html">Start Bootstrap</a>
        <button className="navbar-toggler navbar-toggler-right text-dark" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="about.html">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="post.html">Sample Post</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="contact.html">Contact</a>
                </li>
                    <li className="mr-4"><a href="/logout">Login</a> </li>
                    <li><a href="/login">Register</a> </li>
            </ul>
        </div>
    </div>
</nav>

  );
}

  export default Nav