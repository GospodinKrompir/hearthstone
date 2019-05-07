import React, { Component } from 'react';
import '../scss/class.scss';
import CardsFilter from './cardsfilter'

class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        this.url = this.props.match.params.class.charAt(0).toUpperCase() + this.props.match.params.class.slice(1);
    }

    filterCards =(cards)=>{
        this.setState({cards:cards})
        console.log(cards)
    }
    
    render() {
        let view = this.state.cards.map(element => element.type !== "Hero" && <img key={element.name} src={element.img} alt={element.name} onError={e => e.target.style.display = 'none'}></img>)
        return (
            <React.Fragment>
            <CardsFilter getUrl={this.url} getCards={this.filterCards}/>
            <main>   
                {view}
            </main>
            </React.Fragment>
        )
    }
}

export default Class;