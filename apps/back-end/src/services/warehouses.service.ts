import { ObjectId } from 'mongodb'
import { WareHouseStatus } from '~/constants/enum'
import {
  CreateWareHouseReqBody,
  GetListWareHouseReqParams,
  UpdateWareHouseReqBody
} from '~/models/requests/Warehouses.requests'
import { WareHouseModel } from '~/models/schemas/Warehouse.schema'

class WarehouseService {
  async isWarehouseExisted(name: string): Promise<boolean> {
    const warehouse = await WareHouseModel.findOne({ name }).lean()
    return Boolean(warehouse)
  }

  async createWarehouse(payload: CreateWareHouseReqBody) {
    const { name, location, capacity, description } = payload
    const isExist = await this.isWarehouseExisted(name)
    if (isExist) {
      throw new Error('Warehouse name already exists')
    }

    const newWarehouse = await WareHouseModel.create({
      _id: new ObjectId(),
      name,
      location,
      capacity,
      description
    })

    return {
      id: newWarehouse._id,
      name: newWarehouse.name,
      location: newWarehouse.location,
      capacity: newWarehouse.capacity,
      description: newWarehouse.description
    }
  }

  async getWarehouseById(id: string) {
    const warehouse = await WareHouseModel.findById(id).lean()
    return warehouse
  }

  async getListWarehouses(query: GetListWareHouseReqParams) {
    const page = query.page ?? 1
    const limit = query.limit ?? 10
    const skip = (page - 1) * limit

    const filter: any = {}

    if (query.status !== undefined) filter.status = query.status

    const [warehouses, total] = await Promise.all([
      WareHouseModel.find(filter)
        .select('name location capacity description status _id')
        .sort({ name: 1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      WareHouseModel.countDocuments(filter)
    ])

    return {
      warehouses,
      total,
      page,
      limit,
      total_pages: Math.ceil(total / limit)
    }
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
    const item = await WareHouseModel.findById(id)
    if (!item) {
      throw new Error('Warehouse not found')
    }

    item.status = WareHouseStatus.Inactive
    await item.save()
  }
}

const warehouseService = new WarehouseService()
export default warehouseService
