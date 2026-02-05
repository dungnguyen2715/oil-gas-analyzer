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
      last_maintenance_date,
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
      last_maintenance_date,
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
      last_maintenance_date: newEquipment.last_maintenance_date,
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
    //update equipment
    const updatedEquipment = await EquipmentModel.findByIdAndUpdate(id, { $set: payload }, { new: true })
    return {
      id: updatedEquipment!._id,
      name: updatedEquipment!.name,
      type: updatedEquipment!.type,
      serial_number: updatedEquipment!.serial_number,
      model: updatedEquipment!.model,
      manufacturer: updatedEquipment!.manufacturer,
      last_maintenance_date: updatedEquipment!.last_maintenance_date,
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

  async getListEquipment(query: {
    page?: string
    limit?: string
    name?: string
    type?: string
    status?: string
    warehouse_id?: string
  }) {
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 10
    const skip = (page - 1) * limit

    // Build filter object
    const filter: any = {}
    if (query.name) {
      filter.name = { $regex: query.name, $options: 'i' } // Case-insensitive search
    }
    if (query.type) {
      filter.type = query.type
    }
    if (query.status) {
      filter.status = query.status
    }
    if (query.warehouse_id) {
      filter.assigned_location = query.warehouse_id
    }

    // Execute queries in parallel
    const [equipments, total] = await Promise.all([
      EquipmentModel.find(filter)
        .select('_id name type status assigned_location serial_number updatedAt')
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      EquipmentModel.countDocuments(filter)
    ])

    const total_pages = Math.ceil(total / limit)

    return {
      equipments: equipments.map((equipment) => ({
        id: equipment._id,
        name: equipment.name,
        type: equipment.type,
        status: equipment.status,
        location: equipment.assigned_location,
        serial_number: equipment.serial_number,
        last_maintenance_date: equipment.last_maintenance_date
      })),
      total,
      page,
      limit,
      total_pages
    }
  }
}

const equipmentService = new EquipmentService()
export default equipmentService
