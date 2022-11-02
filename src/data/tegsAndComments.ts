import { IComments } from "../App/components/CardPostInfo/CardPostInfo";


const tegsArray: string[] = ["# react", "# typescript", "# заметки"];
const sortCategoryName:string[] = ["Новые", "Популярные"];
const commentsArray:IComments[] = [
  {imageUser: 'https://img3.fonwall.ru/o/qb/black-and-white-white-puppy-dog-tyib.jpeg?route=thumb&h=350',userName: "Ruslan",text: 'Это комментарий RuslanaЭто комментарий VictoryiЭто комментарий Victoryi'},
  {imageUser: 'https://img3.fonwall.ru/o/qb/black-and-white-white-puppy-dog-tyib.jpeg?route=thumb&h=350',userName: "Anna",text: 'Это комментарий AnniЭто комментарий VictoryiЭто комментарий VictoryiЭто комментарий Victoryi'},
  {imageUser: 'https://img3.fonwall.ru/o/qb/black-and-white-white-puppy-dog-tyib.jpeg?route=thumb&h=350',userName: "Victorya",text: 'Это комментарий VictoryiЭто комментарий VictoryiЭто комментарий VictoryiЭто комментарий Victoryi'},
]

export interface IcategotyPosts {
  value: string
  label: string
}

const categoryPosts: IcategotyPosts[] = [
  {value: 'new',label: "Новые"},
  {value: 'popular',label: "Популярные"},
]

export {
  categoryPosts,
  tegsArray,
  sortCategoryName,
  commentsArray,
}