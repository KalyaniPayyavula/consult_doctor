import React from "react";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer, {});

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
