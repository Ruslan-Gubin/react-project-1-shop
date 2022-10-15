export interface IproductsCategoriLink {
    img: string
    catigoriName: string
    department: string
}

const productsCategoriLink:IproductsCategoriLink[] = [
  {
    img: "https://i.ibb.co/0Qrz6mS/14497.webp",
    catigoriName: "канцтовары",
    department: 'stationery'
  },
  {
    img: "https://i.ibb.co/wgTYf6R/228454755.webp",
    catigoriName: "товары для детей",
    department: 'products-for-children'
  },
  {
    img: "https://i.ibb.co/mR685xT/2.webp",
    catigoriName: "красота и здоровье",
    department: 'beauty-and-health'
  },
  {
    img: "https://i.ibb.co/GM1hJzn/14401.webp",
    catigoriName: "товары для дома",
    department: 'household-products'
  },
  {
    img: "https://i.ibb.co/wLcLrzq/14449.webp",
    catigoriName: "сад огород",
    department: 'garden-garden'
  },
  {
    img: "https://i.ibb.co/VWJZLnY/image-16.webp",
    catigoriName: "одежда",
    department: 'clothing'
  }
]

export {productsCategoriLink}
