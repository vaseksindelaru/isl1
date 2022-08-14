import React from "react";
import { Provider } from 'react-redux';
import store from "./store";
import Jugadores from "./components/jugadores";

function App() {
  return (
    <Provider store={store}>
      <div >
      <h1>Edmanager</h1>
     <Jugadores />
     
    </div>
    </Provider>
  );
}

export default App;
