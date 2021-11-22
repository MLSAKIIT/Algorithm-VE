import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div className="footer_description">
                    <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        llit anim id est laborum.
                    </p>
                </div>
                <div className="footer_links_div">
                    {/* <div className="footer_links">
                        <h3 className="footer_links_heading">About</h3>
                        <li className="footer_link_a"><a>Link</a></li>
                        <li className="footer_link_a"><a>Link</a></li>
                        <li className="footer_link_a"><a>Link</a></li>
                        <li className="footer_link_a"><a>Link</a></li>
                    </div> */}
                    <div className="footer_links">
                        <h3 className="footer_links_heading">Projects</h3>
                        <li className="footer_link_a"><a>Link</a></li>
                        <li className="footer_link_a"><a>Link</a></li>
                        <li className="footer_link_a"><a>Link</a></li>
                        <li className="footer_link_a"><a>Link</a></li>
                    </div>
                    <div className="footer_links">
                        <h3 className="footer_links_heading">Contact</h3>
                        <p>ABC, XYZ India Pakistan</p>
                    </div>
                </div>
                <div className="footer_particle_animation">
                    <div className = "footer_animated_particles footer_animated_particles1"></div>
                    <div className = "footer_animated_particles footer_animated_particles2"></div>
                    <div className = "footer_animated_particles footer_animated_particles3"></div>
                    <div className = "footer_animated_particles footer_animated_particles4"></div>
                    <div className = "footer_animated_particles footer_animated_particles5"></div>
                    <div className = "footer_animated_particles footer_animated_particles6"></div>
                    <div className = "footer_animated_particles footer_animated_particles7"></div>
                    <div className = "footer_animated_particles footer_animated_particles8"></div>
                    <div className = "footer_animated_particles footer_animated_particles9"></div>
                </div>
            </div>
        </>
    );
}

export default Footer;