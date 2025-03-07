import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Sceleton from "./loaders/Sceleton";

function App() {
  const loadingEvents = useSelector((state) => state.events.loading);
  const loadingCategories = useSelector((state) => state.categories.loading);
  // const loading = useSelector((state) => state.sceleton.loading);
  // if(loadingCategories && loadingEvents) return <Sceleton/>

  return (
    <div className="App">
      {/* {loading ? (
        <Sceleton />
      ) : (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )} */}
      <Header />
      {/* <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
