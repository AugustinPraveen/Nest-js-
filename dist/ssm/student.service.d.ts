import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { Studentdto } from './studentdto.dto';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(dto: Studentdto): Promise<Student>;
    findAll(): Promise<Student[]>;
    update(id: number, dto: Studentdto): Promise<Student>;
    delete(id: number): Promise<Student>;
}
