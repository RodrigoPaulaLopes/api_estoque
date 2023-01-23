import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Entrada } from "./Entrada.model";
import { ProdutoModel } from "./Produto.model";

@Entity()
export class EntradaProduto {
    
    @Column()
    @PrimaryGeneratedColumn()
    id?: number


    @Column()
    lote: string

    @Column()
    quantidade: number


    @Column()
    valor: number

    @ManyToOne(() => ProdutoModel, produto => produto.entrada_produto)
    produtos: ProdutoModel


    @ManyToOne(() => Entrada, entrada => entrada.entrada_produto)
    entrada: EntradaProduto
    

 


}