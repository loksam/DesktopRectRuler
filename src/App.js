import React , { useState, useEffect } from 'react';
import './App.css';
import EventListener from 'react-event-listener';

function App() {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    document.getElementById('width').innerHTML = width;
    document.getElementById('height').innerHTML = height;
  });

  return (
    <div className="App" >
    <EventListener target="window" onResize={() => { setWidth(window.innerWidth); setHeight(window.innerHeight)}} />
     <div id="width">0</div>
     &nbsp;<div id="x">x</div>&nbsp;
     <div id="height">0</div>
    </div>
  );
}

export default App;
