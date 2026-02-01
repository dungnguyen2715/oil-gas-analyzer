import { checkSchema, ParamSchema } from 'express-validator'
import { USER_MESSAGES } from '~/constants/messages'
import usersServices from '~/services/users.services'
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
        isNumeric: { errorMessage: USER_MESSAGES.PAGE_MUST_BE_A_NUMBER },
        trim: true
      },
      limit: {
        optional: true,
        isNumeric: { errorMessage: USER_MESSAGES.LIMIT_MUST_BE_A_NUMBER },
        trim: true
      },
      role: {
        optional: true,
        isString: { errorMessage: USER_MESSAGES.ROLE_MUST_BE_A_STRING },
        trim: true
      },
      status: {
        optional: true,
        isString: { errorMessage: USER_MESSAGES.STATUS_MUST_BE_A_STRING },
        trim: true
      }
    },
    ['query']
  )
)
export const updateUserValidator = validate(
  checkSchema(
    {
      id: {
        in: ['params'],
        isMongoId: {
          errorMessage: 'ID người dùng không đúng định dạng MongoDB (phải đủ 24 ký tự)'
        },
        custom: {
          options: async (value) => {
            const user = await usersServices.findUserById(value)
            if (!user) {
              throw new Error(USER_MESSAGES.USER_NOT_FOUND)
            }
            return true
          }
        }
      },
      email: {
        optional: true,
        isEmail: { errorMessage: USER_MESSAGES.EMAIL_IS_INVALID },
        trim: true
      },
      phone: {
        optional: true,
        isMobilePhone: {
          options: ['vi-VN'],
          errorMessage: USER_MESSAGES.PHONE_NUMBER_IS_INVALID
        }
      },
      date_of_birth: {
        optional: true,
        isISO8601: { errorMessage: USER_MESSAGES.DATE_OF_BIRTH_BE_ISO8601 }
      },
      password: {
        optional: true,
        isLength: { options: { min: 6 } }
      }
    },
    ['body', 'params']
  )
)

export const deleteUserValidator = validate(
  checkSchema(
    {
      id: {
        in: ['params'],
        isMongoId: {
          errorMessage: 'ID người dùng không đúng định dạng MongoDB (phải đủ 24 ký tự)'
        },
        custom: {
          options: async (value) => {
            const user = await usersServices.findUserById(value)
            if (!user) {
              throw new Error(USER_MESSAGES.USER_NOT_FOUND)
            }
            return true
          }
        }
      }
    },
    ['params']
  )
)

export const getMeValidator = validate(
  checkSchema(
    {
      authorization: {
        in: ['headers'],
        notEmpty: { errorMessage: USER_MESSAGES.AUTHORIZATION_HEADER_IS_REQUIRED },
        isString: { errorMessage: USER_MESSAGES.AUTHORIZATION_HEADER_MUST_BE_A_STRING },
        trim: true
      }
    },
    ['headers']
  )
)

export const changePasswordValidator = validate(
  checkSchema(
    {
      old_password: {
        notEmpty: { errorMessage: USER_MESSAGES.OLD_PASSWORD_IS_REQUIRED },
        isString: { errorMessage: USER_MESSAGES.OLD_PASSWORD_MUST_BE_A_STRING }
      },
      new_password: passwordSchema
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
