const temp = {
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  bonus: 0,
}

const prizes = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  bonus: 30000000,
}

const getTotalPrize = (res) => {
  let total = 0;
  Object.entries(res).map(([key, value]) => {
    if (prizes[key]) {
      total += value * prizes[key];
    }
  })
  return total;
}

const lotteryDraw = (tickets, winningNumber) => {
  const res = {...temp};
  const winningWithoutBonus = winningNumber.slice(0, 6);
  const bonus = winningNumber[6];
  tickets.map((ticket) => {
    let count = 0;
    winningWithoutBonus.map((num) => {
      ticket.includes(num) && count++;
    })
    if (count < 3) return;
    if (count === 5 && ticket.includes(bonus)) {
      res.bonus++;
    } else {
      res[count]++;
    }
  })
  const yields = (getTotalPrize(res) / tickets.length * 1000) * 100;
  return {
    winners: res,
    yields,
  };
}

export {
  lotteryDraw,
}