import { WareHouseStatus } from '~/constants/enum'

export interface CreateWareHouseReqBody {
  name: string
  location: string
  capacity: number
  description?: string
  status?: WareHouseStatus
}

export interface UpdateWareHouseReqBody {
  name?: string
  location?: string
  capacity?: number
  description?: string
  status?: WareHouseStatus
}

export interface GetListWareHouseReqParams {
  page: number
  limit: number
  status?: WareHouseStatus
}

export interface DeleteWareHouseReqParams {
  id: string
}

export interface GetWareHouseReqParams {
  id: string
}
