import { ALERT_MESSAGE } from "../constants/alertMessage";

const isValidPrice = (price) => {
  if (!price) {
    return ALERT_MESSAGE.SHOULD_MORE_MINIMUN_PRICE;
  } else if (price % 1000) {
    return  ALERT_MESSAGE.SHOULD_BE_1000_UNITS;
  }
  return;
}

const isValidWinningNumber = (nums) => {
  const set = new Set([...nums]);
  if (set.size !== 7) {
    return ALERT_MESSAGE.NUMBERS_SHOULD_NOT_OVERLAP;
  }
  return;
}

export {
  isValidPrice,
  isValidWinningNumber
}