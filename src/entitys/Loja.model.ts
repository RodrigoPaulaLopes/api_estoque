import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./Cidade.entity";


@Entity()
export class Loja{

    @Column()
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nome: string 
    
    @Column()
    endereco: string 
    
    @Column()
    numero: number
    
    @Column()
    bairro: string 
    
    @Column()
    telefone: string 
    
    @Column()
    inscricao: string
    
    @Column()
    cnpj: string 

    @ManyToMany(() => Cidade, cidade => cidade.loja)
    cidade: Cidade
}