import axios from 'axios';

const serverUrl = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards`
let getCards = async () => {
    const headers = {
      'Content-Type': 'application/json',
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "f62ffa1bc8msh976f8f29ec748cfp1fe02fjsn4468196bf9dc",
    };

    const responseCards = await axios.get(serverUrl, {headers});
    const cards = await responseCards.data;
    return cards;
  }

export {getCards}

