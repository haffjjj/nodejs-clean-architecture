//@flow

import { I } from "./interface"
import { I as UserUsecaseInterface } from "../../use_case/interface"

class UserDeliveryHttpRest implements I{
  userUseCase: UserUsecaseInterface
  error: any
  logger: any
  wrapper: any

  constructor( obj: { userUseCase: UserUsecaseInterface, http: any, error:any, logger:any, wrapper:any } ){
    this.userUseCase = obj.userUseCase

    this.error = obj.error
    this.logger = obj.logger
    this.wrapper = obj.wrapper
    
    obj.http.get("/users", this.fetch.bind(this))
  }

  fetch(_: any, res: any): any{  
    try{
      const users = this.userUseCase.fetch()
      res.send(this.wrapper.responseRest(users))
    }
    catch(e){
      this.logger('error', 'userDeliveryHttRest-fetch', e.message, e)
      res.status(this.error.getStatusCode(e.message)).json(this.wrapper.responseRest({}, e.message, e))
    }
  }
}

export default UserDeliveryHttpRest