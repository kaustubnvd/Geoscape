import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <header className={styles.header}>
      <h1>Geoscape</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              a
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={styles.navLink}
              activeClassName={styles.navLinkActive}
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
