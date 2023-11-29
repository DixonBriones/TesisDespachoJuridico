import { Abogado } from "src/abogados/entities/abogado.entity";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Documento } from "src/documentos/entities/documento.entity";
import { TipoCaso } from "src/tipo_caso/entities/tipo_caso.entity";
import { Pago } from "src/pagos/entities/pago.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne,JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Evento } from "src/eventos/entities/evento.entity";


@Entity()
export class CasoLegal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name_case: string;

  @Column('text', {nullable:true})
  description: string;

  @Column('varchar')
  status_case: string;

  @Column('date')
  date_start: Date;

  @Column({type: "decimal", precision: 10, scale: 2, default: 0})
  service_fee: number;

  @ManyToOne(() => TipoCaso, (case_type) => case_type.legal_case, {eager: true})
  @JoinColumn({name:'caseType_id'})
  case_type: TipoCaso;

  @ManyToOne(() => Abogado, (abogado) => abogado.legal_case,{eager: true})
  @JoinColumn({name:'lawyer_id'})
  lawyer: Abogado;

  @ManyToOne(() => Cliente, (cliente) => cliente.legal_case,{eager: true})
  @JoinColumn({name:'client_id'})
  client: Cliente;

  @OneToMany(() => Pago, pago => pago.legal_case)
  payment: Pago[];

  @OneToMany(() => Documento, documento => documento.legal_case)
  document: Documento[];

  @OneToMany(() => Evento, evento => evento.legal_case)
  event: Evento[];

  @Column('boolean',{default:true})
  status:boolean;

  //Relaciones

  //@OneToMany(() => Documento, (documeto) => documeto.legal_case)
  //document: Documento[];

}