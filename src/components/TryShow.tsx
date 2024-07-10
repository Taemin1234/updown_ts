import styled from 'styled-components'

const TryWrap = styled.div`
  margin-top: 20px;

  .try-title {
    font-size: 28px;
  }
`
const TrylogWrap = styled.ul`
  margin-top: 10px;
  
  li {
    position: relative;
    font-size: 22px;
    padding-left:20px;
    margin-top: 15px;
    line-height: 1.3;

    p.idx {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

`

// 컴포넌트의 props에 대한 타입 정의
interface TryShowProps {
  tryCount: number;
  inputHistory: Array<[number, string]>;
}

function TryShow({ tryCount, inputHistory }: TryShowProps) {
  return (
    <TryWrap>
      <p className='try-title'>
        시도횟수 <span className="try_count">{tryCount}</span>회
      </p>
      <TrylogWrap className="try_log_wrap">
        {inputHistory.map((his, index) => (
          <li className="try_log" key={index}>
            <p className='idx'>{index + 1}.</p>
            <p className="num">입력 숫자 : {his[0]}</p>
            <p className="result">결과 : {his[1]}</p>
          </li>
        ))}
      </TrylogWrap>
    </TryWrap>
  );
}

export default TryShow;
