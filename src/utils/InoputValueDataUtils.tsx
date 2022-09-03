import { useCallback, useEffect, useMemo, useRef } from "react";

const ENTER = 'Enter'    

const InputValueData = (props) => {
    const refName = useRef()
    const refSurName = useRef()
    const refSend = useRef()

    const valueFormValidationData = (input) => {
        if (input.current && !input.current.value) {
            return input.current.focus()
        } else if (input.current.value.length <= 3) {
            input.current.focus()       
        } 
    }

    const userLog = useCallback(() => {
        const user = {
            name: refName.current.value,
            surname: refSurName.current.value,
        }  
        console.log(user);                
    },[refName,refSurName])


   const keyUpHandler = useCallback((e) => {
    const {key} = e
    if ( key !== ENTER) {
        return
    } 
    valueFormValidationData(refName)
    valueFormValidationData(refSurName)
         if (refName.current.value && refSurName.current.value){
             userLog()
         }  
   },[userLog,refSurName,refName])

   useEffect(() => {
if (refName.current && refSurName.current && refSend.current) {
    refName.current.addEventListener('keyup', keyUpHandler)
    refSurName.current.addEventListener('keyup', keyUpHandler)
    refSend.current.addEventListener('click', userLog)
}
return () => {
    refName.current.removeEventListener('keyup', keyUpHandler)
    refSurName.current.removeEventListener('keyup', keyUpHandler)
    refSend.current.removeEventListener('click', userLog)
}  
   },[refName,refSurName,refSend,keyUpHandler,userLog])


    return (
        <>
        <input ref={refName} /> 
        <br />
        <br />
        <input ref={refSurName} />
        <br /> 
        <br /> 
        <button ref={refSend}>Push</button>    
        </>
        
    );
};

export default InputValueData;