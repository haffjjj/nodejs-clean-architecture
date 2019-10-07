import UserDeliveryHttpRest from "./delivery/http/user_delivery_rest"
import UserEntities from "./entities/user_entities"
import UserRepository from "./repository/user_repository"
import UserUseCase from "./use_case/user_use_case"

class UserModule {
  constructor( { http, error, logger, wrapper } ){
    const userRepository = new UserRepository()
    const userEntities = new UserEntities( { userRepository } )
    this.userUseCase = new UserUseCase( { userEntities, logger } )

    //rest delivery
    new UserDeliveryHttpRest( {
      userUseCase: this.userUseCase,
      http,
      error,
      logger,
      wrapper
    } )

  }

  useCase() {
    return this.userUseCase
  }
}

export default UserModule