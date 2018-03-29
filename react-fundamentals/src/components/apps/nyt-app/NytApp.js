import React, { Component } from 'react';
import NytResults from './NytResults';
import styled from 'styled-components';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'b774df187bef41be809f1d6cad5474c5';

const SubmitButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background-color: black;
  color: white;
  border: 1px solid gray;
`;

const FormInput = styled.input`
  padding: light-blue;
  color: black;
`

export default class NytApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      startDate: '',
      endDate: '',
      pageNumber: 0,
      results: []
    };
  }

  handleSubmit = e => {
    this.setState({ pageNumber: 0 })
    this.fetchResults();
    e.preventDefault();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
    url = this.state.startDate ? url + `&begin_date=${this.state.startDate}` : url;
    url = this.state.endDate ? url + `&end_date=${this.state.endDate}` : url;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.response.docs })
      })
  }

  changePageNumber = (e, direction) => {
    e.preventDefault();
    if (direction === 'down' && this.state.pageNumber > 0) {
      let newPageNumber = this.state.PageNumber - 1;
      this.setState({ pageNumber: newPageNumber })
      this.fetchResults();
    }
    if (direction === 'up') {
      let newPageNumber = this.state.pageNumber + 1;
      this.setState({ pageNumber: newPageNumber });
      this.fetchResults();
    }
  }

  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={e => this.handleSubmit(e)} >
            <span>Enter a SINGLE search term (required): </span>
            <FormInput type="text" name="search" onChange={this.handleChange} required /><br />
            <span>Enter a start date: </span>
            <FormInput type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
            <span>Enter an end date: </span>
            <FormInput type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
            <SubmitButton className="submit">Submit search</SubmitButton>
          </form>

          {
            this.state.results.length > 0 ? <NytResults results={this.state.results} changePage={this.changePageNumber} /> : <div></div>
          }
        </div>
      </div>
    )
  }
}