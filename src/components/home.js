import React, { Component } from 'react';
import '../scss/home.scss';
import Video from '../video/Hearthstone.mp4';
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <main>
                    <div>
                        <video autoPlay muted loop>
                            <source src={Video} type="video/mp4"></source> </video>
                    </div>
                </main>
                <article id="art">
                    <Link to="/classes/warrior">
                        <div id="cotm" className="kvad art2sl">
                            <p className="art1p">Class Of The Month</p>
                        </div>
                    </Link>
                    <Link>
                        <div id="set" className="kvad art2sl">
                            <p className="art1p">Latest Set</p>
                        </div>
                    </Link>
                    <a href={`https://www.youtube.com/watch?time_continue=7&amp;v=uWm19iNg6LI`} target="_blank">
                        <div id="ros" className="kvad art2sl">
                            <p className="art1p">Rise Of Shadows</p>
                        </div>
                    </a>
                </article>
            </React.Fragment>
        )
    }
}

export default Home;