import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from "typeorm";
import { ProductoEntity } from "../producto/producto.entity";

@Entity()
export class TiendaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
 
    @Column()
    ciudad: number;
 
    @Column()
    direccion: string;

    @ManyToMany(() => ProductoEntity, producto => producto.tiendas)
    productos: ProductoEntity[];
}
