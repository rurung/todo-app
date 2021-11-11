import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList>
          <TodoItem text="프로젝트 생성하기" done={true} />
          <TodoItem text="컴포넌트 스타일링 하기" done={false} />
          <TodoItem text="Context 만들기" done={false} />
          <TodoItem text="기능 구현하기" done={false} />
        </TodoList>

        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

export default App;
