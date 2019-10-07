//@flow

export interface I {
  constructor(obj: { userEntities: any, logger: any }): any,
  fetch(): any,
}