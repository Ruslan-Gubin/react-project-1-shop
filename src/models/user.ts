
interface IUser {
  fullName: string
  email: string
  avatarUrl: string
  passwordHash?: string
  _id?: string
}

export type {IUser}