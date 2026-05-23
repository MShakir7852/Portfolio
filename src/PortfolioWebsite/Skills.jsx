import React from 'react';

export default function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "70%" },
    { name: "Bootstrap", level: "80%" },
    { name: "JavaScript", level: "70%" },
    { name: "React.js", level: "80%" },
    { name: "Node.js", level: "80%" },
    { name: "Express.js", level: "80%" },
    { name: "MongoDB", level: "90%" },
    { name: "Authentication", level: "90%" },
    { name: "Git & GitHub", level: "90%" },
    { name: "Authorization", level: "90%" },
];
  return (
    <div className='Blog'>
      <h1 className='text-center'>My <span style={{ color: "gold" }}>Skills</span></h1>
       <div className="row justify-content-center px-3">
                {skills.map((skill, index) => (
                    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                        <div className="skill-bar-card">
                            <div className="skill-bar-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">{skill.level}</span>
                            </div>
                            <div className="skill-bar-track">
                                <div
                                    className="skill-bar-fill"
                                    style={{ width: skill.level }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  );
}
