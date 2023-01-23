import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Fornecedor } from "./Fornecedor.entity";
import { Loja } from "./Loja.model";
import { Transportadora } from "./Transportadora.model";

@Entity()
export class Cidade {

    @Column()
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    uf: string

    @Column()
    cidade: string 

    @OneToMany(() => Fornecedor, (fornecedor) => fornecedor.cidade)
    fornecedor: Fornecedor[]
    
    @OneToMany(() => Transportadora, (transportadora) => transportadora.cidade)
    transportadora: Transportadora[]

    @OneToMany(() => Loja, loja => loja.cidade)
    loja: Loja[]
    
} 