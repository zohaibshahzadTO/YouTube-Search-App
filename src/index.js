import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB2VIfUHF6jQ0MMONwBE_rmURoHqvsUA8A';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Create a new component. This component should produce some HTML.
// After we need to make sure it goes to the DOM.
const App = () => {
  return <div><SearchBar /></div>;
}

// Take this components generated HTML and put it on the DOM (or page).
ReactDOM.render(<App />, document.querySelector('.container'));
