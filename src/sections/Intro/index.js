import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './styles.css'

import img from './intro-img.png';

import { Github, LinkedIn } from '../../components/SVGs';

class Intro extends Component {
  render() {
    return (
      <section className='intro-section'>
        <div className='container'>
          <Jumbotron className='jumbotron'>
            <div className='intro-img-div'>
              <img src={img} alt='Intro' className='intro-img' />
            </div>
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
