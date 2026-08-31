import React from "react";

const Team = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5">People</h1>
      <div className="row">
        <div className="col text-center">
          <img style={{ borderRadius: "100%" }} src="media/me.jpeg"></img>
          <h4 className="mt-3">Keshav Sharma</h4>
          <p>Software Engineer</p>
        </div>
        <div className="col">
          <p>
            MERN Stack Developer specializing in building scalable full‑stack
            web applications and AI-powered products.</p>  <p>Experienced in React.js,
            Node.js, Express.js, MongoDB, REST API development, and AI
            integrations such as OpenAI GPT and Google Gemini. </p>
            <p> Strong foundation
            in Data Structures and Algorithms with experience developing
            responsive user interfaces, secure authentication systems, and
            production-ready backend APIs.
          </p>
          <div className="d-flex justify-content-evenly fs-3 mt-2">
            <a target="_blank" href="https://www.linkedin.com/in/sharma-keshav1/">
          <i class="fa-brands fa-linkedin"></i>
          </a>
          <a  target="_blank" href="keshavsharma6008@gmail.com"><i class="fa-regular fa-envelope"></i></a>
          <a  target="_blank" href=" https://github.com/KeshavMoudgil"><i class="fa-brands fa-github"></i>
          </a>
          <a  target="_blank" href="https://keshavmoudgil.github.io/Keshav-Portfolio/"><i class="fa-solid fa-globe"></i></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Team;
