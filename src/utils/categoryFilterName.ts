const categoryFilterName = (data, translate:boolean) => { 
  const searcCaregory = data.map((item) => {
    if(translate) {
      if (item.category === "Все") return "all";
      if (item.category === "album") return "Альбомы";
      if (item.category === "notebooks") return "Тетради";
      if (item.category === "pens") return "Ручки";
    }
    return item.category;
  });
  if (translate) {
    searcCaregory.unshift('Все')
  } else {
    searcCaregory.unshift('all')
  }
  return (Array.from(new Set(searcCaregory))).filter(item => item !== '') 
};
export { categoryFilterName };
