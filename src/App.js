import PurchseForm from './components/purchaseForm/PurchseForm';
import Lottos from './components/lottos/Lottos';
import WinningNumberForm from './components/winningNumberForm/WinningNumberForm';
import { AppFlexWrapper, AppWidthWrapper, AppWrapper } from './App.styles';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import { generateLottos } from './services/tickets';
import { lotteryDraw } from './services/result';

function App() {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winners, setWinners] = useState([]);
  const [yields, setYields] = useState(null);

  const handleSubmitPrice = (price) => {
    setTickets(generateLottos(price))
  }

  const handleSubmitWinningNumber = (winNums) => {
    const { winners, yields } = lotteryDraw(tickets, winNums);
    setWinners(winners);
    setYields(yields);
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const handleAppRetry = () => {
    setTickets([]);
    setIsModalOpen(false);
  }

  return (
    <AppWrapper id='app'>
      <AppFlexWrapper>
        <AppWidthWrapper>
          <h1 className='title'>🎱 행운의 로또</h1>
          <PurchseForm handleSubmitPrice={handleSubmitPrice} />
          { tickets.length !== 0 &&
            <Lottos tickets={tickets} /> }
          { tickets.length !== 0 &&
            <WinningNumberForm
              handleSubmit={handleSubmitWinningNumber}
            /> }
        </AppWidthWrapper>
      </AppFlexWrapper>
      <Modal
        open={isModalOpen}
        handleClose={handleModalClose}
        handleRetry={handleAppRetry}
        winners={winners}
        yields={yields}
      />
    </AppWrapper>
  );
}

export default App;
