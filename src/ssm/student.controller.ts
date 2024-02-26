import { Body, Controller, Post,Get,Put, Param,Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Studentdto } from './studentdto.dto';

@Controller('too')
export class StudentController {
    constructor (private readonly studentService:StudentService) {}
    @Post()
    create(@Body() dto:Studentdto){
        return this.studentService.create(dto)
    }
    
    @Get()
    findAll(){
        return this.studentService.findAll();
    }
    @Put(':id')
    update(@Param('id') id: number,@Body() dto:Studentdto){
        return this.studentService.update(id,dto);
    }
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.studentService.delete(id);
    }
}
