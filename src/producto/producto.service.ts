import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BusinessLogicException, BusinessError } from '../shared/errors/business-errors'
import { ProductoEntity } from './producto.entity';


@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(ProductoEntity)
        private readonly museumRepository: Repository<ProductoEntity>
    ){}
}
