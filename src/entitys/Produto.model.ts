import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categoria } from "./Categoria.entity"
import { EntradaProduto } from "./EntradaProduto.model"
import { Fornecedor } from "./Fornecedor.entity"
import { SaidaProduto } from "./SaidaProduto.model"


@Entity()
export class ProdutoModel {

    @Column()
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    nome: string

    @Column()
    preco: number

    @Column()
    descricao: string

    @Column()
    quantidade: number

    @Column()
    status: boolean

    @ManyToOne(() => Categoria, categoria => categoria.produtos)
    categoria: Categoria

    @ManyToOne(() => Fornecedor, fornecedor => fornecedor.produtos)
    fornecedor: Fornecedor

    @OneToMany(() => EntradaProduto, entrada_produto => entrada_produto.produtos)
    entrada_produto: EntradaProduto[]

    @OneToMany(() => SaidaProduto, saida_produto => saida_produto.produtos)
    saida_produto: SaidaProduto[]

 

    

  
}