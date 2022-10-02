
 
 const paginationCalculatorPage =  (data: Array<object>,currentPage: number,perPage: number) => {
    const lastPostsIndex = currentPage * perPage
    const firstPostsIndex = lastPostsIndex - perPage
    const currentPosts =  data.slice(firstPostsIndex, lastPostsIndex)
    return currentPosts
   }
   export {paginationCalculatorPage}