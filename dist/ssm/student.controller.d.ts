import { StudentService } from './student.service';
import { Studentdto } from './studentdto.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(dto: Studentdto): Promise<import("./student.entity").Student>;
    findAll(): Promise<import("./student.entity").Student[]>;
    update(id: number, dto: Studentdto): Promise<import("./student.entity").Student>;
    delete(id: number): Promise<import("./student.entity").Student>;
}
