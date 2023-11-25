import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('boolean',{default:true})
  status:boolean;
  
  //@ManyToMany(() => Usuario)
  //@JoinTable()
  //users: Usuario[];

  @OneToMany(type => Usuario, usuario => usuario.role)
  users: Usuario[];
}