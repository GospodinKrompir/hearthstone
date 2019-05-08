import axios from 'axios';

const serverUrl = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards`
const headers = {
  'Content-Type': 'application/json',
  "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  "X-RapidAPI-Key": "f62ffa1bc8msh976f8f29ec748cfp1fe02fjsn4468196bf9dc",
};
let getCards = async () => {
    const responseCards = await axios.get(`${serverUrl}`, {headers});
    const cards = await responseCards.data;
    return cards;
  }
  let getCard = async (name) => {
    const responseCard = await axios.get(`${serverUrl}/${name}`, {headers});
    const card = await responseCard.data;
    return card;
  }
  let getCardsByClass = async (name) => {
    const responseCard = await axios.get(`${serverUrl}/classes/${name}?collectible=1`, {headers});
    const card = await responseCard.data;
    return card;
  }
  let getCardsBySet = async (name) => {
    const responseCard = await axios.get(`${serverUrl}/sets/${name}?collectible=1`, {headers});
    const card = await responseCard.data;
    return card;
  }
export {getCards, getCard, getCardsByClass, getCardsBySet }

