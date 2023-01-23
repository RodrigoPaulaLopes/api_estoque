import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProdutoModel } from "./Produto.model";
import { Saida } from "./Saida.model";

@Entity()
export class SaidaProduto {
    
    @Column()
    @PrimaryGeneratedColumn()
    id?: number


    @Column()
    lote: string

    @Column()
    quantidade: number


    @Column()
    valor: number

    @ManyToOne(() => ProdutoModel, produto => produto.saida_produto)
    produtos: ProdutoModel

    @ManyToOne(() => Saida, saida => saida.saida_produto)
    saida: Saida
    



}