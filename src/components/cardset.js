import React, { Component } from 'react';
import '../scss/class.scss';
import CardsFilter from './cardsfilter'

class CardSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],         
        }
        this.url = this.props.match.params.set
        this.img = this.url.replace(" ", "_")
        let RegEx = () =>{
            for(let i=0;i<3;i++){
                this.img = this.img.replace(" ", "_")
            }
            this.img = this.img.replace("'", "_")
        }
        RegEx()
        this.bg = require(`../img/${this.img}.jpg`)  
    }
   
    filterCards = (cards) => {
        this.setState({ cards: cards })
    }


    render() {
        
        let view = this.state.cards.map(element => element.type !== "Hero" && <img key={element.name} src={element.img} alt={element.name} onError={e => e.target.style.display = 'none'}></img>)
        return (
            <React.Fragment>
                <CardsFilter cardSet="cardSet" getImg={this.img} getUrl={this.url} getCards={this.filterCards} />
                <main style={{ backgroundImage: "url("+this.bg+")"}}>
                    {view}
                </main>
            </React.Fragment>
        )
    }
}

export default CardSet;

