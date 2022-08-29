import { JSXElementConstructor, useEffect, useState } from "react";



const Modal: JSXElementConstructor<any> = ({children, ...props}) => {
const [date,setDate] = useState(new Date().toLocaleTimeString())

    return (
        <div 
        className={props.active ? 'modal active' : 'modal'} 
        onClick={() => props.setActive(false)}
        >
      
  {
  date  <  '17:37:00'
   ? 
  <div className={props.active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
     {children}
  </div>
  :date > '17:37:01' && 
  <div className={props.active ? 'modal-content-night active' : 'modal-content-night'} onClick={e => e.stopPropagation()}>
     {children}
  </div>
  
  }


  
      
</div>
    );
};

export default Modal;


        
          
        
          
          
        
          
          
            
           
            
            
        
        
      