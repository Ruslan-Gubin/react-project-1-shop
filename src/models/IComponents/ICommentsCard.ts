import { IUser } from "models/user"

interface ICommentCard {
  updateComment: () => void
  handlerRemoveComment: () => void
  auth: IUser
}

export type {ICommentCard}