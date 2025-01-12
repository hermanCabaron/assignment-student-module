import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from 'src/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(student: Partial<Student>): Promise<Student> {
    const newStudent = this.studentRepository.create(student);
    return this.studentRepository.save(newStudent);
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }
}
