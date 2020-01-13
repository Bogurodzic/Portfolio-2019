import React from 'react';
import './App.scss';
import Counter from '../Counter';
import Navigation from '../navigation/Navigation';
import Display from '../display/Display';

import '../../resources/styles/reset.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Display />
      {/* <Counter /> */}
    </div>

  );
}

export default App;
