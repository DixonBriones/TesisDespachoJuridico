import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany } from 'typeorm';
import { CasoLegal } from 'src/casos-legales/entities/casos-legale.entity';

@Entity()
export class TipoCaso {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    name: string;

    @Column('boolean',{default:true})
    status:boolean;

    @OneToMany(type => CasoLegal, legal_case => legal_case.case_type)
    legal_case: CasoLegal[];
}
