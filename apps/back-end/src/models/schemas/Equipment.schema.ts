import { model, Schema } from 'mongoose'

interface IEquipment {
  name: string
  type: string // Pump, Valve, Compressor, Sensor
  serial_number: string
  model: string
  manufacturer: string
  last_maintenance_date: Date
  assigned_location: string // Well, Pipeline, Warehouse, Platform
  status: string // Active, Inactive, Under Maintenance
  description?: string
}

const equipmentSchema = new Schema<IEquipment>(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    serial_number: { type: String, required: true, unique: true },
    model: { type: String, required: true },
    manufacturer: { type: String, required: true },
    last_maintenance_date: { type: Date, required: true },
    assigned_location: { type: String, required: true },
    status: { type: String, required: true, default: 'Active' },
    description: { type: String, default: '' }
  },
  {
    timestamps: true
  }
)

export const EquipmentModel = model<IEquipment>('Equipment', equipmentSchema)
