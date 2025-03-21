import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { ScaleLoader } from "react-spinners";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   const getTokenOfUser = async () => {
  //     try {
  //       const token = await axios.get()
  //     } catch (err) {
        
  //     }
  //   }
  // }, [])

  if (loading) return <div className="loader"><ScaleLoader color="#5669ff" /></div>

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
