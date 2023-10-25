export enum UserRole {
  User = 'user',
  Admin = 'admin',
  Learner = 'learner',
}

export type UserRoleLiteral = `${UserRole}`
