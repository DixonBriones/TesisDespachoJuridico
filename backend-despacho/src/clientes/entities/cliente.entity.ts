import { CasoLegal } from "src/casos-legales/entities/casos-legale.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToOne, OneToMany } from "typeorm";

@Entity()
export class Cliente {
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

  @Column('varchar', {nullable:true})
  email: string;

  @Column('boolean',{default:true})
  status:boolean;

  //Relaciones

  @OneToMany(() => CasoLegal, (casoLegal) => casoLegal.client)
  legal_case: CasoLegal[];

}