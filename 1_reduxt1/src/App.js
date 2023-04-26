import { Navbar } from "./components/Navbar";
import { Userlist } from "./components/Userlist";
//redux
import {Provider} from 'react-redux'
import store from "./store";
import Prueba from "./Prueba";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Userlist />
      <Prueba/>
    </Provider>
  );
}

export default App;
