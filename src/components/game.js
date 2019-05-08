import React, { Component } from 'react';
import '../scss/game.scss';
import { HashLink as Link } from 'react-router-hash-link';
import Slides from './gameslideshow';
import slide1img1 from '../img/slide1img1.jpg'
import slide1img2 from '../img/slide1img2.jpg'
import slide1img3 from '../img/slide1img3.jpg'
import slide1img4 from '../img/slide1img4.jpg'
import slide1img5 from '../img/slide1img5.jpg'
import slide2img1 from '../img/slide2img1.jpg'
import slide2img2 from '../img/slide2img2.jpg'
import slide2img3 from '../img/slide2img3.jpg'
import slide2img4 from '../img/slide2img4.jpg'
import slide2img5 from '../img/slide2img5.jpg'
import slide3img1 from '../img/slide3img1.jpg'
import slide3img2 from '../img/slide3img2.jpg'
import slide3img3 from '../img/slide3img3.jpg'
import slide3img4 from '../img/slide3img4.jpg'
import slide3img5 from '../img/slide3img5.jpg'
import slide4img1 from '../img/slide4img1.jpg'
import slide4img2 from '../img/slide4img2.jpg'
import slide4img3 from '../img/slide4img3.jpg'
import slide4img4 from '../img/slide4img4.jpg'
import slide4img5 from '../img/slide4img5.jpg'


class Game extends Component {
    constructor() {
        super()
        this.firstSlide = [slide1img1, slide1img2, slide1img3, slide1img4, slide1img5]
        this.secondSlide = [slide2img1, slide2img2, slide2img3, slide2img4, slide2img5]
        this.thirdSlide = [slide3img1, slide3img2, slide3img3, slide3img4, slide3img5]
        this.fourthSlide = [slide4img1, slide4img2, slide4img3, slide4img4, slide4img5]
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="maindivmarg">
                        <Link to={"#art1"}> <div className="maindivs art1 vis"><p className="maintp">GAME MODES</p></div></Link>
                        <Link to={"#art2"}><div className="maindivs art2 vis"><p className="maintp">TAVER BRAWL</p></div></Link>
                        <Link to={"#art3"}><div className="maindivs art3 vis"><p className="maintp">CLASS</p></div></Link>
                        <Link to={"#art4"}><div className="maindivs art4 vis"><p className="maintp">CARD SETS</p></div></Link>
                    </div>
                </main>
                <article className="art1" id="art1">
                    <div className="maindivmarg">
                        <div className="tekst">
                            <h1>GAME MODES</h1>
                            <p>Game modes are the ways in which players can do battle in Hearthstone.
                                Game modes affect several secondary play factors such as matchmaking,
                                rewards, and deck selection. Each game mode follows the basic rules of play.
                                Single player modes are modes like tutorial, adventure mode and missions. Multiplayer modes are
                                play mode, arena, tavern brawl and friendly challenge.</p>
                        </div>
                        <div className="slideshow"><Slides slide="slide1" images={this.firstSlide}></Slides></div>
                    </div>
                </article>
                <article className="art2" id="art2">
                    <div className="maindivmarg">
                        <div className="slideshow"><Slides slide="slide2" images={this.secondSlide}></Slides></div>
                        <div className="tekst">
                            <h1>TAVERN BRAWL</h1>
                            <p>Tavern Brawl is one of Hearthstone's lighter game modes. A weekly event, a new Tavern Brawl begins
                                each Wednesday ending the following Monday.Each Tavern Brawl presents a limited time opportunity
                                to face other players in special matches with unique rules. These might be requiring players to
                                use special pre-made decks or changing the rules.</p>
                        </div>
                    </div>
                </article>
                <article className="art3" id="art3">
                    <div className="maindivmarg">
                        <div className="tekst">
                            <h1>CLASS</h1>
                            <p>Class is the primary determinant of a hero's powers and abilities.
                                While each hero represents a unique character with their own personality, portrait and sounds, their class determines
                                their Hero Power and which class-specific cards they are able to play. While each hero belongs to only one class,
                                there are often multiple heroes representing each class. </p>
                        </div>
                        <div className="slideshow"><Slides slide="slide3" images={this.thirdSlide}></Slides></div>
                    </div>
                </article>
                <article className="art4" id="art4">
                    <div className="maindivmarg">
                        <div className="slideshow"><Slides slide="slide4" images={this.fourthSlide}></Slides></div>
                        <div className="tekst">
                            <h1>CARD SETS</h1>
                            <p>Card sets are categories into which collectible cards are divided, reflecting how they can be obtained,
                                and determining whether they are eligible for use in Standard format.
                                Card set does not otherwise affect gameplay in any way. For cards from expansions and adventures, the name of the card set matches the
                                name of the content with which the card was released.</p>
                        </div>
                    </div>
                </article>
            </React.Fragment>
        );
    }
}

export default Game;