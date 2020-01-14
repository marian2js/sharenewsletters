import dotenv from 'dotenv'
import { Commun } from '@commun/core'
import { PostModel } from './entities/posts'
import { DefaultUserConfig, UserModule } from '@commun/users'
import { CommentModel } from './entities/comments'
import { PostVotesModel } from './entities/postVotes'
import { CommentVotesModel } from './entities/commentVotes'
import { EmailModule } from '@commun/emails'
import aws from 'aws-sdk'
import nodemailer from 'nodemailer'

import emailVerificationTemplate from './email-templates/emailVerification.json'
import resetPasswordTemplate from './email-templates/resetPassword.json'
import welcomeEmailTemplate from './email-templates/welcomeEmail.json'

dotenv.config({ path: '.env' })

;(async () => {
  const OwnUserConfig = require('./entities/users/config.json')
  const UserConfig = {
    ...DefaultUserConfig,
    ...OwnUserConfig,
    attributes: {
      ...DefaultUserConfig.attributes,
      ...OwnUserConfig.attributes
    }
  }

  UserModule.setup({ config: UserConfig }, {
    accessToken: {
      secretOrPrivateKey: process.env.SECRET!,
    }
  })
  EmailModule.setup({
    sendFrom: 'admin@sharenewsletters.com',
    transporter: nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01'
      })
    }),
    templates: {
      emailVerification: emailVerificationTemplate,
      resetPassword: resetPasswordTemplate,
      welcomeEmail: welcomeEmailTemplate,
    },
  })
  Commun.registerEntity<PostModel>({ config: require('./entities/posts/config.json') })
  Commun.registerEntity<CommentModel>({ config: require('./entities/comments/config.json') })
  Commun.registerEntity<PostVotesModel>({ config: require('./entities/postVotes/config.json') })
  Commun.registerEntity<CommentVotesModel>({ config: require('./entities/commentVotes/config.json') })

  Commun.startServer(require(`./config/${process.env.NODE_ENV}.json`))
    .then(app => {})
    .catch(e => console.error('ERROR:', e))
})()
