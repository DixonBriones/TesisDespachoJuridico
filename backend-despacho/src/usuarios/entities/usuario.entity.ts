import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToOne } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { Abogado } from 'src/abogados/entities/abogado.entity';


@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar',{length: 20, unique:true})
  username: string;

  @Column('varchar')
  password: string;

  @Column('boolean',{default:true})
  status:boolean;

  //Relaciones

  @OneToOne(() => Abogado, (abogado) => abogado.user)
  lawyer: Abogado;
 
}