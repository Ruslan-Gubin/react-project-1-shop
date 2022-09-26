import React, { useEffect, useState } from 'react';
import ButtonMain from '../ButtonMain';

const Watch = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      setTimeout(()=> {
        setDate(new Date().toLocaleTimeString())
      },1000)
    },[date])

    return (
       
        <ButtonMain  disabled={true} bgColor="info">{date}</ButtonMain>
        
    );
};

export default Watch;