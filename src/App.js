import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Sceleton from "./loaders/Sceleton";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Симулируем задержку для загрузки данных
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Убираем скелетон через 2 секунды (для примера)
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Sceleton />
      ) : (
        <>
          <Header />
          <Main />
          {/* <Footer /> */}
        </>
  )}
    </div>
  );
}

export default App;
