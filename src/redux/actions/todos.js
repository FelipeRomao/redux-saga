export const TODO_LIST = Object.freeze({
  ASYNC_ADD_TODO: "todo/add_todo"
});

export function addTodo(text) {
  return {
    type: TODO_LIST.ASYNC_ADD_TODO,
    text
  };
}
