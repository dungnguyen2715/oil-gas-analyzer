import { checkSchema, ParamSchema } from 'express-validator'
import { EQUIPMENT_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'
import { EquipmentType, EquipmentStatus, AssignedLocation } from '~/constants/enum'
import equipmentService from '../services/equipment.service'

const equipmentNameSchema: ParamSchema = {
  notEmpty: { errorMessage: EQUIPMENT_MESSAGES.NAME_IS_REQUIRED },
  isString: { errorMessage: EQUIPMENT_MESSAGES.NAME_MUST_BE_A_STRING },
  trim: true
}

const equipmentTypeSchema: ParamSchema = {
  notEmpty: { errorMessage: EQUIPMENT_MESSAGES.TYPE_IS_REQUIRED },
  isString: { errorMessage: EQUIPMENT_MESSAGES.TYPE_MUST_BE_A_STRING },
  trim: true,
  custom: {
    options: (value) => {
      const validTypes = Object.values(EquipmentType)
      if (!validTypes.includes(value)) {
        throw new Error(EQUIPMENT_MESSAGES.TYPE_MUST_BE_VALID)
      }
      return true
    }
  }
}

const serialNumberSchema: ParamSchema = {
  notEmpty: { errorMessage: EQUIPMENT_MESSAGES.SERIAL_NUMBER_IS_REQUIRED },
  isString: { errorMessage: EQUIPMENT_MESSAGES.SERIAL_NUMBER_MUST_BE_A_STRING },
  trim: true,
  custom: {
    options: async (value) => {
      const isExisted = await equipmentService.isSerialNumberExisted(value)
      if (isExisted) {
        throw new Error(EQUIPMENT_MESSAGES.SERIAL_NUMBER_ALREADY_EXISTS)
      }
      return true
    }
  }
}

const modelSchema: ParamSchema = {
  notEmpty: { errorMessage: EQUIPMENT_MESSAGES.MODEL_IS_REQUIRED },
  isString: { errorMessage: EQUIPMENT_MESSAGES.MODEL_MUST_BE_A_STRING },
  trim: true
}

const manufacturerSchema: ParamSchema = {
  notEmpty: { errorMessage: EQUIPMENT_MESSAGES.MANUFACTURER_IS_REQUIRED },
  isString: { errorMessage: EQUIPMENT_MESSAGES.MANUFACTURER_MUST_BE_A_STRING },
  trim: true
}

const lastMaintenanceDateSchema: ParamSchema = {
  notEmpty: { errorMessage: EQUIPMENT_MESSAGES.LAST_MAINTENANCE_DATE_IS_REQUIRED },
  isISO8601: {
    options: { strict: true },
    errorMessage: EQUIPMENT_MESSAGES.LAST_MAINTENANCE_DATE_MUST_BE_VALID
  }
}

const assignedLocationSchema: ParamSchema = {
  notEmpty: { errorMessage: EQUIPMENT_MESSAGES.ASSIGNED_LOCATION_IS_REQUIRED },
  isString: { errorMessage: EQUIPMENT_MESSAGES.NAME_MUST_BE_A_STRING },
  trim: true,
  custom: {
    options: (value) => {
      const validLocations = Object.values(AssignedLocation)
      if (!validLocations.includes(value)) {
        throw new Error(EQUIPMENT_MESSAGES.ASSIGNED_LOCATION_MUST_BE_VALID)
      }
      return true
    }
  }
}

const statusSchema: ParamSchema = {
  optional: true,
  isString: { errorMessage: EQUIPMENT_MESSAGES.NAME_MUST_BE_A_STRING },
  trim: true,
  custom: {
    options: (value) => {
      const validStatuses = Object.values(EquipmentStatus)
      if (!validStatuses.includes(value)) {
        throw new Error(EQUIPMENT_MESSAGES.STATUS_MUST_BE_VALID)
      }
      return true
    }
  }
}

const descriptionSchema: ParamSchema = {
  optional: true,
  isString: { errorMessage: EQUIPMENT_MESSAGES.DESCRIPTION_MUST_BE_A_STRING },
  trim: true
}

export const createEquipmentValidator = validate(
  checkSchema(
    {
      name: equipmentNameSchema,
      type: equipmentTypeSchema,
      serial_number: serialNumberSchema,
      model: modelSchema,
      manufacturer: manufacturerSchema,
      last_maintenance_date: lastMaintenanceDateSchema,
      assigned_location: assignedLocationSchema,
      status: statusSchema,
      description: descriptionSchema
    },
    ['body']
  )
)

export const updateEquipmentValidator = validate(
  checkSchema(
    {
      id: {
        in: ['params'],
        isMongoId: {
          errorMessage: 'Equipment ID không đúng định dạng MongoDB'
        },
        custom: {
          options: async (value) => {
            const equipment = await equipmentService.getEquipmentById(value)
            if (!equipment) {
              throw new Error(EQUIPMENT_MESSAGES.EQUIPMENT_NOT_FOUND)
            }
            return true
          }
        }
      },
      name: {
        optional: true,
        isString: { errorMessage: EQUIPMENT_MESSAGES.NAME_MUST_BE_A_STRING },
        trim: true
      },
      type: {
        optional: true,
        isString: { errorMessage: EQUIPMENT_MESSAGES.NAME_MUST_BE_A_STRING },
        trim: true
      },
      serial_number: {
        optional: true,
        isString: { errorMessage: EQUIPMENT_MESSAGES.SERIAL_NUMBER_MUST_BE_A_STRING },
        trim: true
      },
      model: {
        optional: true,
        isString: { errorMessage: EQUIPMENT_MESSAGES.MODEL_MUST_BE_A_STRING },
        trim: true
      },
      manufacturer: {
        optional: true,
        isString: { errorMessage: EQUIPMENT_MESSAGES.MANUFACTURER_MUST_BE_A_STRING },
        trim: true
      },
      last_maintenance_date: {
        optional: true,
        isISO8601: {
          options: { strict: true },
          errorMessage: EQUIPMENT_MESSAGES.LAST_MAINTENANCE_DATE_MUST_BE_VALID
        }
      },
      assigned_location: {
        optional: true,
        isString: { errorMessage: EQUIPMENT_MESSAGES.NAME_MUST_BE_A_STRING },
        trim: true
      },
      status: statusSchema,
      description: descriptionSchema
    },
    ['body', 'params']
  )
)

export const deleteEquipmentValidator = validate(
  checkSchema(
    {
      id: {
        in: ['params'],
        isMongoId: {
          errorMessage: 'Equipment ID không đúng định dạng MongoDB'
        },
        custom: {
          options: async (value) => {
            const equipment = await equipmentService.getEquipmentById(value)
            if (!equipment) {
              throw new Error(EQUIPMENT_MESSAGES.EQUIPMENT_NOT_FOUND)
            }
            return true
          }
        }
      }
    },
    ['params']
  )
)

export const getEquipmentDetailValidator = validate(
  checkSchema(
    {
      id: {
        in: ['params'],
        isMongoId: {
          errorMessage: 'Equipment ID không đúng định dạng MongoDB'
        }
      }
    },
    ['params']
  )
)

export const getListEquipmentValidator = validate(
  checkSchema(
    {
      page: {
        optional: true,
        in: ['query'],
        isInt: {
          options: { min: 1 },
          errorMessage: EQUIPMENT_MESSAGES.PAGE_MUST_BE_A_NUMBER
        }
      },
      limit: {
        optional: true,
        in: ['query'],
        isInt: {
          options: { min: 1, max: 100 },
          errorMessage: EQUIPMENT_MESSAGES.LIMIT_MUST_BE_A_NUMBER
        }
      },
      name: {
        optional: true,
        in: ['query'],
        isString: {
          errorMessage: EQUIPMENT_MESSAGES.NAME_MUST_BE_A_STRING_FOR_FILTER
        },
        trim: true
      },
      type: {
        optional: true,
        in: ['query'],
        isString: {
          errorMessage: EQUIPMENT_MESSAGES.TYPE_MUST_BE_A_STRING_FOR_FILTER
        },
        trim: true,
        custom: {
          options: (value) => {
            if (value) {
              const validTypes = Object.values(EquipmentType)
              if (!validTypes.includes(value)) {
                throw new Error(EQUIPMENT_MESSAGES.TYPE_MUST_BE_VALID)
              }
            }
            return true
          }
        }
      },
      status: {
        optional: true,
        in: ['query'],
        isString: {
          errorMessage: EQUIPMENT_MESSAGES.STATUS_MUST_BE_A_STRING_FOR_FILTER
        },
        trim: true,
        custom: {
          options: (value) => {
            if (value) {
              const validStatuses = Object.values(EquipmentStatus)
              if (!validStatuses.includes(value)) {
                throw new Error(EQUIPMENT_MESSAGES.STATUS_MUST_BE_VALID)
              }
            }
            return true
          }
        }
      },
      warehouse_id: {
        optional: true,
        in: ['query'],
        isString: {
          errorMessage: EQUIPMENT_MESSAGES.WAREHOUSE_ID_MUST_BE_A_STRING
        },
        trim: true
      }
    },
    ['query']
  )
)
