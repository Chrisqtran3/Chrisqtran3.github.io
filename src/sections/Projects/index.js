import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

import flixRate from './app-screenshot.png';

import './styles.css'

class Projects extends Component {
  render() {
    return (
      <section className='projects-section'>
        <h2>Projects</h2>
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Thumbnail src={flixRate} alt='Flix Rate app'>
              <h3>FlixRate</h3>
                <p>Web application that allows users to search and rate their favorite movies and TV shows using the OMDB API</p>
              <p>
                <Button bsStyle="primary">
                  <a target='_blank' rel="noopener noreferrer" href='https://flix-rate.herokuapp.com/'>Link</a>
                </Button>&nbsp;
              </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}

export default Projects;
