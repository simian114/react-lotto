import './App.css';
import PurchseForm from './components/purchaseForm/PurchseForm';
import Lottos from './components/lottos/Lottos';
import WinningNumberForm from './components/winningNumberForm/WinningNumberForm';
import { AppFlexWrapper, AppWidthWrapper, AppWrapper } from './App.styles';
import Modal from './components/modal/Modal';

function App() {
  return (
    <AppWrapper id="app">
      <AppFlexWrapper>
        <AppWidthWrapper>
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PurchseForm />
          <Lottos />
          <WinningNumberForm />
        </AppWidthWrapper>
      </AppFlexWrapper>
      <Modal />
    </AppWrapper>
  );
}

export default App;
