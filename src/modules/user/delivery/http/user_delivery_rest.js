//@flow

import { I } from "./interface"
import { I as UserUsecaseInterface } from "../../use_case/interface"

class UserDeliveryHttpRest implements I{
  _userUseCase: UserUsecaseInterface
  _error: any
  _logger: any
  _wrapper: any

  constructor( obj: { userUseCase: UserUsecaseInterface, http: any, error:any, logger:any, wrapper:any } ){
    this._userUseCase = obj.userUseCase

    this._error = obj.error
    this._logger = obj.logger
    this._wrapper = obj.wrapper
    
    obj.http.get("/users", this.fetch.bind(this))
  }

  fetch(_: any, res: any): any{  
    try{
      const users = this._userUseCase.fetch()
      res.send(this._wrapper.responseRest(users))
    }
    catch(e){
      this._logger('error', 'userDeliveryHttRest-fetch', e.message, e)
      res.status(this._error.getStatusCode(e.message)).json(this._wrapper.responseRest({}, e.message, e))
    }
  }
}

export default UserDeliveryHttpRest