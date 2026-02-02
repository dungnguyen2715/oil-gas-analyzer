export interface CreateWareHouseReqBody {
  name: string
  location: string
  capacity: number
  description?: string
  status?: string
}

export interface UpdateWareHouseReqBody {
  name?: string
  location?: string
  capacity?: number
  description?: string
  status?: string
}

export interface GetListWareHouseReqParams {
  page: number
  limit: number
  status?: string
}

export interface DeleteWareHouseReqParams {
  id: string
}

export interface GetWareHouseReqParams {
  id: string
}
