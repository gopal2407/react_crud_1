import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routerss from './AppRouters/Routerss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Routerss/>
    </BrowserRouter>
  );
}

export default App;
