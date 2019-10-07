import React, {Component, useRef} from 'react';
import './Header.css';
import {Fade} from "react-reveal";
import Nav from "react-bootstrap/Nav";
import {FaLinkedinIn, FaFacebookF, FaGithub} from "react-icons/fa";

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="nav-top">
                    <Nav activeKey={"/home"}>
                        <Nav.Item>
                            <Nav.Item><a href="https://www.facebook.com/an.vuk" className="nav-top-item"><FaFacebookF
                                className="nav-top-item-icon"/></a></Nav.Item>
                        </Nav.Item>
                        <Nav.Item><a href="https://www.linkedin.com/in/anvukelic/"
                                     className="nav-top-item"><FaLinkedinIn
                            className="nav-top-item-icon"/></a></Nav.Item>
                        <Nav.Item><a href="https://www.github.com/avukelic/" className="nav-top-item"><FaGithub
                            className="nav-top-item-icon"/></a></Nav.Item>
                    </Nav>
                </div>
                <div className="header-title-container">
                    <Fade>
                        <div className="header-title">
                            <div>
                                <span className="code-key-word">class </span>
                                <span className="code-regular">AndrejVukelic &#123;</span>
                            </div>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="code-key-word">fun </span>
                                <span className="code-function-name">main</span>
                                <span className="code-regular">(args : Array&#60;String&#62;)&#123;</span>
                            </div>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="code-regular-italic">println</span>
                                <span className="code-regular">("Welcome to Andrej's portfolio")</span></div>
                            <div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="code-regular">&#125;</span>
                            </div>
                            <div>
                                <span className="code-regular">&#125;</span>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}

export default HeaderComponent