class UserUseCase {
  constructor( { userEntities, logger } ) {
    this.userEntities = userEntities

    this.logger = logger
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