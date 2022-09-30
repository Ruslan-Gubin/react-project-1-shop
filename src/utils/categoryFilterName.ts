const categoryFilterName = (data) => { 
  const searcCaregory = data.map((item) => {
    if (item.category === "album") return "Альбомы";
    if (item.category === "notebooks") return "Тетради";
    if (item.category === "pens") return "Ручки";
    return item.category;
  });
  searcCaregory.unshift('Все')
  return (Array.from(new Set(searcCaregory))).filter(item => item !== '') 
};
export { categoryFilterName };
