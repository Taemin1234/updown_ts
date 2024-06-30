import { useState, useEffect, useRef, ChangeEvent } from "react";

import "./App.css";

import ChooseNum from "./components/ChooseNum";
import TryShow from "./components/TryShow";
import ResultShow from "./components/ResultShow";

function App() {
  const [inputVal, setInputVal] = useState<number | undefined>(undefined);
  const [inputHistory, setInputHistory] = useState<Array<[number, string]>>([]);
  const [rand, setRand] = useState<number>(0);
  const [tryCount, setTryCount] = useState<number>(0);
  const [resultRecord, setResultRecord] = useState<Array<[string, number]>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    generateRandomNum();
  }, []);

  const generateRandomNum = () => {
    const randomNum: number = Math.floor(Math.random() * 100) + 1;
    setRand(randomNum);
    console.log(`난수 ${randomNum}`);
  };

  const inputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputVal(Number(e.target.value));
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const compareNum = () => {
    if (inputVal !== undefined) {
      if (inputVal < rand) {
        alert("Up");
        setInputHistory((prevHistory) => [...prevHistory, [inputVal, "Up"]]);
        setTryCount((n) => n + 1);
      } else if (inputVal > rand) {
        alert("Down");
        setInputHistory((prevHistory) => [...prevHistory, [inputVal, "Down"]]);
        setTryCount((n) => n + 1);
      } else {
        alert("정답입니다!");
        let result = prompt("닉네임을 입력해주세요");
        //prompt가 null 될 수 있으니 null이 아닐 경우에만 추가하도록 설정
        if (result !== null && result.trim() !== "") {
          setResultRecord((prevRecord) => [...prevRecord, [result, tryCount]]);
        }
        setInputHistory([]);
        setTryCount(0);
        generateRandomNum();
      }
    }
  };

  const findNumber = () => {
    if (inputVal === undefined || isNaN(inputVal)) {
      alert("숫자을 입력해주세요");
    } else if (inputVal < 1 || inputVal > 100) {
      alert("1에서 100사이의 숫자만 입력해주세요");
    } else {
      compareNum();
    }
    clearInput();
    setInputVal(undefined);
  };

  return (
    <div className="App">
      <ChooseNum
        inputValue={inputValue}
        findNumber={findNumber}
        inputRef={inputRef}
      />
      <TryShow tryCount={tryCount} inputHistory={inputHistory} />
      <ResultShow resultRecord={resultRecord} />
    </div>
  );
}

export default App;
