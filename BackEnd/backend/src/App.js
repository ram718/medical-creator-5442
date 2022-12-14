import logo from './logo.svg';
import './App.css';
import AllRoutes from "./components/AllRoutes";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Navbar/>
    </div>
  );
}

export default App;
