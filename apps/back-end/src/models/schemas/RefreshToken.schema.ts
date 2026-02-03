import { ObjectId } from 'mongodb'

interface RefreshTokenType {
  _id?: ObjectId
  token: string
  create_At?: Date
  email: string
}

export default class RefreshToken {
  _id?: ObjectId
  token: string
  create_At: Date
  email: string

  constructor({ _id, token, create_At, email }: RefreshTokenType) {
    this._id = _id
    this.token = token
    this.create_At = create_At || new Date()
    this.email = email
  }
}
