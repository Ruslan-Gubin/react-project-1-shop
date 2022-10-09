import React from 'react'
import { Link } from 'react-router-dom';
import styles from './FooterMenu.module.scss';

const FooterMenu = React.memo(() => {
    return (
        <ul className={styles.menu}>
           <li> <Link to="/">Home</Link></li>
           <li> <Link to="/product">Product</Link></li>
           <li> <Link to="/post">Post</Link></li>    
            </ul>
    );
});

export {FooterMenu};