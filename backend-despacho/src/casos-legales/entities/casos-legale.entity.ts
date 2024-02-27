import { Abogado } from "src/abogados/entities/abogado.entity";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Documento } from "src/documentos/entities/documento.entity";
import { TipoCaso } from "src/tipo_caso/entities/tipo_caso.entity";
import { Pago } from "src/pagos/entities/pago.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne,JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Evento } from "src/eventos/entities/evento.entity";
import {  Juez } from "src/jueces/entities/juece.entity";
import { EnteJurisdiccional } from "src/ente-jurisdiccional/entities/ente-jurisdiccional.entity";


@Entity()
export class CasoLegal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name_case: string;

  @Column('varchar',{unique:true,nullable:true})
  process_number: string;

  @Column('text', {nullable:true})
  description: string;

  @Column('varchar')
  status_case: string;

  @Column('date')
  date_start: Date;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  service_fee: number;

  @Column('varchar', {nullable:true})
  judge: string;

  @ManyToOne(() => TipoCaso, (case_type) => case_type.legal_case, {eager: true})
  @JoinColumn({name:'caseType_id'})
  case_type: TipoCaso;

  //@ManyToOne(() => EnteJurisdiccional, (jurisdictional_entity) => jurisdictional_entity.legal_case, {eager: true,nullable:true})
  //@JoinColumn({name:'jurisdictionalEntity_id'})
  //jurisdictional_entity: EnteJurisdiccional;

  @ManyToOne(() => Abogado, (abogado) => abogado.legal_case,{eager: true})
  @JoinColumn({name:'lawyer_id'})
  lawyer: Abogado;

  @ManyToOne(() => Cliente, (cliente) => cliente.legal_case,{eager: true})
  @JoinColumn({name:'client_id'})
  client: Cliente;

  //@ManyToOne(() => Juez, (juez) => juez.legal_case,{eager: true,nullable:true})
  //@JoinColumn({name:'judge_id'})
  //judge: Juez;

  @OneToMany(() => Pago, pago => pago.legal_case, { cascade: true })
  payment: Pago[];

  @OneToMany(() => Documento, documento => documento.legal_case, { cascade: true })
  document: Documento[];

  @OneToMany(() => Evento, evento => evento.legal_case, { cascade: true })
  event: Evento[];

  @Column('boolean',{default:true})
  status:boolean;

  //Relaciones

  //@OneToMany(() => Documento, (documeto) => documeto.legal_case)
  //document: Documento[];


}