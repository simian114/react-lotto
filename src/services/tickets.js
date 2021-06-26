import { TICKET } from "../constants/ticket";
import { getRandomNumber } from "../utils/random";

const generateLotto = () => {
  const ticketNumbers = new Set();
  while (ticketNumbers.size < TICKET.LENGTH) {
    ticketNumbers.add(getRandomNumber(TICKET.MIN, TICKET.MAX));
  }
  return [...ticketNumbers];
}

const generateLottos = (price) => [...Array(price / TICKET.PRICE).keys()].map(() => generateLotto())

export {
  generateLottos,
}