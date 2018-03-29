import React from 'react';
import styled from 'styled-components';

const MovieList = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 5px;
`

const Movie = styled.li`
  padding: 5px;
  margin: 5px;
  background: lightgray;
  width: 260px;
  height: 500px;
  float: left;
  list-style-type: none;
  text-align: center;
  border: 2px ridge darkgray;
`

const MoviePoster = styled.img`
  width: 250px;
  height: auto;
  max-height: 375px;
`

const Title = styled.p`
  font-size: 1.4em;
  margin-top: 10px;
  margin-bottom: 0;
  line-height: 0.9;
  font-weight: bold;
`

const FormResults = ({results}) => {
  const link = 'https://image.tmdb.org/t/p/w300';
  const resultsFormatted = results.map((element, index) =>
    <Movie key={index}>
      <MoviePoster src={results[index].poster_path === null ? 'http://via.placeholder.com/640x960' : `${link}${results[index].poster_path}`} alt={`${results[index].title} poster`} className="resultPoster" />
      <div>
        <Title>{results[index].title}</Title>
        <p>{results[index].release_date}</p>
      </div>
    </Movie>
    )  
  return (
    <MovieList id="results">
      {resultsFormatted}
    </MovieList>
  )
}

export default FormResults;