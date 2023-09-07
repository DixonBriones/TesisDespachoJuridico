import { Abogado } from "src/abogados/entities/abogado.entity";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Documento } from "src/documentos/entities/documento.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne,JoinColumn, OneToMany } from "typeorm";

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
  
  @Column('date',{default: new Date()})
  date_start: Date;

  @OneToOne(() => Abogado)
  @JoinColumn({name:'lawyer_id'})
  lawyer: Abogado;

  @OneToOne(() => Cliente)
  @JoinColumn({name:'client_id'})
  client: Cliente;

  @Column('boolean',{default:true})
  status:boolean;

  //Relaciones

  @OneToMany(() => Documento, (documeto) => documeto.legal_case)
  document: Documento;

}