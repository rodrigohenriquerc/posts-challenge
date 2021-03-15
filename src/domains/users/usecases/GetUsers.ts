import { User } from '../models/User'

export type GetUsers = () => User[]

export declare namespace GetUsers {
  export type Data = User[]
}
