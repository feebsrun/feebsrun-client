import { BaseEntity } from "./base.model";

export class Run extends BaseEntity {
    distance: Number;
    time: Number; // time is in milliseconds  
    path: String;
    date: Date; 
}