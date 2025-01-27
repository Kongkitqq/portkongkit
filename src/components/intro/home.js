import React from 'react'
import './home.css';
import bg from '../../pic/profile.png'
import resume from '../../pic/Resume_Kongkit Yeesai.pdf'
export const Home = () => {
  return (
    <section id="Name">
  <div className="content-container">
    <div className="text-content">
      <span>:D </span>
      <span className="homeName">
        <span className="Kyai">K</span>ongkit Yeesai
      </span>
      <p className="homePara">
        I'm a third-year ICT student at Prince of Songkla University. I'm looking for an internship in roles like frontend developer, web developer, backend developer, data analyst, or system analyst. I want to gain experience, learn from professionals, and improve my skills by working on real projects.
      </p>
      <button className="btn">
        <a href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>
      </button>
    </div>
    <div className="image-container">
      <img src={bg} alt="Profile" className="profile-picture" />
    </div>
  </div>
</section>

  )
}
export default Home;