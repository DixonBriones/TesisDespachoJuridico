import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany, ManyToOne,JoinColumn } from 'typeorm';
import { TipoEvento } from 'src/tipo_evento/entities/tipo_evento.entity';
import { Abogado } from 'src/abogados/entities/abogado.entity';
import { CasoLegal } from 'src/casos-legales/entities/casos-legale.entity';

@Entity()
export class Evento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('text',{nullable:true})
  description: string;

  @Column('timestamp')
  date_start: Date;

  @Column('timestamp')
  date_end: Date;

  @Column('varchar')
  color: string;

  @Column('varchar')
  color_secondary: string;

  //@Column('boolean',{default:true})
  //status:boolean;

  @ManyToOne(() => TipoEvento, event_type => event_type.event,{eager:true})
  @JoinColumn({name:'eventType_id'})
  event_type: TipoEvento;


  //@ManyToOne(() => Abogado, (abogado) => abogado.event)
  //@JoinColumn({name:'lawyer_id'})
  //lawyer: Abogado;

  @ManyToOne(() => CasoLegal, (legal_case) => legal_case.document,{eager:true})
  @JoinColumn({name:'legalCase_id'})
  legal_case: CasoLegal;

}
