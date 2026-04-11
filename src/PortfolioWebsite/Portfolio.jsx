import React from 'react';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-1.3cb250b1.jpg&w=1920&q=75",
      type: "Mockup",
      category: "Mockup"
    },
    {
      id: 2,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-6.97d38976.jpg&w=1920&q=75",
      type: "Mockup",
      category: "Mockup"
    },
    {
      id: 3,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-9.67d36946.jpg&w=1920&q=75",
      type: "Mockup",
      category: "Mockup"
    },
    {
      id: 4,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-8.5013e616.jpg&w=1920&q=75",
      type: "Graphic Design",
      category: "Graphic Design"
    },
    {
      id: 5,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-9.67d36946.jpg&w=1920&q=75",
      type: "Graphic Design",
      category: "Graphic Design"
    },
    {
      id: 6,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-5.9d9c9e19.jpg&w=1920&q=75",
      type: "Logo",
      category: "Logo"
    },
    {
      id: 7,
      urlImag: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-6.97d38976.jpg&w=1920&q=75",
      type: "Logo",
      category: "Logo"
    }
  ];
  const [filterCategory, setFilterCategory] = React.useState("All");

  const filteredItems = filterCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filterCategory);
 
  return (
    <div className='portfolio'>
      {/* <h1 className='portfolioW'>Works</h1> */}
      <h1>My <span style={{color:"gold"}}>Portfolio</span></h1>
      <ul className="Ul">
        <li onClick={() => setFilterCategory("All")}>All</li>
        <li onClick={() => setFilterCategory("Logo")}>Logo</li>
        <li onClick={() => setFilterCategory("Video")}>Video</li>
        <li onClick={() => setFilterCategory("Graphic Design")}>Graphic Design</li>
        <li onClick={() => setFilterCategory("Mockup")}>Mockup</li>
      </ul>
      <div className="picture">
        {filteredItems.map(item => (
          <div className="card col-12 col-md-6 col-lg-3" style={{borderRadius:"10px"}} key={item.id}>
            <img src={item.urlImag} alt={item.type} style={{ width: '100%', height: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
