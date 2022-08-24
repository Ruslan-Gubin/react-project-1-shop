// Enams -- перечисления помогает лучше структурировать однотипные елементы
enum Directions {
    up = 2,
    down = 4,  
    left = 6,  
    right = 8
}
Directions.up || Directions[2]
Directions.down || Directions[4]
Directions[6]
Directions[8]
//пример
export const enum links {
    youtube = 'https://youtube.com',
    vk = 'httos://vk.com',
    facebook = 'https://facebook.com'
}
links.vk
links.youtube
const arr1 = [ links.vk, links.facebook]