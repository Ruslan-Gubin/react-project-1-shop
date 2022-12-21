import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'store/slice';
import { TypeRootState } from 'store/store';

const AllActions = {
  ...actions.playerAction,
  ...actions.authAction,
  ...actions.postAction,
  ...actions.todoAction,
  ...actions.orderAction,
  ...actions.filterAction,
  ...actions.addProductAction,
}


const useActions = (action: any) => {
  const dispatch = useDispatch()
  return bindActionCreators({...action}, dispatch)
};


export  {useActions};