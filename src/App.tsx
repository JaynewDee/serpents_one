import React from "react";
import "./App.scss";
import Serpent from './components/Serpent';

const App = () => {

  return (
    <div className="App">
      <article className="slideline-box">
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
        <Serpent />
      </article>
    </div>
  );
};

export default App;
