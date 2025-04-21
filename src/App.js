import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ScaleLoader } from "react-spinners";
import Main from "./pages/Main/Main";
import CinemaPage from "./components/CinemaPage/CinemaPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Main/Registration/Login";
import Signin from "./pages/Main/Registration/Signin/Signin";
import Event from "./components/EventIdivid/Event";
import AddEventForm from "./pages/AddEvent/AddEvent";
import Cinema from "./pages/Cinema/Cinema";
import CinemaList from "./pages/Cinema/CinemaList";
import Events from "./pages/Main/Events/Events";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading)
    return (
      <div className="loader">
        <ScaleLoader color="#FFFCFC" />
      </div>
    );

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Navigate to="/events" replace />} />
        <Route path="/events" element={<Main />}>
          <Route path=":selectedCategory" element={<Events />} />
          <Route path="cinema" element={<Cinema />}>
            <Route path="cinemas" element={<CinemaList />}>
              <Route path=":id" element={<CinemaPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="/event/:id" element={<Event />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route path="/event/addEvent" element={<AddEventForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
