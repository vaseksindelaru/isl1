import React from "react";
import { Provider } from 'react-redux';
import stote from "./stote";

function App() {
  return (
    <Provider store={store}>
      <div >
      <h1>Edmanager</h1>
     <Jugadores />
     <EquipoSelecto/>
    </div>
    </Provider>
  );
}

export default App;
