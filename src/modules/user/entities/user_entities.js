class UserEntities {
  constructor( { userRepository } ) {
    this.userRepository = userRepository
  }

  fetchUser() {
    const users = this.userRepository.fetchUser()
    return users
  }
}

export default UserEntities