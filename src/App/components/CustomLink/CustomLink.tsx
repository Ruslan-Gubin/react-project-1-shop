import { Link, useMatch } from "react-router-dom";
import { PropsClildren } from "../../../models/children";



const CustomLink = ({children, to, ...props}: PropsClildren) => {
    const math = useMatch({
        path: to,
        end: to.length === 1,
    })
    return (
   
            <Link 
            to={to} 
            className= {math ? (props.activeCl || 'custom-link__active') : (props.noActive || 'custom-link')}
            >
            {props.text}
            {children}
            </Link>
    
    );
};

export default CustomLink;