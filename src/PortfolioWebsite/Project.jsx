import React from 'react';
import { Link } from 'react-router-dom';
import pics from '../PortfolioWebsite/Image/image.png'
import todaopic from "../PortfolioWebsite/Image/todoapp.png"
import Skillnax from "../PortfolioWebsite/Image/skillnax.png"
import { FaGithub } from 'react-icons/fa';

export default function Project() {
  const projects = [
    {
      id: 1,
      urlImag: `${pics}`,
      type: "Music Player Project",
      description: "Technologies: HTML, CSS, JavaScript — Created a responsive music player with play, pause, next, and previous controls, implemented dynamic audio handling using JavaScript, and designed a clean and modern user interface.",
      Github_Link: "https://github.com/MShakir7852/MusicPlayer",
      live_Demo: "https://musicplayer-tan-one.vercel.app/"
    },
    {
     id: 2,
      urlImag: `${todaopic}`,
      type: "Todo Full stack Mern App",
      description: "Developed a full stack Todo Application with CRUD functionality using Node.js, Express.js, and MongoDB, built REST APIs for task management, integrated a responsive and user-friendly UI, and implemented efficient database operations for storing and managing tasks.",
      Github_Link: "https://github.com/MShakir7852/Todo-application",
      live_Demo: "https://musicplayer-tan-one.vercel.app/"
    },
    {
      id: 3,
      urlImag: `${Skillnax}`,
      type: "SkillNax Mern Website",
      description: "Technologies: HTML, CSS, JavaScript, React.js — Developed a responsive educational website with admin dashboard features, built interactive UI components and dashboard layouts, and improved user experience with responsive design and smooth navigation.",
      Github_Link: "https://github.com/MShakir7852/SkillNax",
      live_Demo: "https://musicplayer-tan-one.vercel.app/"
    }
    
     
  ];


  return (
    <div className="portfolio">
      <h1 className="text-center mb-4">
        My <span style={{ color: "gold" }}>Projects</span>
      </h1>

      <div className="row g-4 justify-content-center">
        {projects.map((item) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex" key={item.id}>

            <div className="card w-100 h-100" style={{ borderRadius: "10px" }}>

              <img
                src={item.urlImag}
                alt={item.type}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="card-title text-center">{item.type}</h5>

                <p className="card-text text-center description">
                  {item.description || "No description available."}
                </p>

                <div className="mt-auto d-flex flex-wrap justify-content-center gap-2">
                  <Link
                    to={item.Github_Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-sm"
                  >
                    <FaGithub className="me-1" /> GitHub
                  </Link>

                  <a
                    href={item.live_Demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Live Demo
                  </a>

                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
