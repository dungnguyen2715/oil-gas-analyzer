export interface CreateInstrumentReqBody {
  name: string
  code: string
  type: string
  equipment_id?: string
  location?: string
  manufacturer: string
  model: string
  installation_date?: Date | string
  status?: string
  description?: string
  is_active?: boolean
  created_by?: string
}

//Không update: created_by
export interface UpdateInstrumentReqBody {
  name?: string
  code?: string
  type?: string
  equipment_id?: string
  location?: string
  manufacturer?: string
  model?: string
  installation_date?: Date | string
  status?: string
  description?: string
  is_active?: boolean
}

export interface GetListInstrumentReqQuery {
  page?: number
  limit?: number
  status?: string
  type?: string
  manufacturer?: string
  equipment_id?: string
  is_active?: string
  search?: string
}
