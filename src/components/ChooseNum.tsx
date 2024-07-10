import { ChangeEvent } from "react";
import styled from 'styled-components'

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p.title {
    font-size:50px;
    font-weight:700;
    text-align: center;
  }
  p.sub {
    margin-top: 10px;
  }
`

const InputWrap = styled.div`
  margin-top: 30px;
  height: 30px;

  input {
    height: 100%;
    width: 100px;
    padding: 2px 5px;
    box-sizing: border-box;
    vertical-align: top;
  }

  button {
    display: inline-block;
    height: 100%;
    background-color: #36454F;
    color: #FFFFE0;
    padding: 5px 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-sizing: border-box;
  }

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
      <p className='title'>숫자 UP & DOWN</p>
      <p className='sub'>(0 부터 100까지)</p>
      <InputWrap>
        <input
          type="number"
          id="inputValue"
          onChange={inputValue}
          min="1"
          max="100"
          placeholder="숫자를 입력해주세요"
          ref={inputRef}
        />
        <button id="submitBtn" onClick={findNumber}>
          입력
        </button>
      </InputWrap>
    </InputBox>
  );
}

export default ChooseNum;
