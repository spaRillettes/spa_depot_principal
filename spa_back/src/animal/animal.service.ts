import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnimalService {
  constructor(private prisma: PrismaService) {}

  async createAnimal(data: Prisma.AnimalCreateInput): Promise<any> {
    return this.prisma.animal.create({
      data,
    });
  }
}