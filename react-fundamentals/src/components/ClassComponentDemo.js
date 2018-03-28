import React, { Component } from 'react';
import ThumbsUp from 'react-icons/lib/fa/thumbs-up';
import ThumbsDown from 'react-icons/lib/fa/thumbs-down';

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { likeCount: 0 , dislikeCount: 0 };
  }

  likeIncrementCount = () => {
    this.setState(
      { likeCount: this.state.likeCount + 1 }
    );
  };

  dislikeIncrementCount = () => {
    this.setState(
      { dislikeCount: this.state.dislikeCount - 1 }
    );
  };

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <ClassComponentNotes />
          <hr />
          <h3>Smash that like button!</h3>
          <button onClick={this.likeIncrementCount}>
            <ThumbsUp /> {this.state.likeCount}
          </button>
          <br />
          <h3>Or don't.</h3>
          <button onClick={this.dislikeIncrementCount}>
            <ThumbsDown /> {this.state.dislikeCount}
          </button>
        </div>
      </div>
    );
  }
}

const ClassComponentNotes = function() {
  return (
    <div>
      <h1>Class Components</h1>
      <p>Class components are considered the "React way" of writing components.</p>
      <dl>
        <dt>ES6 JS Classes</dt>
        <dd>Built on these, must understand them.</dd>
        <dt>Must extend Component</dt>
        <dd>Class components need to extend the React Component.</dd>
        <dt>render()</dt>
        <dd>Class components must always have a render method.</dd>
        <dt>export</dt>
        <dd>Only one class component exported per file.</dd>
      </dl>
    </div>
  )
}