import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./components/header/HeaderComponent";
import SideBarComponent from "./components/sideBar/SideBarComponent";
import {Fade, Slide} from "react-reveal";
import video from '../public/Videos/video.mp4'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="first-page">
                    <video ref="vidRef" src={video} id="background-video" type="video/mp4" loop autoPlay/>
                    <HeaderComponent/>
                </div>

                    <div className="second-page">
                        <Fade>
                        <SideBarComponent/>
                        </Fade>
                    </div>
            </div>
            /*<div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>*/
        );
    }
}

export default App;
