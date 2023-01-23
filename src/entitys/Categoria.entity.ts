import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProdutoModel } from "./Produto.model";


@Entity()
export class Categoria{


    @Column()
    @PrimaryGeneratedColumn()
    id?: number


    @Column()
    categoria: string


    @OneToMany(() => ProdutoModel, produto => produto.categoria)
    produtos: ProdutoModel[]

    
}