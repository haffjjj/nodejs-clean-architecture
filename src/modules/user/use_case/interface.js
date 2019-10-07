//@flow

type fetchUserReturn = { name: string }[] | Error

export interface I {
  fetch(): fetchUserReturn,
}