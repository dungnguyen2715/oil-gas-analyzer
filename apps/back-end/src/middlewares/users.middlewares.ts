import { checkSchema, ParamSchema } from 'express-validator'
import HTTP_STATUS from '~/constants/httpStatus'
import { USER_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import databaseService from '~/services/database.services'
import usersServices from '~/services/users.services'
import { hashPassword } from '~/utils/crypto'
import { verifyAccessToken, verifyRefreshToken, verifyToken } from '~/utils/jwt'
import { validate } from '~/utils/validation'
import { config } from 'dotenv'
import { JsonWebTokenError } from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
config()

const nameSchema: ParamSchema = {
  notEmpty: { errorMessage: USER_MESSAGES.NAME_IS_REQUIRED },
  isString: { errorMessage: USER_MESSAGES.NAME_MUST_BE_A_STRING },
  trim: true,
  isLength: {
    options: { min: 1, max: 100 },
    errorMessage: USER_MESSAGES.NAME_LENGTH_MUST_BE_FROM_1_TO_100
  }
}

const passwordSchema: ParamSchema = {
  notEmpty: { errorMessage: USER_MESSAGES.PASSWORD_IS_REQUIRED },
  isLength: {
    options: { min: 6, max: 50 },
    errorMessage: USER_MESSAGES.PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50
  },
  isStrongPassword: {
    options: { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 },
    errorMessage: USER_MESSAGES.PASSWORD_MUST_BE_STRONG
  }
}

export const createUserValidator = validate(
  checkSchema(
    {
      full_name: nameSchema,
      email: {
        notEmpty: { errorMessage: USER_MESSAGES.EMAIL_IS_REQUIRED },
        isEmail: { errorMessage: USER_MESSAGES.EMAIL_IS_INVALID },
        trim: true,
        toLowerCase: true,
        custom: {
          options: async (value) => {
            const isEmailExisted = await usersServices.isEmailExisted(value)
            if (isEmailExisted) {
              return Promise.reject(USER_MESSAGES.EMAIL_ALREADY_EXISTS)
            }
            return true
          }
        }
      },
      password: passwordSchema,
      phone: {
        optional: true,
        isMobilePhone: {
          options: ['vi-VN'],
          errorMessage: USER_MESSAGES.PHONE_NUMBER_IS_INVALID
        }
      }
    },
    ['body']
  )
)
export const loginUserValidator = validate(
  checkSchema(
    {
      email: {
        notEmpty: { errorMessage: USER_MESSAGES.EMAIL_IS_REQUIRED },
        isEmail: { errorMessage: USER_MESSAGES.EMAIL_IS_INVALID },
        trim: true,
        custom: {
          options: async (value, { req }) => {
            const user = await databaseService.users.findOne({
              email: value
            })
            if (user === null) {
              return Promise.reject(USER_MESSAGES.EMAIL_NOT_FOUND)
            }
            req.user = user
            return true
          }
        }
      },
      password: {
        notEmpty: { errorMessage: USER_MESSAGES.PASSWORD_IS_REQUIRED },
        isString: true,
        custom: {
          options: async (value, { req }) => {
            const user = await databaseService.users.findOne({
              password: hashPassword(value)
            })
            if (user === null) {
              return Promise.reject(USER_MESSAGES.PASSWORD_IS_INCORRECT)
            }
            req.user = user
            return true
          }
        }
      }
    },
    ['body']
  )
)
export const accessTokenValidator = validate(
  checkSchema(
    {
      authorization: {
        notEmpty: {
          errorMessage: USER_MESSAGES.ACCESS_TOKEN_IS_REQUIRED
        },
        custom: {
          options: async (value: string, { req }) => {
            const accessToken = value.split(' ')[1]
            if (!accessToken) {
              throw new ErrorWithStatus({
                message: USER_MESSAGES.ACCESS_TOKEN_IS_REQUIRED,
                status: HTTP_STATUS.UNAUTHORIZED
              })
            }
            try {
              const decode_authorization = await verifyAccessToken({ token: accessToken })
              ;(req as any).decode_authorization = decode_authorization
            } catch (error) {
              throw new ErrorWithStatus({
                message: USER_MESSAGES.ACCESS_TOKEN_INVALID,
                status: HTTP_STATUS.UNAUTHORIZED
              })
            }
            return true
          }
        }
      }
    },
    ['headers']
  )
)
export const refreshTokenValidator = validate(
  checkSchema(
    {
      refresh_token: {
        notEmpty: {
          errorMessage: USER_MESSAGES.REFRESH_TOKEN_IS_REQUIRED
        },
        isString: true,
        custom: {
          options: async (value: string, { req }) => {
            try {
              const [decode_refresh_token, refrsh_token] = await Promise.all([
                verifyRefreshToken({ token: value }),
                databaseService.users.findOne({
                  refresh_token: value
                })
              ])
              if (refrsh_token === null) {
                throw new ErrorWithStatus({
                  message: USER_MESSAGES.REFRESH_TOKEN_NOT_FOUND,
                  status: HTTP_STATUS.UNAUTHORIZED
                })
              }
              ;(req as any).decode_refresh_token = decode_refresh_token
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ErrorWithStatus({
                  message: USER_MESSAGES.REFRESH_TOKEN_INVALID,
                  status: HTTP_STATUS.UNAUTHORIZED
                })
              }
              throw error
            }
            return true
          }
        }
      }
    },
    ['body']
  )
)
export const forgotPasswordValidator = validate(
  checkSchema(
    {
      email: {
        notEmpty: { errorMessage: USER_MESSAGES.EMAIL_IS_REQUIRED },
        isEmail: { errorMessage: USER_MESSAGES.EMAIL_IS_INVALID },
        trim: true,
        custom: {
          options: async (value, { req }) => {
            const user = await databaseService.users.findOne({
              email: value
            })
            if (user === null) {
              return Promise.reject(USER_MESSAGES.EMAIL_NOT_FOUND)
            }
            req.user = user
            return true
          }
        }
      }
    },
    ['body']
  )
)
export const verifyForgotPasswordTokenValidator = validate(
  checkSchema(
    {
      forgot_password_token: {
        notEmpty: { errorMessage: USER_MESSAGES.FORGOT_PASSWORD_TOKEN_IS_REQUIRED },
        isString: true,
        custom: {
          options: async (value: string, { req }) => {
            try {
              const decode_authorization = await verifyToken({ token: value })

              ;(req as any).decode_authorization = decode_authorization
              const { email } = decode_authorization
              const user = await databaseService.users.findOne({
                email: email as string
              })
              if (user === null) {
                throw new ErrorWithStatus({
                  message: USER_MESSAGES.USER_NOT_FOUND,
                  status: HTTP_STATUS.UNAUTHORIZED
                })
              }
              if (user.forgot_password_token !== value) {
                throw new ErrorWithStatus({
                  message: USER_MESSAGES.FORGOT_PASSWORD_TOKEN_INVALID,
                  status: HTTP_STATUS.UNAUTHORIZED
                })
              }
            } catch (error) {
              if (error instanceof JsonWebTokenError) {
                throw new ErrorWithStatus({
                  message: error.message,
                  status: HTTP_STATUS.UNAUTHORIZED
                })
              }
              throw error
            }
            return true
          }
        }
      },
      new_password: passwordSchema,
      confirnm_New_password: {
        notEmpty: { errorMessage: USER_MESSAGES.CONFIRM_NEW_PASSWORD_IS_REQUIRED },
        isString: true,
        custom: {
          options: async (value: string, { req }) => {
            if (value !== req.body.new_password) {
              return Promise.reject(USER_MESSAGES.CONFIRM_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD)
            }
            return true
          }
        }
      }
    },
    ['body']
  )
)
