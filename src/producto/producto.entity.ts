import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { TiendaEntity } from 'src/tienda/tienda.entity';

@Entity()
export class ProductoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
 
    @Column()
    precio: number;
 
    @Column()
    tipo: string;

    @ManyToMany(() => TiendaEntity, tienda => tienda.productos)
    @JoinTable()
    tiendas: TiendaEntity[];

}

