// @flow

type fetchUserReturn = { name: string }[]

export interface I {
  fetchUser(): fetchUserReturn
}