import React from 'react'
import './home.css';
import bg from '../../pic/profile.png'
import resume from '../../pic/Resume_Kongkit_Yeesai.pdf'
import tran from '../../pic/Tran.pdf'
export const Home = () => {
  return (
    <section id="Name">
  <div className="content-container">
    <div className="text-content">
      <span className="homeName">
        <span className="Kyai">K</span>ongkit Yeesai
      </span>
      <p className="homePara">
As a final-year ICT student at Prince of Songkla University, I have practical experience in full-stack web development, gained from my recent internship. I'm now looking for a Co-operative Education opportunity to grow my skills in building web applications (front-end and back-end). I'm particularly interested in exploring how to integrate and deploy machine learning models using modern web technologies for real-world use.      </p>
      <div className="button-container">
  <a href={resume} className="btn btn-resume" target="_blank" rel="noopener noreferrer">
    View Resume
  </a>

  <a href={tran} className="btn btn-transcript" target="_blank" rel="noopener noreferrer">
    View Transcript
  </a>
</div>
    </div>
    <div className="image-container">
      <img src={bg} alt="Profile" className="profile-picture" />
    </div>
  </div>
</section>

  )
}
export default Home;
