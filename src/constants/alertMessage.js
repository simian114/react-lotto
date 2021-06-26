import { TICKET } from './ticket';

const ALERT_MESSAGE = {
  SHOULD_MORE_MINIMUN_PRICE: `구입 금액은 최소 ${TICKET.PRICE} 입니다.`,
  SHOULD_BE_1000_UNITS: `구입 금액은 ${TICKET.PRICE} 단위여야 합니다.`
}

export {
  ALERT_MESSAGE,
}