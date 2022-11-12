import React, { useEffect, useState } from 'react';
import { ButtonMain } from 'ui';



const Watch = React.memo(() => {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      setTimeout(()=> {
        setDate(new Date().toLocaleTimeString())
      },1000)
    },[date])

    return (
       
        <ButtonMain  disabled={true} bgColor="info">{date}</ButtonMain>
        
    );
});

export  {Watch};