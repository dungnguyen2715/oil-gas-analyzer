import { model, Schema } from 'mongoose'

interface IWareHouse {
  name: string
  location: string
  capacity: number
  description?: string
  status?: string
}

const wareHouseSchema = new Schema<IWareHouse>(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    description: { type: String, default: '' },
    status: { type: String, default: 'active' }
  },
  {
    timestamps: true
  }
)

export const WareHouseModel = model<IWareHouse>('WareHouse', wareHouseSchema)
