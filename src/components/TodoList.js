import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList({ children }) {
  return <TodoListBlock>{children}</TodoListBlock>;
}
export default TodoList;
