import React, {Component} from 'react';
import './Header.css';
import {Fade} from "react-reveal";

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-title-container">
                    <Fade>
                        <div className="header-title">
                            <div>
                                <span className="code-key-word">class </span>
                                <span className="code-regular">AndrejPortfolio &#123;</span>
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