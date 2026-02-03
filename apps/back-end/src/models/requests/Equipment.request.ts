export interface CreateEquipmentReqBody {
  name: string
  type: string
  serial_number: string
  model: string
  manufacturer: string
  installation_date: Date
  assigned_location: string
  status?: string
  description?: string
}

export interface UpdateEquipmentReqBody {
  name?: string
  type?: string
  serial_number?: string
  model?: string
  manufacturer?: string
  installation_date?: Date
  assigned_location?: string
  status?: string
  description?: string
}

export interface GetEquipmentReqParams {
  id: string
}

export interface DeleteEquipmentReqParams {
  id: string
}
