import { Provider } from 'react-redux';
import store from './Redux/store';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <IceCreamContainer/>
    </div>
    </Provider>
      
  );
}

export default App;
