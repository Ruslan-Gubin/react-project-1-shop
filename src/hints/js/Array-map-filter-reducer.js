
const people = [
    { name: "Ruslan", age: 30, budget: 80000 },
    { name: "Anna", age: 17, budget: 70000 },
  ];
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
  
  for (let i of people) console.log(i)
    
  people.forEach((item, index, arr) => console.log(index, item, arr));
    
  const newPeople = people.map((item,ind,arr) => `${item.name} ${item.budget * 2}`)
  console.log(newPeople);
  
  const filterPeople = people.filter(person => person.age > 18)
  console.log(filterPeople); 
  
  const reducePeople = people.reduce((state, person) => state + person.budget, 0)
  console.log(reducePeople); //150000
  
  const findPerson = people.find(person => person.name === 'Anna')
  console.log(findPerson); //{ name: 'Anna', age: 17, budget: 70000 }
  
  const indexPerson = people.findIndex(person => person.age == 17)
  console.log(indexPerson); // 1 - индекс // при неудаче -1
  
  const pers = people.filter(person => person.budget > 3000)
  .map(person => {
    return {  
      info: `${person.name} ${person.age}`,
      budget: person.budget    
  }
  })
  .reduce((total, person) => total + person.budget, 0)
  console.log(pers);