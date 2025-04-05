import { Body, Controller, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { Prisma } from '@prisma/client';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {
  }
  @Post()
  async create(@Body() createAnimalDto: Prisma.AnimalCreateInput) {
    return this.animalService.createAnimal(createAnimalDto);
  }
}
