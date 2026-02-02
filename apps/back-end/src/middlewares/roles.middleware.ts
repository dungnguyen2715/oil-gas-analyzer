import { checkSchema, ParamSchema } from 'express-validator'
import { ROLE_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

const nameSchema: ParamSchema = {
  notEmpty: { errorMessage: ROLE_MESSAGES.NAME_IS_REQUIRED },
  isString: { errorMessage: ROLE_MESSAGES.NAME_MUST_BE_A_STRING },
  trim: true,
  isLength: {
    options: { min: 1, max: 100 },
    errorMessage: ROLE_MESSAGES.NAME_LENGTH_MUST_BE_FROM_1_TO_100
  }
}

const descriptionSchema: ParamSchema = {
  notEmpty: { errorMessage: ROLE_MESSAGES.DESCRIPTION_IS_REQUIRED },
  isString: { errorMessage: ROLE_MESSAGES.DESCRIPTION_MUST_BE_A_STRING },
  trim: true
}

const permissionsSchema: ParamSchema = {
  notEmpty: { errorMessage: ROLE_MESSAGES.PERMISSIONS_IS_REQUIRED },
  isArray: { errorMessage: ROLE_MESSAGES.PERMISSIONS_MUST_BE_AN_ARRAY },
  custom: {
    options: (value) => {
      if (!Array.isArray(value) || value.length === 0) {
        throw new Error(ROLE_MESSAGES.PERMISSIONS_MUST_NOT_BE_EMPTY)
      }
      // Check if all items are strings (ObjectId format can be validated here if needed)
      if (!value.every((item) => typeof item === 'string')) {
        throw new Error(ROLE_MESSAGES.PERMISSIONS_MUST_BE_ARRAY_OF_STRINGS)
      }
      return true
    }
  }
}

export const createRoleValidator = validate(
  checkSchema(
    {
      name: nameSchema,
      description: descriptionSchema,
      permissions: permissionsSchema
    },
    ['body']
  )
)

export const updateRoleValidator = validate(
  checkSchema({
    role: {
      // role trong params
      in: ['params'],
      notEmpty: { errorMessage: ROLE_MESSAGES.NAME_IS_REQUIRED },
      isString: { errorMessage: ROLE_MESSAGES.NAME_MUST_BE_A_STRING },
      trim: true
    },
    name: {
      // Tên mới trong body (nếu muốn đổi tên)
      in: ['body'],
      optional: true,
      isString: { errorMessage: ROLE_MESSAGES.NAME_MUST_BE_A_STRING },
      trim: true,
      isLength: {
        options: { min: 1, max: 100 },
        errorMessage: ROLE_MESSAGES.NAME_LENGTH_MUST_BE_FROM_1_TO_100
      }
    },
    description: {
      in: ['body'],
      optional: true,
      isString: { errorMessage: ROLE_MESSAGES.DESCRIPTION_MUST_BE_A_STRING },
      trim: true
    },
    permissions: {
      in: ['body'],
      optional: true,
      isArray: { errorMessage: ROLE_MESSAGES.PERMISSIONS_MUST_BE_AN_ARRAY },
      custom: {
        options: (value) => {
          if (value !== undefined) {
            if (!Array.isArray(value) || value.length === 0) {
              throw new Error(ROLE_MESSAGES.PERMISSIONS_MUST_NOT_BE_EMPTY)
            }
            if (!value.every((item) => typeof item === 'string')) {
              throw new Error(ROLE_MESSAGES.PERMISSIONS_MUST_BE_ARRAY_OF_STRINGS)
            }
          }
          return true
        }
      }
    }
  })
)

export const getRoleByNameValidator = validate(
  checkSchema(
    {
      name: nameSchema
    },
    ['params']
  )
)

export const deleteRoleValidator = validate(
  checkSchema(
    {
      name: nameSchema
    },
    ['params']
  )
)
