const getValueObject = (id) => {
  let idDepatment = new Object
  for (let value in id) {
    idDepatment = id[value];
  }
  return idDepatment
}

const filterDataDepatment = (id, data) => {
  const filterData = data.filter(item => item.department == getValueObject(id))
  return filterData
}

export {filterDataDepatment, getValueObject}