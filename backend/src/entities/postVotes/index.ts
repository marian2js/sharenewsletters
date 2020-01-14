import { EntityModel } from '@commun/core'
import { UserModel } from '../users'

export interface PostVotesModel extends EntityModel {
  user: {
    [P in keyof UserModel]?: any
  }
  post: {
    [P in keyof UserModel]?: any
  }
  value: 1 | -1
}
