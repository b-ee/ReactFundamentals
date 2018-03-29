import React, { Component } from 'react';
import _ from 'lodash';
import ConceptList from './ConceptList';
import { concepts, lifecycle } from './concepts';
import NewConcept from './NewConcept';

export default class ReactConceptsApp extends Component {
  constructor() {
    super();
    this.state = { concepts: concepts, lifecycle: lifecycle };
  }

  createConcept(text) {
    let conceptsArr = this.state.concepts
    conceptsArr.push({
      text,
      done: false
    });
    this.setState({concepts: conceptsArr});
  }

  toggleConcept(concepts) {
    let concept = _.find(this.state.concepts, concepts);
    concept.done = !concept.done;
    this.setState({concepts: this.state.concepts});
  }

  // toggleLifecycle(lifecycle) {
  //   let cycle = _.find(this.state.lifecycle, lifecycle);
  //   cycle.done = !cycle.done;
  //   this.setState({lifecycle: this.state.lifecycle});
  // }

  deleteLifecycle(lifecycle) {
    let clicked = _.find(this.state.lifecycle, lifecycle);
    let lifecycleArr = this.state.lifecycle;
    const clickedIndex = lifecycleArr.indexOf(clicked);
    lifecycleArr.splice(clickedIndex,1);
    this.setState({lifecycle: lifecycleArr});
  }

  render() {
    return (
      <div className="main">
      <div className="mainDiv">
        <h1>Concept List App</h1>
        <p>Use the list below to toggle concepts that you do or do not understand. Note that this will update when you refresh the page.</p>
        <hr />
        <NewConcept createConcept={this.createConcept.bind(this)} />
        <h2>General Concepts</h2>
        <ConceptList concepts={this.state.concepts} toggle={this.toggleConcept.bind(this)} />
        <hr />
        <h2>Lifecycle Methods</h2>
        <ConceptList concepts={this.state.lifecycle} toggle={this.deleteLifecycle.bind(this)} />
      </div>
      </div>
    )
  }
}