import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import MarvelService from "./services/MarvelService";

import './style/style.scss';

// const marvelservice = new MarvelService();

// marvelservice.getAllCharacters().then(res => console.log(res));
// marvelservice.getCharacter(1011052).then(res => console.log(res));

// marvelservice.getAllCharacters().then(res => res.data.results.forEach(item => { console.log(item.name) }));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
