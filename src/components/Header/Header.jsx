import React from "react";
import styles from './header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>

           
            <div className={styles.content}>

                 <h1 className={styles.tytle}>Karsis.com </h1>

            <nav>
                
                <a href="# ">Concerts </a>
                <a href="# ">Arts </a>
                <a href="# ">Conference </a>
                <a href="# ">Movies </a>
                <a href="# ">International </a>
            </nav>
            
            <div className={styles.last}>
                <nav>
                <a href="#">
              Log In
             </a>
             <a href="#">
                Sign up
             </a>
             </nav>
             


            </div>

            </div>


        </header>
    )
}

export default Header