// @flow

import { I } from "./interface"

class UserRepository implements I {
  fetchUser() {
    return [
      {
        name: "hafiz"
      },
      {
        name: "joundy"
      },
      {
        name: "syafie"
      }
    ]
  }
}

export default UserRepository