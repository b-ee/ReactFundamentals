import React, {Component} from 'react';
import {Form} from './Form';
import styled from 'styled-components';

export default class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <Form />
          <hr />
        </div>
      </div>
    )
  }
}