import React from 'react';
import PropTypes from 'prop-types';

export const Projects = [
  { title: 'Beast Creature', author: 'Adam Smith', link: 'https://codepen.io/Adamws33/pen/KZQxwJ', date: '01/15/2018' },
  { title: 'Another Beast', author: 'Allison Summers', link: 'https://codepen.io/alsummers/pen/vpjXOX', date: '01/15/2018' },
  { title: 'Beast Mode', author: 'Andres Martin', link: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '01/15/2018' },
  { title: 'Beasty', author: 'Andrew Gunst', link: 'https://codepen.io/agunst99/pen/RxMYOM', date: '01/15/2018' }
]

export default class PropsDemo extends React.Component {
  constructor(props) {
    super(props)
    console.log("PropsDemo class:", props);
    this.state = { projects: Projects };
    console.log("State check:", this.state.projects)
  }
  render() {
    const works = this.state.projects.map((project, i) => {
      console.log("Project", project);
      console.log("Index", i)
      return (
        <div key={i}>
          <Title title={project.title} link={project.link}/>
          <Author author={project.author} />
          <Date date={project.date} />
          <hr />
        </div>
      );
    })
    

    return (
      <div className="main">
        <div className="mainDiv">
          <h1>List of Projects</h1>
          <dl>
            {works}
          </dl>
        </div>
      </div>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <dt><a href={this.props.link} target="blank">{this.props.title}</a></dt>
    )
  }
}

class Author extends React.Component {
  constructor(props) {
    super(props)
    console.log("Title props:", props);
  }
  render() {
    return (
      <dd>{this.props.author}</dd>
    )
  }
}

class Date extends React.Component {
  render() {
    return (
      <dd>{this.props.date}</dd>
    )
  }
}

PropsDemo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
  title: '[Project Name]',
  author: '[Student Name}',
  link: '[Project Link]',
  date: '[Project Date]'
}