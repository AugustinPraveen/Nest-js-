import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { Studentdto } from './studentdto.dto';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>){}
     async create(dto:Studentdto){
        const student =this.studentRepository.create(dto);
         return await this.studentRepository.save(student);
    }
    findAll(){
        return this.studentRepository.find();
    }
    async update(id:number,dto:Studentdto){
        const  student=await this.studentRepository.findOne({where:{id}});

        Object.assign(student,dto);
        return await this.studentRepository.save(student);

    }
    async delete(id:number){
        const  student=await this.studentRepository.findOne({where:{id}});

        
        return await this.studentRepository.remove(student);

    }
}
