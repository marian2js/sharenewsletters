import { EntityModel } from '@commun/core'
import { UserModel } from '../users'

export interface PostModel extends EntityModel {
  user: {
    [P in keyof UserModel]?: any
  }
  title: string
  url: string
  description: string
  numberOfComments: number
}
