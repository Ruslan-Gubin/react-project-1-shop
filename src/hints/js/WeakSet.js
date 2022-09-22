const users = [
    {name: 'Ruslan'},
    {name: 'Anna'},
    {name: 'Elena'},
    ]
    
    const visits = new WeakSet()
     
    visits.add(users[0]).add(users[1])
    
    users.splice(1,1) // удаляя пользователя мы очищаем кеш visits
    console.log(users);
    console.log(visits.has(users[0]))
    console.log(visits.has(users[1]))