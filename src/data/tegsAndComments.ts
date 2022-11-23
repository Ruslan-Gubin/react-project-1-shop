

const tegsArray: string[] = ["# react", "# typescript", "# заметки"];
const sortCategoryName:string[] = ["Новые", "Популярные"];


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
}