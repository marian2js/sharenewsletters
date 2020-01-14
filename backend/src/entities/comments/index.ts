import { EntityModel } from '@commun/core'
import { UserModel } from '../users'
import { PostModel } from '../posts'

export interface CommentModel extends EntityModel {
  user: {
    [P in keyof UserModel]?: any
  }
  post: {
    [P in keyof PostModel]?: any
  }
  body: string
}
