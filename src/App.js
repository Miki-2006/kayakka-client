import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CategoriesOfEvents from './pages/Main/Categories/CategoriesOfEvents';

function App() {
  return (
    <div className="App">
      <Header/>
      <CategoriesOfEvents/>
      <Footer/>
    </div>
  );
}

export default App;
