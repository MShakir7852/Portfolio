import React, { Component } from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import pic from "../PortfolioWebsite/Image/WhatsApp Image 2026-05-13 at 8.56.11 PM.jpeg";
import resumePDF from "./Shakir-Mernstack.pdf";
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid HomePage">
                <div className="row">

                    {/* ── Decorative skewed panel ── */}
                    <div className="sid d-none d-lg-block col-lg-4"></div>

                    {/* ── Profile Image ── */}
                    <div className="Img Content text-center col-12 col-md-12 col-lg-4">
                        <img
                            src={pic}
                            alt="Muhammad Shakir"
                            style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                        />
                    </div>

                    {/* ── Text + Buttons ── */}
                    <div className="contents col-12 col-md-6 col-lg-4">
                        <h1 className="mt-3">I am M.Shakir</h1>
                        <h2 className="typing-text">
                            <span></span>
                        </h2>
                        <p>
                            A passionate MERN Stack Developer based in Lahore, Pakistan,
                            focused on crafting clean, responsive, and user-friendly web
                            experiences using React, Node.js, Express, and MongoDB.
                        </p>

                        {/* ── Button Row ── */}
                        <div className="home-btn-row">

                            {/* About Me */}
                            <div className="aboutbtn d-flex align-items-center">
                                <button className="btn btn-primary me-2">About Me</button>
                                <FaArrowRight className="Icon" />
                            </div>

                            {/* Resume Download */}
                            <a
                                href={resumePDF}
                                download="Muhammad_Shakir_Resume.pdf"
                                className="home-resume-btn"
                                aria-label="Download Resume PDF"
                            >
                                <span className="home-resume-btn-inner">
                                    <FaDownload className="home-resume-icon" />
                                    <span>Download CV</span>
                                </span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}