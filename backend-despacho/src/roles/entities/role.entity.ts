import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar',{unique:true})
  name: string;

  @Column('varchar', {nullable:true})
  description: string;

  @Column('boolean',{default:true})
  status:boolean;
  
  //@ManyToMany(() => Usuario)
  //@JoinTable()
  //users: Usuario[];

  @OneToMany(() => Usuario, usuario => usuario.role)
  users: Usuario[];
}