import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    const Skill = [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "70%" },
        { name: "Bootstrap", level: "80%" },
        { name: "JavaScript", level: "70%" },
        { name: "React.Js", level: "80%" },
        { name: "Node.Js", level: "80%" }

    ];

    return (
        <div className="container-fluid">
            <div className="Heading-Text text-center">
                <h1>Resume</h1>
                <h2>About <span className="me">ME</span></h2>
            </div>

            <div className="main-content h-100">
                <h3 className="text-center mt-4">Personal Info</h3>

                <div className="row main-content-box">
                    <div className="col-12 col-md-6 p-5 m-auto">
                        <ul className="list-unstyled">
                            <li><p>First Name: <b>Muhammad</b></p></li>
                            <li><p>Age: <b>22 Years</b></p></li>
                            <li><p>Freelance: <b>Available</b></p></li>
                            <li><p>Phone: <b>+3267852678</b></p></li>
                            <li><p>Skype: <b>No</b></p></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <ul className="list-unstyled">
                            <li><p>Last Name: <b>Shakir</b></p></li>
                            <li><p>Nationality: <b>Pakistani</b></p></li>
                            <li><p>Address: <b>Punjab</b></p></li>
                            <li><p>Email: <b>muhammad.shakir.ahmadani@gmail.com</b></p></li>
                            <li><p>Languages: <b>French, English,Urdu</b></p></li>
                        </ul>
                    </div>
                </div>

                <div className="year row my-5">
                    <div className="col-12 col-md-3 col-lg-6 mb-3">
                        <div className="card text-center p-3">
                            <h1>12+</h1>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-6 mb-3">
                        <div className="card text-center ">
                            <h1>97+</h1>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-6 mb-3">
                        <div className="card text-center ">
                            <h1>81+</h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-6">
                        <div className="card text-center p-3">
                            <h1>53+</h1>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skil-text">
                <h3 className="text-center">Skills</h3>
            </div>

            <div className="skills ">
                {Skill.map((skill, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className="border123">
                            <p >{skill.name}</p>
                            <p >{skill.level}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
