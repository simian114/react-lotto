import PurchseForm from './components/purchaseForm/PurchseForm';
import Lottos from './components/lottos/Lottos';
import WinningNumberForm from './components/winningNumberForm/WinningNumberForm';
import { AppFlexWrapper, AppWidthWrapper, AppWrapper } from './App.styles';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import { generateLottos } from './services/tickets';

function App() {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitPrice = (price) => {
    setTickets(generateLottos(price))
  }

  const handleSubmitWinningNumber = (winNums) => {
    console.log(winNums);
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
      {/* NOTE: state로 open 관리 */}
      <Modal open={isModalOpen} />
    </AppWrapper>
  );
}

export default App;
