import { UserModel } from './user'

export interface MessageModel {
  id: string
  text: string
  user: UserModel
}
