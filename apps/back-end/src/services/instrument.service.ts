import { ObjectId } from 'mongodb'
import {
  CreateInstrumentReqBody,
  UpdateInstrumentReqBody,
  GetListInstrumentReqQuery
} from '~/models/requests/Instrument.request'
import { InstrumentModel } from '~/models/schemas/Instrument.schema'
import { INSTRUMENT_MESSAGES } from '~/constants/messages'
import { Types } from 'mongoose'
import { InstrumentAssignmentModel } from '~/models/schemas/InstrumentAssignment.schema'
import { UserModel } from '~/models/schemas/User.schema'

class InstrumentService {
  async isCodeExisted(code: string, excludeId?: string): Promise<boolean> {
    const query: any = { code }
    if (excludeId) {
      query._id = { $ne: new ObjectId(excludeId) }
    }

    const instrument = await InstrumentModel.findOne(query).lean()
    return Boolean(instrument)
  }

  async createInstrument(payLoad: CreateInstrumentReqBody) {
    const isExist = await this.isCodeExisted(payLoad.code)
    if (isExist) {
      throw new Error(INSTRUMENT_MESSAGES.CODE_ALREADY_EXISTS)
    }

    //Mongoose đã tự tạo mới _id, created_at, updated_at
    const newInstrument = await InstrumentModel.create({
      ...payLoad,
      is_active: payLoad.is_active ?? true,
      status: payLoad.status || 'active'
    })

    return newInstrument.toObject()
  }

  async getInstrumentById(id: string) {
    //1.Kiểm tra định dạng trước khi gọi database
    if (!Types.ObjectId.isValid(id)) {
      throw new Error(INSTRUMENT_MESSAGES.INVALID_ID)
    }

    //2. Tìm kiếm với lệnh lean()
    const instrument = await InstrumentModel.findById(id).lean()

    //3.Kiểm tra tồn tại
    if (!instrument) {
      throw new Error(INSTRUMENT_MESSAGES.INSTRUMENT_NOT_FOUND)
    }

    //4.Trả về kết quả
    const { _id, ...rest } = instrument

    return {
      id: _id,
      ...rest //Tự động lấy tất cả các trường còn lại
    }
  }

  async getListInstruments(query: GetListInstrumentReqQuery) {
    //1. Chuyển đổi kiểu số rõ ràng
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    const skip = (page - 1) * limit

    const { status, type, manufacturer, equipment_id, is_active, search } = query

    const filter: any = {}

    //Các filter đơn giản
    if (status) filter.status = status

    if (type) filter.type = type

    if (manufacturer) filter.manufacturer = manufacturer

    if (equipment_id) filter.equipment_id = equipment_id

    if (is_active !== undefined) {
      filter.is_active = String(is_active) === 'true'
    }

    if (search) {
      const searchRegex = new RegExp(escapeRegex(search), 'i') // Escape ký tự lạ
      filter.$or = [{ name: searchRegex }, { code: searchRegex }, { model: searchRegex }, { manufacturer: searchRegex }]
    }

    const [instruments, total] = await Promise.all([
      InstrumentModel.find(filter)
        .sort({ createdAt: -1 }) // Mới nhất lên đầu
        .skip(skip)
        .limit(limit)
        .lean(), // Trả về JSON thuần
      InstrumentModel.countDocuments(filter)
    ])

    const total_pages = Math.ceil(total / limit)

    return {
      instruments: instruments.map((inst) => {
        const { _id, ...rest } = inst
        return { id: _id, ...rest } // Đổi _id -> id tự động cho tất cả field
      }),
      pagination: {
        total,
        page,
        limit,
        total_pages
      }
    }
  }

  async updateInstrument(id: string, payload: UpdateInstrumentReqBody) {
    //Validate ID đầu tiên
    if (!Types.ObjectId.isValid(id)) {
      throw new Error(INSTRUMENT_MESSAGES.INVALID_ID)
    }

    if (payload.code) {
      const isCodeExist = await this.isCodeExisted(payload.code, id)
      if (isCodeExist) {
        throw new Error(INSTRUMENT_MESSAGES.CODE_ALREADY_EXISTS)
      }
    }

    const updatedInstrument = await InstrumentModel.findByIdAndUpdate(
      id,
      { $set: payload },
      { new: true, runValidators: true } //true để đảm bảo rules trong Schema được check
    ).lean()

    if (!updatedInstrument) {
      throw new Error(INSTRUMENT_MESSAGES.INSTRUMENT_NOT_FOUND)
    }

    const { _id, ...rest } = updatedInstrument
    return {
      id: _id,
      ...rest
    }
  }

  async deleteInstrument(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error(INSTRUMENT_MESSAGES.INVALID_ID)
    }

    const result = await InstrumentModel.findByIdAndDelete(id)

    if (!result) {
      throw new Error(INSTRUMENT_MESSAGES.INSTRUMENT_NOT_FOUND)
    }

    return result
  }

  async assignEngineer(payload: {
    instrument_id: string
    engineer_id: string
    assignment_role: string
    assigner_id: string
  }) {
    const { instrument_id, engineer_id, assignment_role, assigner_id } = payload

    const [instrument, engineer] = await Promise.all([
      InstrumentModel.findById(instrument_id),
      UserModel.findById(engineer_id)
    ])

    if (!instrument) {
      throw new Error('Instrument ID does not exist') //
    }
    if (!engineer) {
      throw new Error('Engineer ID does not exist') //
    }

    const isAlreadyAssigned = await InstrumentAssignmentModel.findOne({
      instrument_id: new ObjectId(instrument_id),
      engineer_id: new ObjectId(instrument_id)
    } as any)

    if (isAlreadyAssigned) {
      throw new Error('Engineer already assigned to this instrument') //
    }

    // 3. Thực hiện phân công và lưu Log
    const newAssignment = new InstrumentAssignmentModel({
      instrument_id: new ObjectId(instrument_id),
      engineer_id: new ObjectId(engineer_id),
      assignment_role,
      assigned_by: new ObjectId(assigner_id)
    })

    await newAssignment.save()

    return {
      message: 'Engineer assigned to instrument successfully', //
      assignment_id: newAssignment._id
    }
  }
}

// Hàm phụ trợ để xử lý ký tự đặc biệt trong Regex (Tránh crash server)
function escapeRegex(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const instrumentService = new InstrumentService()
export default instrumentService
