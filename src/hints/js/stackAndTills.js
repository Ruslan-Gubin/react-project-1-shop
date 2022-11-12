// Стек и очередь
// Стек - это некая структура данных последним пришол последний вышел
// Очередь - первый пришол первый ушол FIFO (first in first out)

function flatten(...stack) {
  const result = [];
  while (stack.length) {
    const el = stack.shift();
    if (Array.isArray(el)) {
      stack.unshift(...el);
    } else {
      result.push(el);
    }
  }
  return result;
}
// console.log(flatten([1, [2, [[3]], 4, 5, [6, [7]]]]));
// console.log(flatten(["a", ["b", 2], 3, null, [[4], ["c"]]]));


function calculate(ecpression) {
  const arr = ecpression.split(' ')
  const stack = []
 
  while(arr.length) {
    const el  = arr.pop()
    const numberEl = Number(el)
    if (!isNaN(numberEl)) {
      stack.push(numberEl)
      continue
    }

    const firstNum = stack.pop()
    const secondNum = stack.pop()

    switch(el) {
      case '+':
        stack.push(firstNum + secondNum)
        break;
      case '/':
        stack.push(firstNum / secondNum)
        break;
      case '-':
        stack.push(firstNum - secondNum)
        break;
      case '*':
        stack.push(firstNum * secondNum)
        break;
    }

  }
  return stack[0]
}

// console.log(calculate('+ 3 5'), 8);//8
// console.log(calculate('* + 2 2 3'), 12);//12
// console.log(calculate('/ + 3 5 * 2 2'), 2);//2


function queueTime(customers, n) {
  if (!customers.length) {
    return 0
  }

  const  queue = [...customers];
  const tills = Array(Math.min(n, customers.length)).fill(0)
  while(queue.length) {
    const customer = queue.shift()
    const tillMinId = tills.indexOf(Math.min(...tills))
    tills[tillMinId] += customer
  }
  return Math.max(...tills)
}

console.log(queueTime([],1),0);
console.log(queueTime([1,2,3,4],1), 10);
console.log(queueTime([2,2,3,3,4,4,],2),9);
console.log(queueTime([1,2,3,4,5],100),5);