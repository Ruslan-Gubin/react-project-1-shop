import React from "react";
import { Link, useMatch } from "react-router-dom";
import styles, { ICustonLink } from './CustomLink.module.scss';

const CustomLink:React.FC<ICustonLink> = React.memo(({onClick, children, to, text, activeCl,noActive}) => {
    const math = useMatch({
        path: to,
        end: to.length === 1,
    })
    return (
   
            <Link 
            onClick={() => onClick}
            to={to} 
            className= {math ? (activeCl || styles.active) : (noActive || styles.link)}
            >
            {text}
            {children}
            </Link>
    
    );
});

export {CustomLink};