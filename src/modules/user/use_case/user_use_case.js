// @flow
import { I } from "./interface"
import { I as UserRepositoryInterface } from "../repository/interface"

class UserUseCase implements I {
  userEntities: UserRepositoryInterface
  logger: any

  constructor( obj: { userEntities: UserRepositoryInterface, logger: any } ) {
    this.userEntities = obj.userEntities
    this.logger = obj.logger
  }

  fetch() {
    try{
      const users = this.userEntities.fetchUser()
      return users
    }
    catch(e){
      this.logger("error", "UserUseCase-fetch", e.message)
      throw e
    }
  }
}

export default UserUseCase