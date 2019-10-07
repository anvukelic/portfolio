import React, {Component} from 'react';
import './SideContent.css';
import AboutMeComponent from "../aboutMe/AboutMeComponent";

class SideContent extends Component {
    render() {
        return (
            <div className="side-bar-container">
                <AboutMeComponent/>
            </div>
        )
    }
}

export default SideContent