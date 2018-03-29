import React from 'react';
import styled from 'styled-components';

const ArticleCard = styled.div`
  width: 75%;
  border: 3px solid black;
  background-color: lightgray;
  padding: 10px;
  margin: 1em 0;
`

const NytResults = props => {
  return (
    <div>
      <hr />
      <div>
        <button onClick={e => props.changePage(e, 'down')}>Previous 10</button>
        <button onClick={e => props.changePage(e, 'up')}>Next 10</button>
      </div>
      <hr />

      {props.results.map( result => {
        return (
          <ArticleCard key={result._id}>
            <h2>{result.headline.main}</h2>
            {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : '' }
            <p>
              {result.snippet.replace('<p>', '').replace('</p>', '')}
              <br/>
              {result.keywords.length > 0 ? ' Keywords: ' : ''}
            </p>            
            <ul>
              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
            </ul>
            <a href={result.web_url}><button>Read It</button></a>
          </ArticleCard>
        )
      })}

      <div>
        <button onClick={e => props.changePage(e, 'down')}>Previous 10</button>
        <button onClick={e => props.changePage(e, 'up')}>Next 10</button>
      </div>
    </div>
  )
}
export default NytResults;