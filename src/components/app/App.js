import React from 'react';
import './App.scss';
import Counter from '../Counter';
import Navigation from '../navigation/Navigation';
import Display from '../display/Display';

function App() {
  return (
    <div class="App">
      <Navigation />
      <Display />
      {/* <Counter /> */}
    </div>

  );
}

export default App;
