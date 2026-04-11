import React, { Component } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import pic from "./shakir.jpeg"
import './Home.css'
export default class Home extends Component {
    render() {
        return (
            <>
                <div className="container-fluid HomePage">
                    <div className="row">
                        <div className="sid d-none d-lg-block col-lg-4  col-12 col-md-12 col-lg-4"></div>

                        <div className="Img Content text-center col-12 col-md-12 col-lg-4">
                            <img src={pic} alt="Profile" style={{width:"100%",height:"100%",borderRadius:"20px"}} />
                        </div>

                        <div className="contents col-12 col-md-6 col-lg-4">
                            <h1 className="mt-3">I am M.Shakir</h1>
                            <h2>Web Developer</h2>
                            <p>I'm a Tunisian-based web designer & front‑end developer focused on crafting clean & user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me.</p>
                            <div className="aboutbtn d-flex align-items-center mt-3">
                                <button className="btn btn-primary me-2">More About Me</button>
                                <FaArrowRight className="Icon" />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
