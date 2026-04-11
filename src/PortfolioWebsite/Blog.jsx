import React from 'react';

export default function Blog() {
  const blogpostitem = [
    {
      blogImage: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-1.26de9082.jpg&w=1920&q=75",
      blogName: "How to Own Your Audience by Creating an Email List",
      blogDiscription: "Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b"
    },
    {
      blogImage: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-2.3f2d89f0.jpg&w=1920&q=75",
      blogName: "Top 10 Toolkits for Deep Learning in 2022",
      blogDiscription: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e"
    },
    {
      blogImage: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-3.aaa1f372.jpg&w=1920&q=75",
      blogName: "Everything You Need to Know About Web ",
      blogDiscription: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
    },
    {
      blogImage: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-4.61f2f58c.jpg&w=1920&q=75",
      blogName: "How to Inject Humor & Comedy Into Your Brand",
      blogDiscription: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es"
    },
    {
      blogImage: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-5.e83704c7.jpg&w=1920&q=75",
      blogName: "Women in Web Design: How To Achieve Success",
      blogDiscription: "Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
      blogImage: "https://tunis-nextjs.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog-post-6.2b6b686b.jpg&w=1920&q=75",
      blogName: "Evergreen versus topical content: An overview",
      blogDiscription: "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
    },

  ]
  return (
    <div className='Blog'>
      <h1 className='text-center'>My <span style={{color:"gold"}}>Blog</span></h1>
      <div className="container mt-4">
        <div className="row">
          {blogpostitem.map((el, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100" style={{ width: "100%" }}>
                <img src={el.blogImage} className="card-img-top" alt={el.blogName} />
                <div className="card-body">
                  <h5 className="card-title">{el.blogName}</h5>
                  <p className="card-text">{el.blogDiscription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
