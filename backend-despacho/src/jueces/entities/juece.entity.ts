import { CasoLegal } from "src/casos-legales/entities/casos-legale.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToOne, OneToMany } from "typeorm";

@Entity()
export class Juez {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar',{unique:true})
  name: string;

  @Column('boolean',{default:true})
  status:boolean;



  //Relaciones

 // @OneToMany(() => CasoLegal, (casoLegal) => casoLegal.judge)
 // legal_case: CasoLegal[];

}