import React , { useState, useEffect } from 'react';
import './App.css';
import EventListener from 'react-event-listener';

function App() {
  let initWidth = 800;
  let initHeight = 600;
  let initRatio = aspectRatio(initWidth,initHeight);

  const [width, setWidth] = useState(initWidth);
  const [height, setHeight] = useState(initHeight);
  const [ratio, setRatio] = useState(initRatio);

  useEffect(() => {
    document.getElementById('width').innerHTML = width;
    document.getElementById('height').innerHTML = height;
    document.getElementById('ratio').innerHTML = ratio[0] + ':' + ratio[1];
  });

  return (
    <div className="App" >
    <EventListener target="window" onResize={() => { 
      setWidth(window.innerWidth); 
      setHeight(window.innerHeight); 
      setRatio(aspectRatio(window.innerWidth, window.innerHeight))
    }} />
     <div id="width">0</div>
     &nbsp;<div id="x">x</div>&nbsp;
     <div id="height">0</div>
     <div id="ratio">0:0</div>
    </div>
  );
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function aspectRatio(w, h, ratio) {
  const g = gcd(w,h)
  const ratio_w = w / g
  const ratio_h = h / g
  return [ratio_w, ratio_h];
}

export default App;
