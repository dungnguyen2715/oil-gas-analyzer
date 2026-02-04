import { model, Schema } from 'mongoose'

interface IInstrument {
  name: string
  code: string
  type: string
  equipment_id?: string
  location?: string
  manufacturer: string
  model: string
  installation_date?: Date
  status: string
  description?: string
  is_active: boolean
  created_by?: string
}

const instrumentSchema = new Schema<IInstrument>(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    equipment_id: { type: String },
    location: { type: String },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    installation_date: { type: Date },
    status: { type: String, default: 'active' },
    description: { type: String },
    is_active: { type: Boolean, default: true },
    created_by: { type: String }
  },
  {
    timestamps: true
  }
)

export const InstrumentModel = model<IInstrument>('Instrument', instrumentSchema)
