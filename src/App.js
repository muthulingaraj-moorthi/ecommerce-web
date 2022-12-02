import './App.css';
import './assets/style/__app.scss'
import  Header from  "./assets/Components/Header";
import Routers from './assets/Routers/Routers';
function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
    </div>
  );
}

export default App;
