import React, { Component } from 'react';
import './styles.css'

class About extends Component {
  render() {
    return (
      <section className='about-section'>
        <div className='container'>
          <h1>About</h1>
          <p>
            I am a full-stack software engineer that is passionate about building complex and attractive web applications. Learning new technologies is what attracts me to this field and I look forward to any complex challenges sent my way. I have used React, Node, Express, and MongoDB in my past applications and look to continue building my skills.
          </p>
          <p>
            In my free time, you can find me playing my guitar and singing, or dedicating some time into my physical health through soccer, weight lifting, or dancing.
          </p>
        </div>
      </section>
    )
  }
}

export default About;
