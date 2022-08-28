


const Modal = ({children, ...props}) => {

    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
    <div className={props.active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
     {children}
      
  </div>
</div>
    );
};

export default Modal;


        
          
        
          
          
        
          
          
            
           
            
            
        
        
      