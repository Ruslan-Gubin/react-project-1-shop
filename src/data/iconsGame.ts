import wheat from '../assets/img/icons/game/wheat-325235.png';
import iron from '../assets/img/icons/game/Iron_Ingot_25704.png';
import clay from '../assets/img/icons/game/clay-32521.png';
import exit from '../assets/img/icons/exit_closethesession_close_6317.png';
import wood from '../assets/img/icons/game/wood-55.png';
import population from '../assets/img/icons/game/population-983235.png';
import clock from '../assets/img/icons/game/clock-863285.png';
import refresh from '../assets/img/icons/game/refresh_106672.png';
import options from '../assets/img/icons/game/options-8326.png';
const ironeMine = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1671098900/Posts/ebklpqr6iw9s3hlgvrp3.png'
const woodMine = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1671102328/Posts/ck6ednix2bnlnczmb7gi.png'
const ferma = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1671104695/Posts/a9px0mcr6jtkdd5vurec.png'
const kleyIron = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1671105417/Posts/smniheogjkymwqbcgzxf.png'
const resurceLink = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1671119922/Posts/lu5j3fmmbkzfqfo3ypso.png'
const settlement = 'https://res.cloudinary.com/ds289tkqj/image/upload/v1671121731/Game/grid_v2_ztzvax.png'


type Obj = Record<string,string> 

const iconsGame: Obj = {
  options,
  refresh,
  clock,
  population,
  exit,
  settlement,
  resurceLink,
  kleyIron,
  ferma,
  woodMine,
  ironeMine,
  wood,
  clay,
  iron,
  wheat,
}

export {iconsGame}