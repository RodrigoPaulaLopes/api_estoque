import { PrimaryGeneratedColumn, Column, ManyToOne, Entity  } from "typeorm";
import { Cidade } from "./Cidade.entity";
import { ProdutoModel } from "./Produto.model";

@Entity()
export class Fornecedor{

    @Column()
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    fornecedor: string

    @Column()
    endereco: string

    @Column()
    numero: number

    @Column()
    bairro: string 

    @Column()
    cep: string 

    @Column()
    contato: string 

    @Column()
    cnpj: string 

    @Column()
    inscricao: string 

    @Column()
    telefone: string

    @ManyToOne(() => Cidade, (cidade) => cidade.fornecedor)
    cidade: Cidade

    @ManyToOne(() => ProdutoModel, (produto) => produto.fornecedor)
    produtos: ProdutoModel[]
}