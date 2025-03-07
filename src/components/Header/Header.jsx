
import React from "react";
import styles from './header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>

           
            <div className={styles.content}>


                 <h1 className={styles.tytle}> Kayakka </h1>
                 <nav>
                  <a href="#">
                  Зарегистрироваться
                    </a>
                    <a href="#">
                    Войти    
                        </a>  
                    
                    
                    </nav>   


            </div>
            
            


        </header>
    )
}


export default Header