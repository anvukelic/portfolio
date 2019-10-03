import React, {Component} from 'react';
import './AboutMe.css';

class AboutMeComponent extends Component {
    render() {
        return (
            <div className="about-me-container">
                <img
                    src="https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/11140121_10205531995712470_6963220874781871844_n.jpg?_nc_cat=101&_nc_oc=AQmGjIRx7gANlCvc1kAEggu5hSc6z_SggnQIpMcY30l2yJRvucJDvvxOhIE0q2Nvjwc&_nc_ht=scontent.fzag4-1.fna&oh=c1bcc699e45c5c3cde27da5eba7f6885&oe=5DEF0040"
                    className="about-me-avatar"/>

            </div>
        )
    }
}

export default AboutMeComponent