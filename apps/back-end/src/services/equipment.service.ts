import { CreateEquipmentReqBody } from '~/models/requests/Equipment.request'
import { EquipmentModel } from '~/models/schemas/Equipment.schema'
import { ObjectId } from 'mongodb'

class EquipmentService {
  async isSerialNumberExisted(serial_number: string): Promise<boolean> {
    const equipment = await EquipmentModel.findOne({ serial_number }).lean()
    return Boolean(equipment)
  }

  async isEquipmentNameExisted(name: string): Promise<boolean> {
    const equipment = await EquipmentModel.findOne({ name }).lean()
    return Boolean(equipment)
  }

  async createEquipment(payload: CreateEquipmentReqBody) {
    const {
      name,
      type,
      serial_number,
      model,
      manufacturer,
      installation_date,
      assigned_location,
      status,
      description
    } = payload

    const isSerialExist = await this.isSerialNumberExisted(serial_number)
    if (isSerialExist) {
      throw new Error('Serial number already exists')
    }

    const newEquipment = await EquipmentModel.create({
      _id: new ObjectId(),
      name,
      type,
      serial_number,
      model,
      manufacturer,
      installation_date,
      assigned_location,
      status: status || 'Active',
      description
    })

    return {
      id: newEquipment._id,
      name: newEquipment.name,
      type: newEquipment.type,
      serial_number: newEquipment.serial_number,
      model: newEquipment.model,
      manufacturer: newEquipment.manufacturer,
      installation_date: newEquipment.installation_date,
      assigned_location: newEquipment.assigned_location,
      status: newEquipment.status,
      description: newEquipment.description
    }
  }

  async getEquipmentById(id: string) {
    const equipment = await EquipmentModel.findById(id).lean()
    return equipment
  }

  async getAllEquipments() {
    const equipments = await EquipmentModel.find().lean()
    return equipments
  }

  async updateEquipment(id: string, payload: any) {
    const existedEquipment = await EquipmentModel.findById(id)
    if (!existedEquipment) {
      throw new Error('Equipment not found')
    }

    // Check if serial_number is being updated and if it already exists
    if (payload.serial_number && payload.serial_number !== existedEquipment.serial_number) {
      const isSerialExist = await EquipmentModel.exists({
        serial_number: payload.serial_number,
        _id: { $ne: new ObjectId(id) }
      })
      if (isSerialExist) {
        throw new Error('Serial number already exists')
      }
    }

    const updatedEquipment = await EquipmentModel.findByIdAndUpdate(id, { $set: payload }, { new: true })
    return {
      id: updatedEquipment!._id,
      name: updatedEquipment!.name,
      type: updatedEquipment!.type,
      serial_number: updatedEquipment!.serial_number,
      model: updatedEquipment!.model,
      manufacturer: updatedEquipment!.manufacturer,
      installation_date: updatedEquipment!.installation_date,
      assigned_location: updatedEquipment!.assigned_location,
      status: updatedEquipment!.status,
      description: updatedEquipment!.description
    }
  }

  async deleteEquipment(id: string) {
    const equipment = await EquipmentModel.findById(id)
    if (!equipment) {
      throw new Error('Thiết bị không tồn tại.')
    }

    // Check if equipment is Active (status = 0) - cannot delete active equipment
    if (equipment.status === 'Active') {
      throw new Error('Thiết bị đang hoạt động không thể xóa.')
    }

    const result = await EquipmentModel.findByIdAndDelete(id)
    return result
  }
}

const equipmentService = new EquipmentService()
export default equipmentService
