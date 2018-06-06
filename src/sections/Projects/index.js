import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';

import './styles.css'

class Projects extends Component {
  render() {
    return (
      <section className='projects-section'>
        <h2>Projects</h2>
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Thumbnail src='//placehold.it/250x250'>
              <h3>Project #1</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Link</Button>&nbsp;
                <Button bsStyle="default">Github</Button>
              </p>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Thumbnail src='//placehold.it/250x250'>
              <h3>Project #2</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Link</Button>&nbsp;
                <Button bsStyle="default">Github</Button>
              </p>
              </Thumbnail>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Thumbnail src='//placehold.it/250x250'>
              <h3>Project #3</h3>
              <p>Description</p>
              <p>
                <Button bsStyle="primary">Link</Button>&nbsp;
                <Button bsStyle="default">Github</Button>
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
