import { BaseUserModel } from '@commun/users'

export interface UserModel extends BaseUserModel {
  fullName?: string
  website?: string
  numberOfPosts: number
  numberOfComments: number
}
