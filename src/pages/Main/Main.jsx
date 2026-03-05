import CategoriesOfEvents from "./Categories/CategoriesOfEvents";
import styles from "./main.module.css";
import { Outlet } from "react-router";

const Main = () => {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <CategoriesOfEvents/>
        <Outlet/>
      </div>
    </main>
  );
};

export default Main;
