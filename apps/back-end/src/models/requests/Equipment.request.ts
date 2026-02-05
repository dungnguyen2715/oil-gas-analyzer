export interface CreateEquipmentReqBody {
  name: string
  type: string
  serial_number: string
  model: string
  manufacturer: string
  last_maintenance_date: Date
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
  last_maintenance_date?: Date
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

export interface GetListEquipmentReqQuery {
  page?: string
  limit?: string
  name?: string
  type?: string
  status?: string
  warehouse_id?: string
}
