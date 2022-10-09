import React from "react";
import { Link, useMatch } from "react-router-dom";
import { PropsClildren } from "../../../../models/children";
import styles from './CustomLink.module.scss';

const CustomLink = React.memo(({children, to, ...props}: PropsClildren) => {
    const math = useMatch({
        path: to,
        end: to.length === 1,
    })
    return (
   
            <Link 
            to={to} 
            className= {math ? (props.activeCl || styles.active) : (props.noActive || styles.link)}
            >
            {props.text}
            {children}
            </Link>
    
    );
});

export {CustomLink};