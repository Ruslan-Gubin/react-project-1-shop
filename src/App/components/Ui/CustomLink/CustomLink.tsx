import React from "react";
import { Link, useMatch } from "react-router-dom";
import { PropsClildren } from "../../../../models/children";
import styles from './CustomLink.module.scss';

const CustomLink:React.FC<PropsClildren> = React.memo(({onClick, children, to, ...props}) => {
    const math = useMatch({
        path: to,
        end: to.length === 1,
    })
    return (
   
            <Link 
            onClick={() => onClick}
            to={to} 
            className= {math ? (props.activeCl || styles.active) : (props.noActive || styles.link)}
            >
            {props.text}
            {children}
            </Link>
    
    );
});

export {CustomLink};