import { TICKET } from './ticket';

const ALERT_MESSAGE = {
  SHOULD_MORE_MINIMUN_PRICE: `구입 금액은 최소 ${TICKET.PRICE} 입니다.`,
  SHOULD_BE_1000_UNITS: `구입 금액은 ${TICKET.PRICE} 단위여야 합니다.`,
  NUMBERS_SHOULD_NOT_OVERLAP: `로또 당첨 번호는 중복되면 안됩니다.`,
}

const INPUT_VALID_MESSAGE = {
  SHOULD_BE_IN_VALID_NUMS: '로또 번호는 1부터 45사이의 값이어야합니다.',
}

export {
  ALERT_MESSAGE,
  INPUT_VALID_MESSAGE,
}