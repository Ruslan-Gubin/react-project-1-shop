import { NeedResurceMinesArrType, NeedResurceWarhousType } from "models/GameType"

const resurceUpdateRuls: NeedResurceMinesArrType = {
   wood: [
    {level: 1, wood: 30, clay: 80, iron: 40, wheat: 50, time: 50000, piple: 2, income: 5},
    {level: 2, wood: 65, clay: 165, iron: 85, wheat: 100, time: 100000, piple: 3, income: 9},
    {level: 3, wood: 110, clay: 280, iron: 140, wheat: 165, time: 335000, piple: 4, income: 15},
    {level: 4, wood: 185, clay: 465, iron: 235, wheat: 280, time: 1350000, piple: 5, income: 22},
  ] ,
  
  clay: [
  {level: 1, wood: 60, clay: 85, iron: 70, wheat: 0, time: 100000, piple: 2, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 0, time: 85000, piple: 3, income: 9},
  {level: 3, wood: 225, clay: 110, iron: 225, wheat: 140, time: 305000, piple: 4, income: 15},
  {level: 4, wood: 375, clay: 185, iron: 375, wheat: 235, time: 1230000, piple: 5, income: 22},
  {level: 5, wood: 620, clay: 310, iron: 620, wheat: 390, time: 2460000, piple: 6, income: 33},
],

 iron: [
  {level: 1, wood: 60, clay: 75, iron: 70, wheat: 40, time: 50000, piple: 3, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 85, time: 85000, piple: 5, income: 9},
  {level: 3, wood: 280, clay: 225, iron: 85, wheat: 165, time: 420000, piple: 7, income: 15},
  {level: 4, wood: 465, clay: 375, iron: 140, wheat: 280, time: 1680000, piple: 9, income: 22},
],

 wheat: [
  {level: 1, wood: 60, clay: 85, iron: 70, wheat: 0, time: 50000, piple: 0, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 0, time: 85000, piple: 0, income: 9},
  {level: 3, wood: 210, clay: 250, iron: 235, wheat: 0, time: 280000, piple: 0, income: 15},
  {level: 4, wood: 350, clay: 420, iron: 395, wheat: 0, time: 1110000, piple: 0, income: 22},
  {level: 5, wood: 585, clay: 700, iron: 660, wheat: 0, time: 2110000, piple: 0, income: 33},
  {level: 6, wood: 975, clay: 1170, iron: 1105, wheat: 0, time: 4110000, piple: 1, income: 50},
],

}

const warehouse: NeedResurceWarhousType[] = [
  {level: 1, wood: 140, clay: 180, iron: 100, wheat: 0, time: 35000, piple: 1, capasity: 1200},
  {level: 2, wood: 185, clay: 240, iron: 135, wheat: 0, time: 240000, piple: 2, capasity: 1700},
  {level: 3, wood: 225, clay: 320, iron: 150, wheat: 0, time: 500000, piple: 3, capasity: 2300},
  {level: 4, wood: 330, clay: 425, iron: 235, wheat: 0, time: 960000, piple: 4, capasity: 3100},
]
const theBarn: NeedResurceWarhousType[] = [
  {level: 1, wood: 80, clay: 100, iron: 70, wheat: 20, time: 35000, piple: 1, capasity: 1200},
  {level: 2, wood: 105, clay: 135, iron: 95, wheat: 25, time: 230000, piple: 2, capasity: 2300},
  {level: 3, wood: 130, clay: 180, iron: 130, wheat: 30, time: 50000, piple: 3, capasity: 3100},
  {level: 4, wood: 190, clay: 235, iron: 165, wheat: 45, time: 918000, piple: 4, capasity: 1700},
]

export {resurceUpdateRuls, warehouse,theBarn}
