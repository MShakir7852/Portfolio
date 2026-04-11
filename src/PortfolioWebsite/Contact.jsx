import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic validation function
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="container-fluid p-5">
          <h2 className=" heading text-center mb-4">Contact <span style={{color:"gold"}}>Us</span></h2>
      <div className="row justify-content-center">
        <div className="Detail col-md-8 col-lg-6 col-12  p-4 shadow-sm mt-5">
          <h1 className="Shoy mb-4 text-warning">Don't be shy!</h1>
          <p className="mb-4">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="Address mb-4">
            <h5>
              <FaMapMarkerAlt className="me-2 text-primary" /> Address Point
            </h5>
            <p>P/O MuhammadPur,Tehsil Jmapur,District Rajanpur</p>
          </div>
          <div className="email mb-4">
            <h5>
              <FaEnvelope className="me-2 text-primary" /> Mail Me
            </h5>
            <p>mshakir7809797@gmail.com</p>
          </div>
          <div className="contact mb-4">
            <h5>
              <FaPhoneAlt className="me-2 text-primary" /> Call Me
            </h5>
            <p>+92 326 78 52 678</p>
          </div>
          <div className="social-media mt-4">
            <h5>Connect with me:</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info">
                <FaTwitter size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary">
                <FaLinkedin size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger">
                <FaInstagram size={30} />
              </a>
            </div>
          </div>

        </div>
        <div className="col-md-8 col-lg-6 col-12">
          
          {submitted && <div className="alert alert-success">Thank you for contacting us!</div>}
          <form onSubmit={handleSubmit} className='Form'>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name && "is-invalid"}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                className={`form-control ${errors.subject && "is-invalid"}`}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className={`form-control ${errors.message && "is-invalid"}`}
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="submit-btn btn btn-warning w-50 m-auto">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}
