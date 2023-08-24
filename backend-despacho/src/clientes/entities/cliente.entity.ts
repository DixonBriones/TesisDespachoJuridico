import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  nif: string;

  @Column()
  dirección: string;

  @Column()
  teléfono: string;

  @Column()
  correoElectronico: string;
}