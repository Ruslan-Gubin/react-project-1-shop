import { IComments, IUser } from "models";
import { helperLikesFunction } from "utils";

const useAddLikes = (
  handlerCancelInfo: () => void,
  likeApi: (value: IComments) => any,
  dislikeApi: (value: IComments) => any,
  auth: IUser
) => {
  const handlerAddLike = async (item: IComments) => {
    handlerCancelInfo();
    const userId: string = auth._id ? auth._id : "";
    const dislikeArr = item.dislikes;

    helperLikesFunction(dislikeArr, userId, dislikeApi, item);

    await likeApi(item)
      .unwrap()
      .catch((error: string) => console.log(error));
  };

  const handlerAddDislike = async (item: IComments) => {
    handlerCancelInfo();
    const userId: string = auth._id ? auth._id : "";
    const likesArr = item.likes;

    helperLikesFunction(likesArr, userId, likeApi, item);

    await dislikeApi(item)
      .unwrap()
      .catch((error: string) => console.log(error));
  };

  return { handlerAddLike, handlerAddDislike };
};

export { useAddLikes };
