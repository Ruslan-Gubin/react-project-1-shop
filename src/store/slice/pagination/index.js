import paginationPostSlice from './paginationPost';
import paginationProductSlice from './paginationProduct';

export {paginationPostSlice}
export {paginationProductSlice}

export {selectPaginationPost,resetPagePost, setPrevPagePost, setNextPagePost, setPaginatePost} from './paginationPost';
export {selectPaginationProduct, resetPageProduct, setPrevPageProduct, setNextPageProduct, setPaginateProduct} from './paginationProduct';