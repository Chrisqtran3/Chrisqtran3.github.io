import React, { Component } from 'react';
import './styles.css';

import { Phone, Email } from '../../components/SVGs'


class Contact extends Component {
  render() {
    return (
        <section className='contact-section'>
          <h1>Contact:</h1>
          <div className='flex-container'>
            <div className='contact-container'>
              <Email />
              <p>tran.chris10@gmail.com</p>
            </div>
            <div className='contact-container'>
              <Phone />
              <p>(713) 253-9670</p>
            </div>
          </div>
        </section>
    )
  }
}

export default Contact
