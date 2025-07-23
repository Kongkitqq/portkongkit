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
I'm a fourth-year ICT student at Prince of Songkla University, currently seeking a cooperative internship opportunity in roles such as frontend developer, backend developer, full-stack developer, or in the field of machine learning. I'm eager to gain hands-on experience, learn from real-world projects, and continuously improve my skills through professional collaboration and development challenges.

      </p>
      <div className="button-container">
  <a href={resume} className="btn btn-resume" target="_blank" rel="noopener noreferrer">
    View Resume
  </a>
&nbsp;&nbsp;&nbsp;
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