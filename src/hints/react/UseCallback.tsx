import React, { useCallback, useEffect, useState } from 'react';

const UseCallback = () => {
    const [message, useMessage] = useState('message')
   const[counter, setCounter] = useState(0) 

    const greeting = useCallback((text:string) => {
        console.log(text);
    },[])
    // useCallback обеспечиват ссылку на одну у туже функцию
// возвращает одну и туже функцию 

    useEffect(()=> {
        greeting(message)
    },[greeting, message]) // вызываем функцию которая вызывается при первом рендереге
    


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
        </div>
    );
};

export default UseCallback;