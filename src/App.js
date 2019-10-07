import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./components/header/HeaderComponent";
import SideContent from "./components/sideBar/SideContent";
import {Fade} from "react-reveal";
import video from '../public/Videos/video.mp4'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "react-bootstrap/Nav";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({isSideBarOpen: open});
    }

    render() {
        return (
            <div className="App">
                <div className="first-page">
                    <video ref="vidRef" src={video} id="background-video" type="video/mp4" loop autoPlay/>
                    <HeaderComponent/>
                </div>
                <div className="second-page">
                    <Fade>
                        <SideContent/>
                    </Fade>
                    <img src={require("./oglasnik.PNG")}/>
                </div>
            </div>
        );
    }
}

export default App;
