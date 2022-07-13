export interface IMscp {
  id?: any | null;
  block: string;
  street: string;
  postal: number;
  spot1: string;
  spot2: string;
  spot3: string;
  spot4: string;
}

export interface ICar {
  id?: any | null;
  carplate: string;
  location: number;
  startTime: string;
  endTime: string;
}

export interface IUser {
  id?: any | null;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  car: ICar;
}
