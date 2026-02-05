import { checkSchema, ParamSchema } from 'express-validator'
import { INSTRUMENT_MESSAGES } from '~/constants/messages'
import { validate } from '~/utils/validation'

//Dùng isMongoId để checkID chuẩn xác nhất
//chặn ngay những ID không chuẩn trước khi nó chạm vào Database.
const instrumentIdSchema: ParamSchema = {
  trim: true,
  isMongoId: {
    errorMessage: INSTRUMENT_MESSAGES.INSTRUMENT_ID_IS_INVALID
  }
}

const nameSchema: ParamSchema = {
  notEmpty: { errorMessage: INSTRUMENT_MESSAGES.NAME_IS_REQUIRED },
  isString: { errorMessage: INSTRUMENT_MESSAGES.NAME_MUST_BE_A_STRING },
  trim: true,
  isLength: {
    options: { min: 1, max: 200 },
    errorMessage: INSTRUMENT_MESSAGES.NAME_LENGTH_MUST_BE_FROM_1_TO_200
  }
}

const codeSchema: ParamSchema = {
  notEmpty: { errorMessage: INSTRUMENT_MESSAGES.CODE_IS_REQUIRED },
  isString: { errorMessage: INSTRUMENT_MESSAGES.CODE_MUST_BE_A_STRING },
  trim: true,
  isLength: {
    options: { min: 1, max: 50 },
    errorMessage: INSTRUMENT_MESSAGES.CODE_LENGTH_MUST_BE_FROM_1_TO_50
  }
}

const typeSchema: ParamSchema = {
  notEmpty: { errorMessage: INSTRUMENT_MESSAGES.TYPE_IS_REQUIRED },
  isString: { errorMessage: INSTRUMENT_MESSAGES.TYPE_MUST_BE_A_STRING },
  trim: true
}

const manufacturerSchema: ParamSchema = {
  notEmpty: { errorMessage: INSTRUMENT_MESSAGES.MANUFACTURER_IS_REQUIRED },
  isString: { errorMessage: INSTRUMENT_MESSAGES.MANUFACTURER_MUST_BE_A_STRING },
  trim: true
}

const modelSchema: ParamSchema = {
  notEmpty: { errorMessage: INSTRUMENT_MESSAGES.MODEL_IS_REQUIRED },
  isString: { errorMessage: INSTRUMENT_MESSAGES.MODEL_MUST_BE_A_STRING },
  trim: true
}

const installationDateSchema: ParamSchema = {
  optional: true,
  isISO8601: {
    errorMessage: INSTRUMENT_MESSAGES.INSTALLATION_DATE_MUST_BE_ISO8601
  }
}

const statusSchema: ParamSchema = {
  optional: true,
  isString: { errorMessage: INSTRUMENT_MESSAGES.STATUS_MUST_BE_A_STRING },
  trim: true
}

const isActiveSchema: ParamSchema = {
  optional: true,
  isBoolean: { errorMessage: INSTRUMENT_MESSAGES.IS_ACTIVE_MUST_BE_BOOLEAN }
}

export const createInstrumentValidator = validate(
  checkSchema(
    {
      name: nameSchema,
      code: codeSchema,
      type: typeSchema,
      manufacturer: manufacturerSchema,
      model: modelSchema,
      equipment_id: {
        optional: true,
        isMongoId: {
          errorMessage: INSTRUMENT_MESSAGES.INVALID_EQUIPMENT_ID
        },
        trim: true
      },
      location: {
        optional: true,
        isString: true,
        trim: true
      },
      installation_date: installationDateSchema,
      status: statusSchema,
      description: {
        optional: true,
        isString: true,
        trim: true
      },
      is_active: isActiveSchema
    },
    ['body']
  )
)

export const updateInstrumentValidator = validate(
  checkSchema(
    {
      id: {
        ...instrumentIdSchema,
        in: ['params'] // Chỉ định rõ ID nằm ở params
      },
      name: {
        ...nameSchema, // Lấy toàn bộ rules của nameSchema
        optional: true, // Ghi đè thêm thuộc tính optional
        notEmpty: undefined // Update thì không bắt buộc phải có, nhưng nếu có thì không được rỗng
      },
      code: {
        ...codeSchema,
        optional: true,
        notEmpty: undefined
      },
      type: {
        ...typeSchema,
        optional: true,
        notEmpty: undefined
      },
      manufacturer: {
        ...manufacturerSchema,
        optional: true,
        notEmpty: undefined
      },
      model: {
        ...modelSchema,
        optional: true,
        notEmpty: undefined
      },
      equipment_id: {
        optional: true,
        isMongoId: { errorMessage: INSTRUMENT_MESSAGES.INVALID_EQUIPMENT_ID },
        trim: true
      },
      location: {
        optional: true,
        isString: true,
        trim: true
      },
      installation_date: installationDateSchema,
      status: statusSchema,
      description: {
        optional: true,
        isString: true,
        trim: true
      },
      is_active: isActiveSchema
    },
    ['params', 'body']
  )
)

export const getInstrumentByIdValidator = validate(
  checkSchema(
    {
      id: instrumentIdSchema
    },
    ['params']
  )
)

export const deleteInstrumentValidator = validate(
  checkSchema(
    {
      id: instrumentIdSchema
    },
    ['params']
  )
)
