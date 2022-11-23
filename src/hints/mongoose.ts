// this.model.deleteMany({_id: arrid}) чтобы удалить массив id
// .find(  {$and: [{tags: { $regex: tag }}, {user: {_id: authId}}, {title: { $regex: search }}]} ) поиск по нескольким ключам
//await this.model.find({'_id':{$in : userArrId}},{image: true,fullName: true}) поиск массива id и выборка данных

//updateOne({name : "Tom"}, {$push: {languages: {$each: ["russian", "spanish", "italian"]}}}) добавляет в массив и если есть такоеже значение оно повторяется
//updateOne({name : "Tom"}, {$addToSet: {languages: "russian"}}) добавляет значение если его нет в массиве


//updateOne({name : "Tom"}, {$pull: {languages: "english"}}) удаление из массива
//updateOne({name : "Tom"}, {$pop: {languages: -1}}) удаление последнего елемента
//updateOne({name : "Tom"}, {$pullAll: {languages: ["english", "german", "french"]}}) несколько значений














