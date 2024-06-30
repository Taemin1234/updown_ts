// 컴포넌트의 props에 대한 타입 정의
interface TryShowProps {
  tryCount: number;
  inputHistory: Array<[number, string]>;
}

function TryShow({ tryCount, inputHistory }: TryShowProps) {
  return (
    <>
      <p>
        시도횟수 <span className="try_count">{tryCount}</span>회
      </p>
      <ul className="try_log_wrap">
        {inputHistory.map((his, index) => (
          <li className="try_log" key={index}>
            <p>{index + 1}.</p>
            <p className="num">{his[0]}</p>
            <p className="result">{his[1]}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TryShow;
