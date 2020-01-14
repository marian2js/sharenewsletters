import { EntityModel } from '@commun/core'
import { UserModel } from '../users'
import { CommentModel } from '../comments'

export interface CommentVotesModel extends EntityModel {
  user: {
    [P in keyof UserModel]?: any
  }
  comment: {
    [P in keyof CommentModel]?: any
  }
  value: 1 | -1
}
