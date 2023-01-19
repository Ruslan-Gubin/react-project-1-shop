import axios from 'axios';
import { useEffect, useState } from 'react';
import { ITestsDataUsers } from './types';

const AsyncTesting = () => {
  const [users, setUsers] = useState<ITestsDataUsers[]>([])

  const loadUsers = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    if (resp) { 
      setUsers(resp.data)
    }
    
  }

  useEffect(() => {
    loadUsers()
  },[users])
  
  return (
    <div>
      <div>Check in Document</div>
      {users && users.map(user => <div key={user.id} data-testid='user-item'>{user.name}</div>)}
    </div>
  );
};

export  {AsyncTesting};