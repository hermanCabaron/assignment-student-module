import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from 'src/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() student: Partial<Student>): Promise<Student> {
    return this.studentService.create(student);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }
}

