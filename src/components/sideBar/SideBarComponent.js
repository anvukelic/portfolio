import React, {Component} from 'react';
import './SideBar.css';
import AboutMeComponent from "../aboutMe/AboutMeComponent";

class SideBarComponent extends Component {
    render() {
        return (
            <div className="side-bar-container">
                <AboutMeComponent/>
            </div>
        )
    }
}

export default SideBarComponent