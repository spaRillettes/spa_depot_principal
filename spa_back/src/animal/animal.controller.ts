import { Body, Controller, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {
  }
  @Post()
  async create(@Body('firstname') createAnimalDto: { firstname: string }) {
    return this.animalService.createAnimal(createAnimalDto);
  }
}
