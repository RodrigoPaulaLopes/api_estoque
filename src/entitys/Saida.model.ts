import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaidaProduto } from "./SaidaProduto.model";
import { Transportadora } from "./Transportadora.model";

@Entity()
export class Saida{


    @Column()
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    data_saida: Date

    @Column()
    total: number

    @Column()
    frete: number

    @Column()
    imposto: number

    @ManyToOne(() => Transportadora, transportadora => transportadora.saida)
    transportadora: Transportadora

    @OneToMany(() => SaidaProduto, saida_produto => saida_produto.saida)
    saida_produto: SaidaProduto[]

    
}