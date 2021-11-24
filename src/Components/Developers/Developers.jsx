import React from 'react';
import './Developers.css'
import {Container, Col, Image, Row} from 'react-bootstrap'
import Subhayan from "./images/Subhayan.jpeg"
import Saniya from "./images/SaniyaBhargav.jpeg"
import Aditya from "./images/AdityaSinha.jpeg"
import Singh from "./images/AdityaSingh.jpeg"
import Tejash from "./images/Tejash.jpeg"
import Sagnik from "./images/Sagnik.jpg"
import Mayank from "./images/Mayank.jpg"
import Piyush from "./images/Piyush.jpg"
import Anshul from "./images/Anshul.jpg"
import Sagar from "./images/Sagar.jpg"
import Shreya from "./images/Subhayan.jpeg"
import Atharv from "./images/Atharv.png"

export default function Developers (){
    return(
        <div className="dev">
        <section id="team" class="team content-section">
          <div class="container">
            <div class="row text-center">
              <div class="col-md-12">
                <h2 className="headings">Our Team</h2>
                <h3 className="headings">Meet the people who made this amazing page.</h3>
              </div>

              <div class="container">
                <div class="row">

                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                        <img src={Subhayan} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>Too good to be true.</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:nips.subhayan@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/SubhayanDas08"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/subhayan-das-a880a21b6/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Subhayan Das</h4>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                        <img src={Sagnik} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>I am ambitious and driven and thrive on challenge, while constantly setting goals for myself. Always looking for an opportunity to do better.</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:sagnikghoshmandra@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/sagnikghoshcr7/"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/sagnik-ghosh-564574199/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Sagnik Ghosh</h4>
                      
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Atharv} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>I am a Frontend developer and an active UX/UI Designer.</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:salpekaratharv19@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/atharv1703"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/atharv-salpekar/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Atharv Salpekar</h4>
                    
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Saniya} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>Creating a niche for myself, one step at a time</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:saniyabhargav@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/SaniyaBhargav"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/saniya-bhargav-a660111bb/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Saniya Bhargav</h4>
                    
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Shreya} alt="" class="img-responsive"></img>
                        <figcaption>
                          
                          <ul>
                            <li><a className="dev_link" href="mailto:shreyaweb72@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/shreya0204"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/shreya-agarwal-0204/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Shreya Agarwal</h4>
                      
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Mayank} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>Web Developer, Content Writer</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:jainmayank2509@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/mayankjain25"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/mayank-jain-688409208/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Mayank Jain</h4>
                    
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Tejash} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>I refuse to give up. </p>
                          <ul>
                            <li><a className="dev_link" href="mailto:tejsshrishri6tj@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/TejashShri"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/mwlite/in/tejash-shrivastva-6a0733208"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Tejash Shrivastava</h4>
                      
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Aditya} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>I’m mildly addicted to coffee</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:adityasinha361@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/adisin361"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/adisin361/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Aditya Sinha</h4>
                    
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Piyush} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>Calm and cool.</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:piyushjena29pkj@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="github.com/piyush-24"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/mwlite/in/piyush-jena-0799511b8"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Piyush Jena</h4>
                    
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Anshul} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>I love making innovative web designs come true</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:manavjain1949@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/Anshul759"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="www.linkedin.com/in/p-anshul-jain-a158541b9"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Anshul Jain</h4>
                      
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Singh} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>Mover. Learner.</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:20051652@kiit.ac.in"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/heyyitsadiii"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/aditya-singh-81a79a220/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Aditya Singh</h4>
                    
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="team-member">
                      <figure>
                      <img src={Sagar} alt="" class="img-responsive"></img>
                        <figcaption>
                          <p>Burning down the ideas on the paper to final projects.</p>
                          <ul>
                            <li><a className="dev_link" href="mailto:wishsagarks@gmail.com"><i class="fa fa-envelope fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://github.com/wishsagarks"><i class="fa fa-github fa-2x"></i></a></li>
                            <li><a className="dev_link" href="https://www.linkedin.com/in/sagar-satapathy-a4579b173/"><i class="fa fa-linkedin fa-2x"></i></a></li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 className="headings">Sagar Satapathy</h4>
                    
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </section>
        </div>
    )
}