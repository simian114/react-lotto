import { ALERT_MESSAGE } from "../constants/alertMessage";

const isValidPrice = (price) => {
  let message = '';
  if (!price) {
    return ALERT_MESSAGE.SHOULD_MORE_MINIMUN_PRICE;
  } else if (price % 1000) {
    return  ALERT_MESSAGE.SHOULD_BE_1000_UNITS;
  }
  return;
}

export {
  isValidPrice,
}