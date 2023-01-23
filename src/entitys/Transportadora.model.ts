import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./Cidade.entity";
import { Entrada } from "./Entrada.model";
import { Saida } from "./Saida.model";

@Entity()
export class Transportadora{

    @Column()
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    transportadora: string

    @Column()
    endereco: string

    @Column()
    numero: number

    @Column()
    bairro: string

    @Column()
    cep: string

    @Column()
    cnpj: string

    @Column()
    insc: string

    @Column()
    contato: string

    @Column()
    telefone: string

    @ManyToOne(() => Cidade, cidade => cidade.transportadora)
    cidade: Cidade

    @OneToMany(() => Entrada, entrada => entrada.transportadora)
    entrada: Entrada[]

    @OneToMany(() => Saida, saida => saida.transportadora)
    saida: Saida[]

    
}