import { ChangeEvent } from "react";
import styled from 'styled-components'

const InputBox = styled.div`

`

// 컴포넌트의 props에 대한 타입 정의
interface ChooseNumProps {
  inputValue: (e: ChangeEvent<HTMLInputElement>) => void;
  findNumber: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

function ChooseNum({ inputValue, findNumber, inputRef }: ChooseNumProps) {
  return (
    <InputBox>
      <p>입력</p>
      <input
        type="number"
        id="inputValue"
        onChange={inputValue}
        min="1"
        max="100"
        placeholder="input number"
        ref={inputRef}
      />
      <button id="submitBtn" onClick={findNumber}>
        제출
      </button>
    </InputBox>
  );
}

export default ChooseNum;
