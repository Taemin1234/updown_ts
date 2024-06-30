// 컴포넌트의 props에 대한 타입 정의
interface ResultShowProps {
  resultRecord: Array<[string, number]>;
}

function ResultShow({ resultRecord }: ResultShowProps) {
  return (
    <>
      <ul className="result_log_wrap">
        {resultRecord.map((rec, index) => (
          <li className="result_log" key={index}>
            <p className="name">{rec[0]}</p>
            <p className="try_num">{rec[1]}회 시도</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResultShow;
