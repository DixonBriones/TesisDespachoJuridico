import { CasoLegal } from "src/casos-legales/entities/casos-legale.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne,JoinColumn,ManyToOne, OneToMany ,CreateDateColumn} from "typeorm";

@Entity()
export class Documento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name_document: string;

  @Column('text', {nullable:true})
  description: string;

  @Column('varchar')
  path: string;

  @Column('boolean',{default:true})
  status:boolean;

  @CreateDateColumn()
  createdAt: Date;

  //Relaciones

  @ManyToOne(() => CasoLegal, (legal_case) => legal_case.document)
  @JoinColumn({name:'legalCase_id'})
  legal_case: CasoLegal;
}