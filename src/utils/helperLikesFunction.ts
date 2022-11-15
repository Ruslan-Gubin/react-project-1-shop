import { IComments } from "models";

const helperLikesFunction = async (
  arr: string[],
  userId: string,
  fn: (item: IComments) => void,
  item: IComments
) => {
  if (arr.includes(userId)) {
    await fn(item);
  }
};

export { helperLikesFunction };
