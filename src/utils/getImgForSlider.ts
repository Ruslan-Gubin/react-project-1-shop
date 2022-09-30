
 const getImgForSlider = (array) => {
  const resArray = []
  const resObject = {}
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    resObject[i] = {images: item.img}
  }
  for (let value in resObject) {
    resArray.push(resObject[value])
  } 
  return resArray;
}

export {getImgForSlider}