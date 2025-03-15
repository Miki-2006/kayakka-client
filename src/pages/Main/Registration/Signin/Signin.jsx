import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiPhone } from "react-icons/fi";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import styles from "./signin.module.css"; // Импорт стилей для регистрации
import axios from "axios";

const Signin = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("user")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      f_name: name,
      l_name: surName,
      email: email,
      password: password,
      phone: phone,
      role: role,
    };

    try {
      const response = await axios.post(
        "https://kayakka-server.vercel.app/api/auth/register",
        userData
      );

      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Ошибка регистрации:", error.response.data);
      } else {
        console.error("Ошибка сети!", error.message);
      }
    }
  };

  return (
    <div className={styles.register_container}>
      <div className={styles.register_box}>
        <div className={styles.logo}>
          {/* Логотип */}
          <div className={styles.logo_icon}></div>
          <h1 className={styles.logo_text}>Kayakka</h1>
        </div>

        {/* Заголовок формы */}
        <h2 className={styles.title}>Зарегистрироваться</h2>

        <form onSubmit={handleSubmit}>
          {/* Поле для имени */}
          <div className={styles.input_group}>
            <FiUser className={styles.input} />
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.input_group}>
            <FiUser className={styles.input} />
            <input
              type="text"
              placeholder="Ваша фамилия"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
            />
          </div>

          {/* Поле для email */}
          <div className={styles.input_group}>
            <FiMail className={styles.input} />
            <input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Поле для пароля */}
          <div className={styles.input_group}>
            <FiLock className={styles.input} />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.input_group}>
            <FiPhone className={styles.input} />
            <input
              type="text"
              placeholder="номер"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className={styles.input_group}>
            <label htmlFor="role">Кто вы?</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.select}
            >
              <option value="user">пользователь</option>
              <option value="organizer">организатор</option>
            </select>
          </div>

          {/* Кнопка для отправки формы */}
          <button type="submit" className={styles.btn}>
            Зарегистрироваться
          </button>

          {/* Разделитель */}
          <div className={styles.seperator}>
            <span>Или</span>
          </div>

          {/* Социальные кнопки */}
          <button className={styles.social_btn}>
            <FaGoogle className={styles.google} /> Зарегистрироваться через
            Google
          </button>
          <button className={styles.social_btn}>
            <FaFacebook className={styles.facebook} /> Зарегистрироваться через
            Facebook
          </button>

          {/* Ссылка на страницу входа */}
          <p className={styles.signup_text}>
            Уже есть аккаунт?{" "}
            <a href="/login" className={styles.signup_link}>
              Войти
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
