import './App.css';
import PurchseForm from './components/purchaseForm/PurchseForm';

function App() {
  return (
    <div id="app" className="p-3">
      <div className="d-flex justify-center mt-5">
        <div className="w-100">
          <h1 className="text-center">🎱 행운의 로또</h1>
          <PurchseForm />
          <section className="mt-9">
            <div className="d-flex">
              <label className="flex-auto my-0">총 5개를 구매하였습니다.</label>
              <div className="flex-auto d-flex justify-end pr-1">
                <label className="switch">
                  <input type="checkbox" className="lotto-numbers-toggle-button" />
                  <span className="text-base font-normal">번호보기</span>
                </label>
              </div>
            </div>
            <div className="d-flex flex-wrap">
              <span className="mx-1 text-4xl">🎟️ </span>
              <span className="mx-1 text-4xl">🎟️ </span>
              <span className="mx-1 text-4xl">🎟️ </span>
              <span className="mx-1 text-4xl">🎟️ </span>
              <span className="mx-1 text-4xl">🎟️ </span>
            </div>
          </section>
          <form className="mt-9">
            <label className="flex-auto d-inline-block mb-3"
              >지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label
            >
            <div className="d-flex">
              <div>
                <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
                <div>
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                  />
                  <input
                    type="number"
                    className="winning-number mx-1 text-center"
                  />
                </div>
              </div>
              <div className="bonus-number-container flex-grow">
                <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
                <div className="d-flex justify-center">
                  <input type="number" className="bonus-number text-center" />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="open-result-modal-button mt-5 btn btn-cyan w-100"
            >
              결과 확인하기
            </button>
          </form>
        </div>
      </div>
      <div className="modal">
        <div className="modal-inner p-10">
          <div className="modal-close">
            <svg viewBox="0 0 40 40">
              <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>

          <h2 className="text-center">🏆 당첨 통계 🏆</h2>
          <div className="d-flex justify-center">
            <table className="result-table border-collapse border border-black">
              <thead>
                <tr className="text-center">
                  <th className="p-3">일치 갯수</th>
                  <th className="p-3">당첨금</th>
                  <th className="p-3">당첨 갯수</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-3">3개</td>
                  <td className="p-3">5,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">4개</td>
                  <td className="p-3">50,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개</td>
                  <td className="p-3">1,500,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">5개 + 보너스볼</td>
                  <td className="p-3">30,000,000</td>
                  <td className="p-3">n개</td>
                </tr>
                <tr className="text-center">
                  <td className="p-3">6개</td>
                  <td className="p-3">2,000,000,000</td>
                  <td className="p-3">n개</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center font-bold">당신의 총 수익률은 %입니다.</p>
          <div className="d-flex justify-center mt-5">
            <button type="button" className="btn btn-cyan">다시 시작하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
