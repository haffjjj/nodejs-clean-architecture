class UserDeliveryHttpRest{
  constructor( { userUseCase, http, error, logger, wrapper } ){
    this.userUseCase = userUseCase

    this.error = error
    this.logger = logger
    this.wrapper = wrapper
    
    http.get("/users", this.fetch.bind(this))
  }

  fetch(_, res){  
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