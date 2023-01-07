import { NeedResourceMinesArrType, NeedResourceWarhousType } from "models/GameType"

const resourceUpdateRuls: NeedResourceMinesArrType = {
   wood: [
    {level: 1, wood: 30, clay: 80, iron: 40, wheat: 50, time: 50000, piple: 2, income: 5},
    {level: 2, wood: 65, clay: 165, iron: 85, wheat: 100, time: 100000, piple: 3, income: 9},
    {level: 3, wood: 110, clay: 280, iron: 140, wheat: 165, time: 335000, piple: 4, income: 15},
    {level: 4, wood: 185, clay: 465, iron: 235, wheat: 280, time: 1350000, piple: 5, income: 22},
    {level: 5, wood: 310, clay: 780, iron: 395, wheat: 465, time: 3100000, piple: 6, income: 33},
    {level: 6, wood: 520, clay: 1300, iron: 650, wheat: 780, time: 5400000, piple: 8, income: 50},
    {level: 7, wood: 870, clay: 2170, iron: 1085, wheat: 1300, time: 11100000, piple: 10, income: 70},
    {level: 8, wood: 1450, clay: 3625, iron: 1810, wheat: 2175, time: 15000000, piple: 12, income: 100},
    {level: 9, wood: 2420, clay: 6050, iron: 3025, wheat: 3630, time: 22500000, piple: 14, income: 145},
  ] ,
  
  clay: [
  {level: 1, wood: 60, clay: 85, iron: 70, wheat: 0, time: 100000, piple: 2, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 0, time: 85000, piple: 3, income: 9},
  {level: 3, wood: 225, clay: 110, iron: 225, wheat: 140, time: 305000, piple: 4, income: 15},
  {level: 4, wood: 375, clay: 185, iron: 375, wheat: 235, time: 1230000, piple: 5, income: 22},
  {level: 5, wood: 620, clay: 310, iron: 620, wheat: 390, time: 2460000, piple: 6, income: 33},
  {level: 6, wood: 1040, clay: 520, iron: 1040, wheat: 650, time: 5280000, piple: 8, income: 50},
  {level: 7, wood: 1735, clay: 870, iron: 1735, wheat: 1085, time: 6840000, piple: 10, income: 70},
  {level: 8, wood: 2900, clay: 1450, iron: 2900, wheat: 1810, time: 13800000, piple: 12, income: 100},
  {level: 9, wood: 3510, clay: 2750, iron: 4000, wheat: 3510, time: 20800000, piple: 14, income: 145},
  {level: 10, wood: 8080, clay: 4040, iron: 8080, wheat: 5050, time: 30900000, piple: 16, income: 200},
],

 iron: [
  {level: 1, wood: 60, clay: 75, iron: 70, wheat: 40, time: 50000, piple: 3, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 85, time: 85000, piple: 5, income: 9},
  {level: 3, wood: 280, clay: 225, iron: 85, wheat: 165, time: 420000, piple: 7, income: 15},
  {level: 4, wood: 465, clay: 375, iron: 140, wheat: 280, time: 1680000, piple: 9, income: 22},
  {level: 5, wood: 780, clay: 620, iron: 235, wheat: 465, time: 3360000, piple: 11, income: 33},
  {level: 6, wood: 1300, clay: 1040, iron: 390, wheat: 780, time: 6720000, piple: 13, income: 50},
  {level: 7, wood: 2170, clay: 1735, iron: 650, wheat: 1300, time: 9300000, piple: 15, income: 70},
  {level: 8, wood: 3625, clay: 2900, iron: 1085, wheat: 2175, time: 18600000, piple: 17, income: 100},
  {level: 9, wood: 6050, clay: 4840, iron: 1815, wheat: 3630, time: 27900000, piple: 19, income: 145},
],

 wheat: [
  {level: 1, wood: 60, clay: 85, iron: 70, wheat: 0, time: 50000, piple: 0, income: 5},
  {level: 2, wood: 125, clay: 150, iron: 140, wheat: 0, time: 85000, piple: 0, income: 9},
  {level: 3, wood: 210, clay: 250, iron: 235, wheat: 0, time: 280000, piple: 0, income: 15},
  {level: 4, wood: 350, clay: 420, iron: 395, wheat: 0, time: 1110000, piple: 0, income: 22},
  {level: 5, wood: 585, clay: 700, iron: 660, wheat: 0, time: 2110000, piple: 0, income: 33},
  {level: 6, wood: 975, clay: 1170, iron: 1105, wheat: 0, time: 4110000, piple: 1, income: 50},
  {level: 7, wood: 1625, clay: 1950, iron: 1845, wheat: 0, time: 6240000, piple: 2, income: 70},
  {level: 8, wood: 2715, clay: 3260, iron: 3080, wheat: 0, time: 12300000, piple: 3, income: 100},
  {level: 9, wood: 4535, clay: 5445, iron: 5140, wheat: 0, time: 18600000, piple: 4, income: 145},
],

}

const warehouse: NeedResourceWarhousType[] = [
  {level: 1, wood: 140, clay: 180, iron: 100, wheat: 0, time: 35000, piple: 1, capasity: 1200},
  {level: 2, wood: 185, clay: 240, iron: 135, wheat: 0, time: 240000, piple: 2, capasity: 1700},
  {level: 3, wood: 225, clay: 320, iron: 150, wheat: 0, time: 500000, piple: 3, capasity: 2300},
  {level: 4, wood: 330, clay: 425, iron: 235, wheat: 0, time: 960000, piple: 4, capasity: 3100},
  {level: 5, wood: 330, clay: 425, iron: 235, wheat: 0, time: 3100000, piple: 5, capasity: 4000},
  {level: 6, wood: 585, clay: 750, iron: 415, wheat: 0, time: 5100000, piple: 6, capasity: 5000},
  {level: 7, wood: 775, clay: 995, iron: 555, wheat: 0, time: 7800000, piple: 7, capasity: 6300},
]
const theBarn: NeedResourceWarhousType[] = [
  {level: 1, wood: 80, clay: 100, iron: 70, wheat: 20, time: 35000, piple: 1, capasity: 1200},
  {level: 2, wood: 105, clay: 135, iron: 95, wheat: 25, time: 230000, piple: 2, capasity: 2300},
  {level: 3, wood: 130, clay: 180, iron: 130, wheat: 30, time: 50000, piple: 3, capasity: 3100},
  {level: 4, wood: 190, clay: 235, iron: 165, wheat: 45, time: 918000, piple: 4, capasity: 3500},
  {level: 5, wood: 240, clay: 300, iron: 210, wheat: 60, time: 2919000, piple: 5, capasity: 4000},
  {level: 6, wood: 335, clay: 415, iron: 290, wheat: 85, time: 4920000, piple: 6, capasity: 5000},
]

export {resourceUpdateRuls, warehouse,theBarn}
