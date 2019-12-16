import React, { memo } from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import TodoList from "./components/Todos";

const App = memo(() => (
  <Provider store={store}>
    <TodoList />
  </Provider>
));

export default App;
