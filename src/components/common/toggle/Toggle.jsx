import styled from 'styled-components';

const ToggleWrapper = styled.label`
  z-index: 0;
  position: relative;
`;

const ToggleText = styled.span`
  display: inline-block;
  width: 100%;
  cursor: pointer;

  &:: before {
    content: '';
    float: right;
    display: inline-block;
    margin: 5px 0 5px 10px;
    border-radius: 7px;
    width: 36px;
    height: 14px;
    background-color: rgba(0, 0, 0, 0.38);
    vertical-align: top;
    transition: background-color 0.2s, opacity 0.2s;
  }

  &:: after {
    content: '';
    position: absolute;
    top: 2px;
    right: 16px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: white;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    transition: background-color 0.2s, transform 0.2s;
  }
`;

const ToggleCheckBox = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  z-index: -1;
  position: absolute;
  right: 6px;
  top: -8px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  outline: none;
  opacity: 0;
  transform: scale(1);
  pointer-events: none;
  transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;

  &: checked {
    right: -10px;
    background-color: rgb(0, 188, 212);
  }

  &: checked + ${ToggleText}::before {
    background-color: rgba(0, 188, 212, 0.6);
  }

  &: checked + span::after {
    background-color: rgb(0, 188, 212);
    transform: translateX(16px);
  }

  &: hover {
    opacity: 0.04;
  }

  ${ToggleWrapper}:hover & {
    opacity: 0.04;
  }

  &: focus {
    opacity: 0.12;
  }

  ${ToggleWrapper}:hover &:focus {
    opacity: 0.16;
  }

  &: active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  &: active + ${ToggleText}::before {
    background-color: rgba(0, 188, 212, 0.6);
  }

  &: checked:active + ${ToggleText}::before {
    background-color: rgba(0, 0, 0, 0.38);
  }

  &: disabled {
    opacity: 0;
  }

  &: disabled & ${ToggleText} {
    color: black;
    opacity: 0.38;
    cursor: default;
  }

  &: disabled: ${ToggleText}::before {
    background-color: rgba(0, 0, 0, 0.38);
  }
  
  &: checked:disabled + ${ToggleText}::before {
    background-color: rgba(0, 188, 212, 0.6);
  }
`;

const Toggle = ({ handleToggle }) => {
  return (
    <ToggleWrapper>
      <ToggleCheckBox type='checkbox' onChange={({ target }) => handleToggle(target.checked)} />
      <ToggleText>번호보기</ToggleText>
    </ToggleWrapper>
  );
};

export default Toggle;
