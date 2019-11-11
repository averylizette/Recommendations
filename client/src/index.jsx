import React from 'react';
import ReactDOM from 'react-dom';
import Recommendation from './App.jsx';

var listingId = location.pathname.replace(/\//g, '');
ReactDOM.render(<Recommendation listingId={listingId}/>, document.getElementById('Recommendation'));