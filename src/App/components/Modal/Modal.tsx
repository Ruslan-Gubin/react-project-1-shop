import { JSXElementConstructor, useEffect, useState } from "react";

import styles from './Modal.module.scss';

const Modal: JSXElementConstructor<any> = ({children, ...props}) => {
const [date,setDate] = useState(new Date().toLocaleTimeString())

    return (
        <div 
        className={props.active ? `${styles.modal}  ${styles["modal-active"]}` : styles.modal} 
        onClick={() => props.setActive(false)}
        >
      
  {
  date  <  '17:37:00'
   ? 
  <div className={props.active ?  `${styles.content} ${styles["content-active"]}` : styles.content} onClick={e => e.stopPropagation()}>
     {children}
  </div>
  :date > '17:37:01' && 
  <div className={props.active ? `${styles.night} ${styles["night-active"]}` : styles.night} onClick={e => e.stopPropagation()}>
     {children}
  </div>
  
  }


  
      
</div>
    );
};

export default Modal;


        
          
        
          
          
        
          
          
            
           
            
            
        
        
      