 interface resurceArrRuls {
  level: number
  wood: number
  clay: number
  iron: number
  wheat: number
  time: number
  piple: number
  income: number
}

interface resurceUpdateRulsType {
  wood: resurceArrRuls[]
  clay: resurceArrRuls[]
  iron:  resurceArrRuls[]
  wheat:  resurceArrRuls[]
}

const resurceUpdateRuls: resurceUpdateRulsType = {
   wood: [
    {level: 1, wood: 30, clay: 80, iron: 40, wheat: 50, time: 50, piple: 2, income: 5},
    {level: 2, wood: 65, clay: 165, iron: 85, wheat: 100, time: 100, piple: 3, income: 9},
    {level: 3, wood: 110, clay: 280, iron: 140, wheat: 165, time: 335, piple: 4, income: 15},
    {level: 4, wood: 185, clay: 465, iron: 235, wheat: 280, time: 1350, piple: 5, income: 22},
  ] ,
  
  clay: [
  {level: 1, wood: 60, clay: 85, iron: 70, wheat: 0, time: 100, piple: 2, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 0, time: 85, piple: 3, income: 9},
  {level: 3, wood: 225, clay: 110, iron: 225, wheat: 140, time: 305, piple: 4, income: 15},
  {level: 4, wood: 375, clay: 185, iron: 375, wheat: 235, time: 1230, piple: 5, income: 22},
  {level: 5, wood: 620, clay: 310, iron: 620, wheat: 390, time: 2460, piple: 6, income: 33},
],

 iron: [
  {level: 1, wood: 60, clay: 75, iron: 70, wheat: 40, time: 50, piple: 3, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 85, time: 85, piple: 5, income: 9},
  {level: 3, wood: 280, clay: 225, iron: 85, wheat: 165, time: 420, piple: 7, income: 15},
  {level: 4, wood: 465, clay: 375, iron: 140, wheat: 280, time: 1680, piple: 9, income: 22},
],

 wheat: [
  {level: 1, wood: 60, clay: 85, iron: 70, wheat: 0, time: 50, piple: 0, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 0, time: 85, piple: 0, income: 9},
  {level: 3, wood: 210, clay: 250, iron: 235, wheat: 0, time: 280, piple: 0, income: 15},
  {level: 4, wood: 350, clay: 420, iron: 395, wheat: 0, time: 1110, piple: 0, income: 22},
  {level: 5, wood: 585, clay: 700, iron: 660, wheat: 0, time: 2110, piple: 0, income: 33},
  {level: 6, wood: 1000, clay: 1200, iron: 1100, wheat: 0, time: 4110, piple: 0, income: 48},
],

}

export {resurceUpdateRuls}

export type {resurceArrRuls, resurceUpdateRulsType}
