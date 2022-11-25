import { IUser } from "models";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authApi, dialogApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";


const useCreateDialog = ():[(value: IUser) => void] => {
  const { auth } = useSelector(selectAuth);
  const {data: authData,isLoading: isLoadAuth,refetch} = authApi.useGetUserSinglPageQuery(auth._id)
  const [createDialog, {}] = dialogApi.useCreateDialogMutation();
  const [addDialog, {}] = authApi.useSetAddDialogMutation();
  const navigate = useNavigate()

  const useCreateDialogFn = async (user: IUser) => {
    refetch()
    if ( authData && !isLoadAuth) {
      const findDialogId = authData.dialogs.find(item => user.dialogs.includes(item))
      if (findDialogId) {
        navigate(`/dialog/${findDialogId}`)
      } else {
        await createDialog({ userOne: authData, userTwo: user })
        .unwrap()
        .then(async (data) => {
          try {
            await addDialog({userOneId: authData._id, userTwoId: user._id, dialogId: data._id,})
          } catch (error) {
            return console.log(error);
          }
        })
        .catch((error:string) => console.log(error));
      }
    }
  };

return [useCreateDialogFn]

};

export { useCreateDialog };
