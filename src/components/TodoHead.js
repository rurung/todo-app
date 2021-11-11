import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 40px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    font-size: 21px;
  }
  .tesk-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2021년 11월 10일</h1>
      <div className="day">수요일</div>
      <div className="tesk-left">할일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
