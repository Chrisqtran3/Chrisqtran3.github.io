import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './styles.css'

import { Github, LinkedIn } from '../../components/SVGs';

class Intro extends Component {
  render() {
    return (
      <section className='intro-section'>
        <div className='container'>
          <Jumbotron className='jumbotron'>
            <img src='//placehold.it/200x200' alt='Intro' className='intro-img' />
            <h1>Web Developer</h1>
            <hr />
            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
            <div className='icons'>
              <Github />
              <LinkedIn />
            </div>
          </Jumbotron>
        </div>
      </section>
    )
  }
}

export default Intro;
