import { CasoLegal } from "src/casos-legales/entities/casos-legale.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Evento } from "src/eventos/entities/evento.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne,JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Abogado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar',{length: 10, unique:true})
  identification: string;

  @Column('varchar')
  name: string;

  @Column('text', {nullable:true})
  address: string;

  @Column('varchar',{length: 10})
  phone: string;

  @Column('varchar')
  email: string;

  @Column('boolean',{default:true})
  status:boolean;

  //Relaciones

  //@OneToOne(() => Usuario)
  //@JoinColumn({name:'user_id'})
  //user: Usuario;

  @OneToOne(() => Usuario, (user) => user.lawyer)
  user: Usuario;

  @OneToMany(() => CasoLegal, (casoLegal) => casoLegal.lawyer)
  legal_case: CasoLegal[];

  //@OneToMany(() => Evento, (evento) => evento.lawyer)
  //event: Evento[];


}
