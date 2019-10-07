//@flow

import { I } from "./interface"
import { I as UserRepositoryInterface } from "../repository/interface"

class UserEntities implements I {
  userRepository: UserRepositoryInterface

  constructor( obj: { userRepository: UserRepositoryInterface } ) {
    this.userRepository = obj.userRepository
  }

  fetchUser() {
    const users = this.userRepository.fetchUser()
    return users
  }
}

export default UserEntities