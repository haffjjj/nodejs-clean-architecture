//@flow

import { I } from "./interface"
import { I as UserEntitiesInterface } from "../entities/interface"

class UserUseCase implements I {
  _userEntities: UserEntitiesInterface
  _logger: any

  constructor( obj: { userEntities: UserEntitiesInterface, logger: any } ) {
    this._userEntities = obj.userEntities
    this._logger = obj.logger
  }

  fetch() {
    try{
      const users = this._userEntities.fetchUser()
      return users
    }
    catch(e){
      this._logger("error", "UserUseCase-fetch", e.message)
      throw e
    }
  }
}

export default UserUseCase