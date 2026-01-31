import { checkSchema, ParamSchema } from 'express-validator'
import { USER_MESSAGES } from '~/constants/messages'
import usersServices from '~/services/users.services'
import { hashPassword } from '~/utils/crypto'
import { validate } from '~/utils/validation'

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

export const getListUserValidator = validate(
  checkSchema(
    {
      page: {
        optional: true,
        isNumeric: { errorMessage: 'Page phải là số' },
        trim: true
      },
      limit: {
        optional: true,
        isNumeric: { errorMessage: 'Limit phải là số' },
        trim: true
      },
      role: {
        optional: true,
        isString: { errorMessage: 'Role phải là chuỗi' },
        trim: true
      },
      status: {
        optional: true,
        isString: { errorMessage: 'Status phải là chuỗi' },
        trim: true
      }
    },
    ['query'] // Validate các tham số trong query string (?page=1&limit=10)
  )
)
export const loginUserValidator = validate(
  checkSchema(
    {
      email: {
        notEmpty: { errorMessage: USER_MESSAGES.EMAIL_IS_REQUIRED },
        isEmail: { errorMessage: USER_MESSAGES.EMAIL_IS_INVALID },
        trim: true,
        toLowerCase: true
      },
      password: {
        notEmpty: { errorMessage: USER_MESSAGES.PASSWORD_IS_REQUIRED },
        isString: true
      }
    },
    ['body']
  )
)

