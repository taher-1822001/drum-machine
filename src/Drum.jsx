// Drum.js
import React from 'react';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
const Drum = ({ keyTrigger, url, description }) => {
  const playSound = () => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="row">
        <div className="col-lg-4">
        <div className="drum-pad" onClick={playSound}>
      {keyTrigger}
      <audio src={url} className="clip" id={keyTrigger} />
    </div>
        </div>
    </div>
  );
};

export default Drum;
