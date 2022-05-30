import React from 'react';
import styles from "../App.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <NavLink to={'/'} className={data =>
                    data.isActive ? `${styles.navlink} ${styles.activeLink}` : `${styles.navlink}`}>
                    <div>Все котики</div>
                </NavLink>
                <NavLink to={'/favorites'} className={data =>
                    data.isActive ? `${styles.navlink} ${styles.activeLink}` : `${styles.navlink}`}>
                    <div>Любимые котики</div>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;