import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,OneToMany } from 'typeorm';
import { Evento } from 'src/eventos/entities/evento.entity';

@Entity()
export class TipoEvento {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar')
    name: string;

    @Column('boolean',{default:true})
    status:boolean;

    @OneToMany(type => Evento, event => event.event_type)
    event: Evento[];

}
