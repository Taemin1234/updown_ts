import styled from 'styled-components'

const ReslogWrap = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 30px;
  background-color: #36454F;
  color: #FFFFE0;
  width: 100%;

  li {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 22px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #ffffe0;

    .try_num {
      position: relative;
      padding-left:20px;

      &:before {
        position: absolute;
        content: '';
        width: 2px;
        height: 24px;
        left: 10px;
        top: 0;
        background-color: #FFFFE0;
      }
    }
  }
`

// 컴포넌트의 props에 대한 타입 정의
interface ResultShowProps {
  resultRecord: Array<[string, number]>;
}

function ResultShow({ resultRecord }: ResultShowProps) {
  return (
      <ReslogWrap className="result_log_wrap">
        {resultRecord.map((rec, index) => (
          <li className="result_log" key={index}>
            <p className="name">{rec[0]} </p>
            <p className="try_num">{rec[1]}회 시도</p>
          </li>
        ))}
      </ReslogWrap>
  );
}

export default ResultShow;
