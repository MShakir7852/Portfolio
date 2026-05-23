import React from 'react';
import { Link } from 'react-router-dom';
import pics from '../PortfolioWebsite/Image/image.png'
import { FaGithub } from 'react-icons/fa';

export default function Project() {
  const projects = [
    {
      id: 4,
      urlImag: `${pics}`,
      type: "Music Player Project",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      // category: "Graphic Design",
      Github_Link: "https://github.com/MShakir7852/MusicPlayer",
      live_Demo: "https://musicplayer-tan-one.vercel.app/"
    },
    {
      id: 6,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-5.9d9c9e19.jpg&w=1920&q=75",
      type: "Logo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
      category: "Logo"
    },
    {
      id: 7,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-6.97d38976.jpg&w=1920&q=75",
      type: "Logo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque. lorem",
      category: "Logo"
    }
  ];


  return (
    <div className="portfolio py-5 px-5">
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
