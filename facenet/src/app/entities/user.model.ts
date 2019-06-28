import { History } from './history.model';

export class User {
  id:number;
  name:string;
  surname:string;
  description:string;
  age:number;
  city:string;
  img:string;
  histories:History[];
}
