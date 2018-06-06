import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

import Nav from './sections/Nav';
import Intro from './sections/Intro';
import Contact from './sections/Contact';
import About from './sections/About';
import Projects from './sections/Projects'

configureAnchors({offset: -60, scrollDuration: 1000})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <ScrollableAnchor id={'about'}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
