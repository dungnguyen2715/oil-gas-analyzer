export interface CreateUserReqBody {
  full_name: string
  email: string
  password: string
  phone: string
}

export interface GetListUserReqParams {
  page: number
  limit: number
  role: string
  status: string
}

export interface UpdateUserReqBody {
  phone?: string
  email?: string
  password?: string
  date_of_birth?: string
  [key: string]: any
}
