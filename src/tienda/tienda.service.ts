import { Injectable } from '@nestjs/common';
import { TiendaEntity } from './tienda.entity';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BusinessLogicException, BusinessError } from '../shared/errors/business-errors'
 
@Injectable()
export class TiendaService {
    constructor(
        @InjectRepository(TiendaEntity)
        private readonly tiendaRepository: Repository<TiendaEntity>
    ){}

    async findAll(): Promise<TiendaEntity[]> {
        return await this.tiendaRepository.find({ relations: ["productos"] });
    }

    async findOne(id: string): Promise<TiendaEntity> {
        const tienda: TiendaEntity = await this.tiendaRepository.findOne({where: {id}, relations: ["productos"] } );
        if (!tienda)
          throw new BusinessLogicException("La tienda con el id dado no ha sido encontrada", BusinessError.NOT_FOUND);
   
        return tienda;
    }

    async create(tienda: TiendaEntity): Promise<TiendaEntity> {
        return await this.tiendaRepository.save(tienda);
    }

    async update(id: string, tienda: TiendaEntity): Promise<TiendaEntity> {
        const persistedTienda: TiendaEntity = await this.tiendaRepository.findOne({where:{id}});
        if (!persistedTienda)
          throw new BusinessLogicException("La tienda con el id dado no ha sido encontrada", BusinessError.NOT_FOUND);
        
        return await this.tiendaRepository.save({...persistedTienda, ...tienda);
    }
}
