export interface GoogleUser {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
}

export interface IJwtAuth {
  id: number,
  firstName?: string,
  lastName?:string,
  userName?:string
  email: string,
  typeUser:number
}

