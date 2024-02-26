import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

 @Entity({name: 'students'})
 export class Student{
    @PrimaryGeneratedColumn()
    id:number;
  
    @Column()
    name:string;
    
    @Column()
    age:number;

    @Column()
    rollno:number;
    
 }