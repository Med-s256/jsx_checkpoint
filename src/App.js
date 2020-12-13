import logo from './logo.svg';
import './App.css';
import './style.css';
import React from "react";
import myIm from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App" style={{border:"solid 1px black"}}>
        
            <h1 className='title red'>Your name here</h1>
            <img src={myIm} alt="myimage1" />
            <br>
            </br>
            <img src="/imageInPublic.jpg" alt="myimage" />
            <br>
            </br>
    
        <video width="320" height="240" controls >
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
