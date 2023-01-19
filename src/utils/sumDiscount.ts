
const sumDiscount:Function = ((a:number, b:number) => {
  if (!a || !b) {
    return 0
  }
 return Math.ceil(((a - b) / b) * 100)
});

export {sumDiscount}