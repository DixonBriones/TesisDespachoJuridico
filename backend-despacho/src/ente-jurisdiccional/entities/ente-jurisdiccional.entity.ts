import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany } from 'typeorm';
import { CasoLegal } from 'src/casos-legales/entities/casos-legale.entity';

@Entity()
export class EnteJurisdiccional {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar',{unique:true})
    name: string;

    @Column('boolean',{default:true})
    status:boolean;

//    @OneToMany(() => CasoLegal, (casoLegal) => casoLegal.jurisdictional_entity)
//    legal_case: CasoLegal[];
}
