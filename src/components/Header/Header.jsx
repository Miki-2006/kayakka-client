
import React from "react";
import styles from './header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>

           
            <div className={styles.content}>


                <h1 className={styles.tytle}> Kayakka</h1>
                <div className={styles.link}>
                    <a href="#"> Зарегистрироваться</a>
                    <a href="#">Войти </a>
                </div>
 

            </div>
            
            


        </header>
    )
}


export default Header