//@flow

import { I } from "./interface"
import { I as UserRepositoryInterface } from "../repository/interface"

class UserEntities implements I {
  _userRepository: UserRepositoryInterface

  constructor( obj: { userRepository: UserRepositoryInterface } ) {
    this._userRepository = obj.userRepository
  }

  fetchUser() {
    const users = this._userRepository.fetchUser()
    return users
  }
}

export default UserEntities