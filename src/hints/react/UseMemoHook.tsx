import { useState, useMemo } from "react";
import React from 'react';

function createUser(name: string, surname: string){
    const user = {name, surname}
    console.log(user)
    return user
}

const useMemoHooks = () => {
        const [name, setName] = useState('');
    const [ surname, setSurnsme] = useState('');
    const [counter, setCounter] = useState(0)

    const users = useMemo(() => createUser(name, surname),[name, surname])
//useMemo (мемонизируе) резервирует функцию до тех пор пока зависимости не езменятся
// возвращает один и тотже колбек до тех пор пока не изменися одна из зависимостей
    return (
         <div>
            <button onClick={()=> setCounter(counter + 1)}>Click {counter}</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={surname} onChange={(e) => setSurnsme(e.target.value)} />
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
};

export default useMemoHooks;