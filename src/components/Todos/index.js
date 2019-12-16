import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Input, Button, Card } from "./styles";
import { addTodo } from "../../redux/actions/todos";

const Todos = memo(() => {
  const [text, setText] = useState("");
  const todos = useSelector(({ todos }) => todos.data);
  const dispacth = useDispatch();

  const handleTex = text => setText(text);

  const addTodos = () => {
    dispacth(addTodo(text));
    setText("");
  };

  return (
    <>
      <Container>
        <Input
          onChange={({ target: { value } }) => handleTex(value)}
          value={text}
        />
        <Button onClick={addTodos}>Processar</Button>
      </Container>
      <Card>
        {todos && todos.map(todo => <p key={todo.id}>{todo.text}</p>)}
      </Card>
    </>
  );
});

export default Todos;
