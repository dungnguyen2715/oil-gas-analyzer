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
