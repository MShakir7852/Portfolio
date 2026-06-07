import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const stats = [
    { value: "Fresher", label: "Years of Experience" },
    { value: "3+", label: "Completed Projects" },
    { value: "10", label: "Happy Clients" },
    { value: "3+", label: "Awards Won" },
];

export default function About() {
    return (
        <div className="container-fluid h-auto">

            <div className="Heading-Text text-center">
                <h1>Resume</h1>
                <h2>About <span className="me">ME</span></h2>
            </div>

    
            <div className="main-content h-auto">
                <h3 className="text-center mt-4">Personal Info</h3>

                <div className="row main-content-box px-3 py-4 g-4">
                    <div className="col-12 col-md-6">
                        <div className="info-card">
                            <ul className="list-unstyled mb-0">
                                <li className="info-item">
                                    <span className="info-label">First Name</span>
                                    <span className="info-value">Muhammad</span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Age</span>
                                    <span className="info-value">22 Years</span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Freelance</span>
                                    <span className="info-value available">
                                        <span className="available-dot" /> Available
                                    </span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Phone</span>
                                    <span className="info-value">+3267852678</span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Skype</span>
                                    <span className="info-value">No</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="info-card">
                            <ul className="list-unstyled mb-0">
                                <li className="info-item">
                                    <span className="info-label">Last Name</span>
                                    <span className="info-value">Shakir</span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Nationality</span>
                                    <span className="info-value">Pakistani</span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Address</span>
                                    <span className="info-value">Punjab, Pakistan</span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Email</span>
                                    <span className="info-value info-email">
                                        muhammad.shakir.ahmadani@gmail.com
                                    </span>
                                </li>
                                <li className="info-item">
                                    <span className="info-label">Languages</span>
                                    <span className="info-value">English, Urdu</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=" statecontent row justify-content-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-6 mb-3">
                            <div className="card text-center p-3">
                                <h1>{stat.value}</h1>
                                <p>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          

           
        </div>
    );
}