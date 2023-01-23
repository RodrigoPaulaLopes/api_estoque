import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EntradaProduto } from "./EntradaProduto.model";
import { Transportadora } from "./Transportadora.model";

@Entity()
export class Entrada{


    @Column()
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    data_entrada: Date

    @Column()
    data_pedido: Date

    @Column()
    total: number

    @Column()
    frete: number

    @Column()
    numero_nota_fiscal: number

    @Column()
    imposto: number

    @ManyToOne(() => Transportadora, transportadora => transportadora.entrada)
    transportadora: Transportadora

    @OneToMany(() => EntradaProduto, entrada_produto => entrada_produto.entrada)
    entrada_produto: EntradaProduto[]
}