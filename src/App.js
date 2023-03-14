import './App.css';
import './assets/style/__app.scss'
import  Header from  "./assets/Components/Header";
import Routers from './assets/Routers/Routers';
import Footer from './assets/Components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='site-wrapper position-relative'>
        <Routers />
        <Footer />
      </div>
    </div>
  );
}

export default App;
