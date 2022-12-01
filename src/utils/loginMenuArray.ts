
interface IOptionsMenu {
  title: string
  url: string
}

const optionsMenuLinks: IOptionsMenu[] = [
  {title: 'Блог', url: '/'},
  {title: 'Наша продукция', url: '/products'},
  {title: 'Войти', url: '/login'},
  {title: 'Зарегестрироватся', url: '/register'},
]

const optionsMenuAuth: IOptionsMenu[] = [
  {title: 'Блог', url: '/'},
  {title: 'Наша продукция', url: '/products'},
  {title: 'Посты', url: '/post'},
  {title: 'Выйти', url: '/'}
]


const checkUserLoginForMenu = (check: string): IOptionsMenu[] => {
  
  if (check) {
    return [...optionsMenuAuth]
  } else {
    return [...optionsMenuLinks]
  }
  
}

export {checkUserLoginForMenu}