import React, { Component } from 'react';
import '../scss/classes.scss';
import { NavLink } from 'react-router-dom'

class CardSets extends Component {
    constructor() {
        super();
        this.sets = ["Goblins vs Gnomes", "The Grand Tournament", "Whispers of the Old Gods", "Mean Streets of Gadgetzan", "Journey to Un'Goro", "Knights of the Frozen Throne", "Kobolds & Catacombs", "The Witchwood", "The Boomsday Project"];
        this.img = ["GvG", "TGT", "WotOG", "MSoG", "JtU", "KotFT", "KiC", "TW", "TBP"]
        this.counter=0;
    }

    render() {
        let style = { textDecoration: 'none', color: 'white' }
        let view = this.sets.map(element => { let url = element; let img=this.img[this.counter]; this.counter++; return <div key={element} className="itemBox"><NavLink to={{ pathname: "/sets/" + url }} style={style}><div className={img}></div> <div className="classNameplate">{element}</div></NavLink></div> }) 
        return (
            <main>
                {view}
            </main>
        )
    }
}

export default CardSets;