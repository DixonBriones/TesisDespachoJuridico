import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany ,JoinColumn,ManyToOne} from 'typeorm';
import { CasoLegal } from 'src/casos-legales/entities/casos-legale.entity';

@Entity()
export class Pago {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    amount: number;

    @Column('date')
    date_payment: Date;


    @ManyToOne(() => CasoLegal, (legal_case) => legal_case.payment)
    @JoinColumn({name:'legalCase_id'})
    legal_case: CasoLegal;
}
