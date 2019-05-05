import React, { Component } from 'react';
import '../scss/card.scss';
import { getCard } from './Api'


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { card: null }
    }
    
    componentDidMount() {
        (async () => {
            let card = await getCard(this.props.name);
            this.setState({ card: card });
        })();
    }

    render() {
        let view ='loading'
        let name= this.state.card
        if (name !== null) {
            if (name[1] !== undefined) {
                view= name[1]
            } else {
                view = name[0]
            }
        }

        return (<React.Fragment>  <div>{view.name}<img src={view.img} alt={view.name} style={{ width: "150px" }}></img></div></React.Fragment>)
    }
}


export default Card;