import { CreateWareHouseReqBody, UpdateWareHouseReqBody } from '~/models/requests/WareHouse.request'
import { WareHouseModel } from '~/models/schemas/WareHouse.schema'
import { ObjectId } from 'mongodb'

class WarehouseService {
  async isWarehouseExisted(name: string): Promise<boolean> {
    const warehouse = await WareHouseModel.findOne({ name }).lean()
    return Boolean(warehouse)
  }

  async createWarehouse(payload: CreateWareHouseReqBody) {
    const { name, location, capacity, description, status } = payload
    const isExist = await this.isWarehouseExisted(name)
    if (isExist) {
      throw new Error('Warehouse name already exists')
    }

    const newWarehouse = await WareHouseModel.create({
      _id: new ObjectId(),
      name,
      location,
      capacity,
      description,
      status
    })

    return {
      id: newWarehouse._id,
      name: newWarehouse.name,
      location: newWarehouse.location,
      capacity: newWarehouse.capacity,
      description: newWarehouse.description,
      status: newWarehouse.status
    }
  }

  async getWarehouseById(id: string) {
    const warehouse = await WareHouseModel.findById(id).lean()
    return warehouse
  }

  async getAllWarehouses() {
    const warehouses = await WareHouseModel.find().lean()
    return warehouses
  }

  async updateWarehouse(id: string, payload: UpdateWareHouseReqBody) {
    const existedWarehouse = await WareHouseModel.findById(id)
    if (!existedWarehouse) {
      throw new Error('Warehouse not found')
    }

    if (payload.name) {
      const isNameExist = await WareHouseModel.exists({
        name: payload.name,
        _id: { $ne: new ObjectId(id) }
      })
      if (isNameExist) {
        throw new Error('Warehouse name already exists')
      }
    }

    const updateWarehouse = await WareHouseModel.findByIdAndUpdate(id, { $set: payload }, { new: true })
    return {
      id: updateWarehouse!._id,
      name: updateWarehouse!.name,
      location: updateWarehouse!.location,
      capacity: updateWarehouse!.capacity,
      description: updateWarehouse!.description,
      status: updateWarehouse!.status
    }
  }

  async deleteWarehouse(id: string) {
    const result = await WareHouseModel.findByIdAndDelete(id)
    return result
  }
}

const warehouseService = new WarehouseService()
export default warehouseService
