import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

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
}
