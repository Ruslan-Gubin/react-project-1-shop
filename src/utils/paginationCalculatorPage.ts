 
 interface paginationCalculatorPageType {
    currentPage:number
    postsPerPage:number
    data: object
  }
 
 
 
 const paginationCalculatorPage  =  (data,currentPage,postsPerPage) => {
    const lastPostsIndex = currentPage * postsPerPage
    const firstPostsIndex = lastPostsIndex - postsPerPage
    const currentPosts =  data.slice(firstPostsIndex, lastPostsIndex)
    return currentPosts
   }
   export default paginationCalculatorPage