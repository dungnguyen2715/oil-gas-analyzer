import { checkSchema } from 'express-validator'
import { WAREHOUSE_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

const nameSchema = {
  notEmpty: { errorMessage: WAREHOUSE_MESSAGES.NAME_IS_REQUIRED },
  isString: { errorMessage: WAREHOUSE_MESSAGES.NAME_MUST_BE_A_STRING },
  trim: true,
  isLength: {
    options: { min: 1, max: 100 },
    errorMessage: WAREHOUSE_MESSAGES.NAME_LENGTH_MUST_BE_FROM_1_TO_100
  }
}

const locationSchema = {
  notEmpty: { errorMessage: WAREHOUSE_MESSAGES.LOCATION_IS_REQUIRED },
  isString: { errorMessage: WAREHOUSE_MESSAGES.LOCATION_MUST_BE_A_STRING },
  trim: true
}

const capacitySchema = {
  notEmpty: { errorMessage: WAREHOUSE_MESSAGES.CAPACITY_IS_REQUIRED },
  isInt: { options: { min: 0 }, errorMessage: WAREHOUSE_MESSAGES.CAPACITY_MUST_BE_A_NUMBER }
}

export const createWarehouseValidator = validate(
  checkSchema(
    {
      name: nameSchema,
      location: locationSchema,
      capacity: capacitySchema
    },
    ['body']
  )
)
export const updateWarehouseValidator = validate(
  checkSchema(
    {
      name: {
        optional: true,
        ...nameSchema
      },
      location: {
        optional: true,
        ...locationSchema
      },
      capacity: {
        optional: true,
        ...capacitySchema
      }
    },
    ['body']
  )
)

export const getListWarehouseValidator = validate(
  checkSchema(
    {
      page: {
        optional: true,
        isInt: {
          options: { min: 1 },
          errorMessage: WAREHOUSE_MESSAGES.PAGE_MUST_BE_A_NUMBER
        },
        toInt: true
      },
      limit: {
        optional: true,
        isInt: {
          options: { min: 1 },
          errorMessage: WAREHOUSE_MESSAGES.LIMIT_MUST_BE_A_NUMBER
        },
        toInt: true
      },
      status: {
        optional: true,
        isInt: {
          options: { min: 0, max: 1 },
          errorMessage: WAREHOUSE_MESSAGES.STATUS_MUST_BE_A_STRING
        },
        toInt: true
      }
    },
    ['query']
  )
)

export const deleteWarehouseValidator = validate(
  checkSchema(
    {
      id: {
        notEmpty: { errorMessage: WAREHOUSE_MESSAGES.ID_IS_REQUIRED },
        isString: { errorMessage: WAREHOUSE_MESSAGES.ID_MUST_BE_VALID_MONGODB_OBJECT_ID },
        trim: true,
        isLength: {
          options: { min: 24, max: 24 },
          errorMessage: WAREHOUSE_MESSAGES.ID_MUST_BE_VALID_MONGODB_OBJECT_ID
        }
      }
    },
    ['params']
  )
)

export const getWarehouseValidator = validate(
  checkSchema(
    {
      id: {
        notEmpty: { errorMessage: WAREHOUSE_MESSAGES.ID_IS_REQUIRED },
        isString: { errorMessage: WAREHOUSE_MESSAGES.ID_MUST_BE_VALID_MONGODB_OBJECT_ID },
        trim: true,
        isLength: {
          options: { min: 24, max: 24 },
          errorMessage: WAREHOUSE_MESSAGES.ID_MUST_BE_VALID_MONGODB_OBJECT_ID
        }
      }
    },
    ['params']
  )
)
