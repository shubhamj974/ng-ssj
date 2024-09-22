export interface Iuser {
  userName: string;
  id: string;
  userType: userType;
}

export enum userType {
  Admin = 'Admin',
  User = 'User',
}
