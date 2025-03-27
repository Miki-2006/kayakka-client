import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import { logout } from "../../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Извлекаем данные пользователя из localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Преобразуем строку в объект
    }
  }, []);

  useEffect(() => {
    if (user === null) {
      // Если данные пользователя ещё не загружены (user === null), не перенаправляем
      return;
    }

    if (!user) {
      // Если пользователь не найден в localStorage, перенаправляем на страницу входа
      navigate("/login");
    }
  }, [user, navigate]); // Зависимости: следим за изменением user

  // Функция для выхода
  const handleLogout = () => {
    dispatch(logout()); // Отправляем действие для выхода
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); // Перенаправляем на страницу входа
  };

  if (user === null) {
    // Пока данные пользователя не загружены, можно показать индикатор загрузки
    return <div>Загрузка...</div>;
  }

  const handleAdd = () => {
    navigate("/add");
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardBox}>
        <h1 className={styles.title}>Личный Кабинет</h1>
        <div className={styles.userInfo}>
          <h2>{`Привет, ${user.f_name} ${user.l_name}`}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
        {user?.role === "organizer" ? (
          <button className={styles.addButton} onClick={handleAdd}>
            Добавить мероприятие
          </button>
        ) : (
          ""
        )}

        <button className={styles.logoutButton} onClick={handleLogout}>
          Выход
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
