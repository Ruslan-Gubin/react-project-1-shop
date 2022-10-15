
const filterImageInObject = (obj) => {
  const res = []
  const map = {}
  for (let key in obj) {
    if (key.includes('img'))
    if (obj[key] !== '') res.push(map[key] = {images: obj[key]}) 
  }
 return res
}

export {filterImageInObject}