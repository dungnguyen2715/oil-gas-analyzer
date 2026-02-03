import { model, Schema } from 'mongoose'
import { WareHouseStatus } from '~/constants/enum'

interface IWareHouse {
  name: string
  location: string
  capacity: number
  description?: string
  status?: WareHouseStatus
}

const wareHouseSchema = new Schema<IWareHouse>(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    description: { type: String, default: '' },
    status: { type: Number, default: WareHouseStatus.Active }
  },
  {
    timestamps: true
  }
)

export const WareHouseModel = model<IWareHouse>('WareHouse', wareHouseSchema)
