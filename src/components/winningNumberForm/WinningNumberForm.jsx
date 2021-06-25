import React from 'react';
import Input from '../common/input/Input';

const WinningNumberForm = () => {
  return (
    <div>
      <form className="mt-9">
            <label className="flex-auto d-inline-block mb-3"
              >지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</label
            >
            <div className="d-flex">
              <div>
                <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
                <div>
                  <Input type='number' />
                  <Input type='number' />
                  <Input type='number' />
                  <Input type='number' />
                  <Input type='number' />
                  <Input type='number' />
                </div>
              </div>
              <div className="bonus-number-container flex-grow">
                <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
                <div className="d-flex justify-center">
                  <Input type='number' className="bonus-number" />
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
  );
}

export default WinningNumberForm;
