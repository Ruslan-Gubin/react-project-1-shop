const getValueObject = (id) => {
  let idDepatment = new Object
  for (let value in id) {
    idDepatment = id[value];
  }
  return idDepatment
}

const filterDataDepatment = (id, data) => {
  return data.filter(item => item.department == getValueObject(id))
}

export {filterDataDepatment, getValueObject}