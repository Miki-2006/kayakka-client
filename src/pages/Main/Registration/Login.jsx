import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../features/authAction";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Инициализируем useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправляем данные на сервер для аутентификации
    await dispatch(loginUser(email, password));

    // Проверяем, был ли пользователь успешно авторизован (например, если в Redux есть user)
    const user = localStorage.getItem("token"); // Проверка на наличие токена в localStorage

    if (user) {
      // Перенаправляем на главную страницу после успешного входа
      navigate("/"); // Переход на главную страницу
    } else {
      console.error("Invalid credentials"); // Если аутентификация не прошла
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_box}>
        <div className={styles.logo}>
          {/* Логотип */}
          <div className={styles.logo_icon}></div>
          <h1 className={styles.logo_text}>Kayakka</h1>
        </div>

        {/* Форма входа */}
        <h2 className={styles.title}>Войти</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <FiMail className={styles.input} />
            <input
              type="email"
              placeholder="@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input_group}>
            <FiLock className={styles.input_group} />
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Доп. настройки */}
          <div className={styles.options}>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Запомнить меня
            </label>
            <a href="/forgot" className={styles.forgot_password}>
              Забыли пароль?
            </a>
          </div>

          {/* Кнопка входа */}
          <button className={styles.btn}>Войти</button>
        </form>

        {/* Разделитель OR */}
        <div className={styles.seperator}>
          <span>Или</span>
        </div>

        {/* Кнопки соц. входа */}
        <button className={styles.social_btn}>
          <FaGoogle className={styles.google} /> Войти через Google
        </button>
        <button className={styles.social_btn}>
          <FaFacebook className={styles.facebook} /> Войти через Facebook
        </button>

        {/* Ссылка на регистрацию */}
        <p className={styles.signup_text}>
          У вас нет учетной записи?{" "}
          <a href="/signin" className={styles.signup_link}>
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
